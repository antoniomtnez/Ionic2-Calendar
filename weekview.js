import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { IonSlides } from '@ionic/angular';
import { Component, HostBinding, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, TemplateRef, ElementRef } from '@angular/core';
import { CalendarService } from './calendar.service';
import * as moment from 'moment';
var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.autoSelect = true;
        this.dir = '';
        this.scrollToHour = 0;
        this.onRangeChanged = new EventEmitter();
        this.onEventSelected = new EventEmitter();
        this.onTimeSelected = new EventEmitter();
        this.onTitleChanged = new EventEmitter(true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;

        this.eventsDay = [];
    }
    WeekViewComponent_1 = WeekViewComponent;
    WeekViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var times = [], currentHour = 0, currentDate = startTime.getDate();
        var hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                var row = [];
                for (var day = 0; day < 7; day += 1) {
                    var time = new Date(startTime.getTime());
                    time.setHours(currentHour + hour, interval);
                    time.setDate(currentDate + day);
                    row.push({
                        events: [],
                        time: time
                    });
                }
                times.push(row);
            }
        }
        return times;
    };


    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_1 = orderedEvents[i_2];
            var index = event_1.startIndex * hourParts + event_1.startOffset;
            while (index < event_1.endIndex * hourParts - event_1.endOffset) {
                cells[index].events.push(event_1);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_2 = orderedEvents[i];
            if (!event_2.overlapNumber) {
                var overlapNumber = event_2.position + 1;
                event_2.overlapNumber = overlapNumber;
                var eventQueue = [event_2];
                while (event_2 = eventQueue.shift()) {
                    var index = event_2.startIndex * hourParts + event_2.startOffset;
                    while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        this.hourRange = this.endHour - this.startHour;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            var datePipe_1 = new DatePipe(this.locale);
            /* this.formatDayHeader = function (date) {
                 return datePipe_1.transform(date, this.formatWeekViewDayHeader);
             };*/
            this.formatDayHeader = function (date) {
                return datePipe_1.transform(date, "EEE");
            };

            this.formatDayH = function (date) {
                return datePipe_1.transform(date, "d");
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe_2 = new DatePipe(this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe_3 = new DatePipe(this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_3.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        //this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(function (direction) {
            if (direction === 1) {
                _this.slider.slideNext();
            }
            else if (direction === -1) {
                _this.slider.slidePrev();
            }
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        /* if (this.scrollToHour > 0) {
             var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
             var me_1 = this;
             setTimeout(function () {
                 me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
             }, 50);
         }*/
    };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited) {
            return;
        }
        var eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }

        var currentViewIndex = this.currentViewIndex;
        var direction = 0;

        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };

    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.createDateObjects = function (startTime, startHour, endHour) {
        var times = [], currentHour = startTime.getHours(), currentDate = startTime.getDate();
        for (var hour = startHour; hour < endHour; hour += 1) {
            var row = [];
            for (var day = 0; day < 7; day += 1) {
                var time = new Date(startTime.getTime());
                time.setHours(currentHour + hour);
                time.setDate(currentDate + day);
                row.push({
                    events: [],
                    time: time
                });
            }
            times.push(row);
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime()), i = 0;
        current.setHours(12);
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: []
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.prototype.slideView = function (direction) {
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent_1.getDates(startTime, 7);
        var dayHeaders = [];
        var dayHs = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeader(dates[i].date));
            dayHs.push(this.formatDayH(dates[i].date));
        }
        return {
            rows: WeekViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour),
            dates: dates,
            dayHeaders: dayHeaders,
            dayHs: dayHs

        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(),
            month = currentDate.getMonth(),
            date = currentDate.getDate(),
            day = currentDate.getDay();
        var difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        // set hour to 12 to avoid DST problem
        var firstDayOfWeek = new Date(year, month, date - difference);
        //var firstDayOfWeek = new Date(year, month, date - difference, 12, 0, 0), endTime = new Date(year, month, date - difference + 7, 12, 0, 0);
        var endTime = new Date(year, month, date - difference + 7);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var range = this.range,
            eventSource = this.eventSource,
            len = eventSource ? eventSource.length : 0,
            startTime = this.range.startTime,
            endTime = this.range.endTime,
            utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()),
            utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()),
            currentViewIndex = this.currentViewIndex,
            rows = this.views[currentViewIndex].rows,
            dates = this.views[currentViewIndex].dates,
            oneHour = 3600000,
            oneDay = 86400000,
            eps = 0.0006,
            rangeStartRowIndex = this.startHour * this.hourSegments,
            rangeEndRowIndex = this.endHour * this.hourSegments,
            allRows = 24 * this.hourSegments;
        var allDayEventInRange = false, normalEventInRange = false;
        for (var r = 0; r < 7; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }







        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i],
                eventStartTime = new Date(event_1.startTime.getTime()),
                eventEndTime = new Date(event_1.endTime.getTime()),
                st = void 0,
                et = void 0;
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    st = utcStartTime;
                    et = utcEndTime;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    st = startTime;
                    et = endTime;
                }
            }
            var timeDiff = void 0;
            var timeDifferenceStart = void 0;
            if (eventStartTime <= st) {
                timeDifferenceStart = 0;
            }
            else {
                timeDiff = eventStartTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceStart = timeDiff / oneDay;
            }
            var timeDifferenceEnd = void 0;
            if (eventEndTime >= et) {
                timeDiff = et.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            else {
                timeDiff = eventEndTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            while (index < timeDifferenceEnd - eps) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 7; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 7; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }

    };
    WeekViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = new Date(this.range.startTime.getTime());
        firstDayOfWeek.setHours(12, 0, 0, 0);
        return this.formatTitle(firstDayOfWeek);
    };
    WeekViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (className) {
                className += ' ';
            }
            className = 'weekview-with-event';
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-current';
        }
        return className;
    };

    WeekViewComponent.prototype.grupsDay = function(list){



        var groups;



        if(list && list.length > 0){

            var allDays = [];

            var orderByOur = [];



            for (var att of list){

                if(att.allDay){

                    allDays.push(att);

                }else{

                    orderByOur.push({

                        time: moment(att.startTime).format('hh:00 a'),

                        event: att

                    });

                }

            }

            groups = [];

            if(allDays.length > 0){
                groups.push({
                    time: 'AllDay',
                    events: allDays
                });

            }

            for (var att1 of orderByOur ){
                var exist = false;

                for (var att2 of groups){
                    if(att1.time == att2.time){
                        att2.events.push(att1.event);
                        exist = true;
                    }

                }
                if(!exist) {
                    groups.push({
                        time: att1.time,
                        events: [att1.event]
                    });

                }
            }
        }
        return groups;
    }


    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, isForbidden = new Array(len);
        var maxColumn = 0;
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), currentCalendarDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay), currentDayDifference = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getTime()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        for (var r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;

        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
            this.selectDay(view.dates[selectedDayDifference]);

        }
        if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;

        }
    };
    WeekViewComponent.prototype.daySelected = function (viewDate) {
        var selectedDate = viewDate.date, dates = this.views[this.currentViewIndex].dates, currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        this.calendarService.setCurrentDate(selectedDate);
        for (var r = 0; r < 7; r += 1) {
            dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
        }
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: viewDate.events.map(function (e) { return e.event; }), disabled: disabled });
    };


    WeekViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };

    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };

    //MGH
    WeekViewComponent.prototype.selectDay = function (viewDate) {
        if (!this.views)
            return;
        var selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear(), direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            // if (direction === 0) {
            var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
            for (var r = 0; r < 7; r += 1) {
                dates[r].selected = false;
            }
            if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
                dates[selectedDayDifference].selected = true;
                this.selectedDate = dates[selectedDayDifference];
            }

        }
        this.eventsDay = events;

        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };

    WeekViewComponent.prototype.countEvent = function (events) {
        if(events.length > 10) return "10+";
        if(events.length <= 10) return events.length + "";
        if(events.length < 1) return "0";
    };

    WeekViewComponent.prototype.getDayEventMonthTime = function (event){
        return moment(event.startTime).format('hh:mm a');
    }


    var WeekViewComponent_1;

    var color_monthviewprimarywithevent = 'var(--ion-color-secondary)';
    var bgcolor_monthviewcurrent = '#f0f0f0';
    var bgcolor_monthviewselected = color_monthviewprimarywithevent;
    var bgcolor_monthviewsecondarywithevent = '#d9edf7';

    tslib_1.__decorate([
        ViewChild('weekSlider'),
        tslib_1.__metadata("design:type", IonSlides)
    ], WeekViewComponent.prototype, "slider", void 0);
    tslib_1.__decorate([
        HostBinding('class.weekview'),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "class", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], WeekViewComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatHourColumn", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeekViewComponent.prototype, "startingDayWeek", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeekViewComponent.prototype, "allDayLabel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeekViewComponent.prototype, "hourParts", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], WeekViewComponent.prototype, "eventSource", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "autoSelect", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], WeekViewComponent.prototype, "markDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], WeekViewComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "dateFormatter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "dir", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "scrollToHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeekViewComponent.prototype, "startHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeekViewComponent.prototype, "endHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "sliderOptions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeekViewComponent.prototype, "hourSegments", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onRangeChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onEventSelected", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onTimeSelected", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onTitleChanged", void 0);
    WeekViewComponent = WeekViewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'weekview',
            template: "\n " +
                "       <ion-slides #weekSlider [options]=\"sliderOptions\"  [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\"\n " +
                "                   class=\"slides-container\">\n " +
                "    <ion-slide>\n" +
                "      <table class=\"table table-fixed weekview-header\">\n" +
                "        <thead>\n" +
                "        <tr>\n" +
                "          <th class=\"weekview-header text-center\" *ngFor=\"let dayH of [0,1,2,3,4,5,6]\" tappable (click)=\"selectDay(views[0].dates[dayH])\"\n" +
                "            [ngClass]=\"getHighlightClass(views[0].dates[dayH])\">\n" +
                "\n" +
                "\n" +
                "            <p>{{views[0].dayHeaders[dayH]}}</p>\n" +
                "            <h2>{{views[0].dayHs[dayH]}}</h2>\n" +
                "            <div class=\"have-events\">\n" +
                "              <ion-badge *ngIf=\"views[0].dates[dayH].events.length > 0\">{{countEvent(views[0].dates[dayH].events)}}</ion-badge>\n" +
                "            </div>\n" +
                "          </th>\n" +
                "        </tr>\n" +
                "\n" +
                "        </thead>\n" +
                "      </table>\n" +
                "    </ion-slide>\n" +
                "    <ion-slide>\n" +
                "      <table class=\"table table-fixed weekview-header\">\n" +
                "        <thead>\n" +
                "        <tr>\n" +
                "          <th class=\"weekview-header text-center\" *ngFor=\"let dayH of [0,1,2,3,4,5,6]\" tappable (click)=\"selectDay(views[1].dates[dayH])\"\n" +
                "              [ngClass]=\"getHighlightClass(views[1].dates[dayH])\">\n" +
                "\n" +
                "\n" +
                "            <p>{{views[1].dayHeaders[dayH]}}</p>\n" +
                "            <h2>{{views[1].dayHs[dayH]}}</h2>\n" +
                "            <div class=\"have-events\">\n" +
                "              <ion-badge *ngIf=\"views[1].dates[dayH].events.length > 0\">{{countEvent(views[1].dates[dayH].events)}}</ion-badge>\n" +
                "            </div>\n" +
                "          </th>\n" +
                "        </tr>\n" +
                "        </thead>\n" +
                "      </table>\n" +
                "\n" +
                "    </ion-slide>\n" +
                "    <ion-slide>\n" +
                "      <table class=\"table table-fixed weekview-header\">\n" +
                "        <thead>\n" +
                "        <tr>\n" +
                "          <th class=\"weekview-header text-center\" *ngFor=\"let dayH of [0,1,2,3,4,5,6]\" tappable (click)=\"selectDay(views[2].dates[dayH])\"\n" +
                "              [ngClass]=\"getHighlightClass(views[2].dates[dayH])\">\n" +
                "\n" +
                "\n" +
                "            <p>{{views[2].dayHeaders[dayH]}}</p>\n" +
                "            <h2>{{views[2].dayHs[dayH]}}</h2>\n" +
                "            <div class=\"have-events\">\n" +
                "              <ion-badge *ngIf=\"views[2].dates[dayH].events.length > 0\">{{countEvent(views[2].dates[dayH].events)}}</ion-badge>\n" +
                "            </div>\n" +
                "          </th>\n" +
                "        </tr>\n" +
                "        </thead>\n" +
                "      </table>\n" +
                "\n" +
                "    </ion-slide>\n" +
                "       </ion-slides>\n    "+

                "  <ion-list has-bouncing=\"false\" overflow-scroll=\"false\">\n" +
                "\n" +
                "    <ion-item-divider class=\"list-title\">{{'EVENT_CALENDAR_LISTEVENT_TITLE' | translate}}</ion-item-divider>\n" +
                "\n" +
                "\n" +
                "    <ion-item-group *ngFor=\"let group of grupsDay(eventsDay)\">\n" +
                "\n" +
                "      <ion-item-divider sticky>\n" +
                "        <ion-label>\n" +
                "          {{group.time}}\n" +
                "        </ion-label>\n" +
                "      </ion-item-divider>\n" +
                "\n" +
                "      <ion-item lines=\"full\" class=\"list-container\"  [style.border-left-color]=\"event.color\" [style.border-left-style]=\"'solid'\" [style.border-left-width]=\"'6px'\" (click)=\"eventSelected(event)\" *ngFor=\"let event of group.events\">\n" +
                "\n" +
                "        <ion-label slot=\"start\" *ngIf=\"!event.allDay\" style=\"max-width:90px;\">\n" +
                "          <p>{{getDayEventMonthTime(event)}} </p>\n" +
                "        </ion-label>\n" +
                "\n" +
                "        <ion-label>\n" +
                "          <h3>{{event.title}}</h3>\n" +
                "        </ion-label>\n" +
                "\n" +
                "      </ion-item>\n" +
                "\n" +
                "    </ion-item-group>\n" +
                "\n" +
                "    <ion-item class=\"noevents\" *ngIf=\"eventsDay.length==0\">\n" +
                "      <h2>{{'EVENT_CALENDAR_LISTEVENT_NOEVENT' | translate}}</h2>\n" +
                "    </ion-item>\n" +
                "\n" +
                "  </ion-list>\n" ,
            styles: ["" +
            "" +
            "" +
            "" +
            "" +
            "\n" +
            ".table-fixed {\n" +
            "  table-layout: fixed;\n" +
            "}\n" +
            ".table {\n" +
            "  width: 100%;\n" +
            "  max-width: 100%;\n" +
            "  background-color: white;\n" +
            "}\n" +
            ".table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n" +
            ".table > tbody > tr > td, .table > tfoot > tr > td {\n" +
            "  padding: 8px;\n" +
            "  line-height: 20px;\n" +
            "  vertical-align: top;\n" +
            "}\n" +
            ".table > thead > tr > th {\n" +
            "  vertical-align: bottom;\n" +
            "  border-bottom: 2px solid #ddd;\n" +
            "}\n" +
            ".table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n" +
            "  border-top: 0\n" +
            "}\n" +
            ".table > tbody + tbody {\n" +
            "  border-top: 2px solid #ddd;\n" +
            "}\n" +
            ".table-bordered {\n" +
            "  border: 1px solid #ddd;\n" +
            "}\n" +
            ".table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n" +
            ".table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n" +
            "  border: 1px solid #ddd;\n" +
            "}\n" +
            ".table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n" +
            "  border-bottom-width: 2px;\n" +
            "}\n" +
            ".table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n" +
            "  background-color: #f9f9f9\n" +
            "}\n" +
            ".calendar-hour-column {\n" +
            "  width: 50px;\n" +
            "  white-space: nowrap;\n" +
            "}\n" +
            ".calendar-event-wrap {\n" +
            "  position: relative;\n" +
            "  width: 100%;\n" +
            "  height: 100%;\n" +
            "}\n" +
            ".calendar-event {\n" +
            "  position: absolute;\n" +
            "  padding: 2px;\n" +
            "  cursor: pointer;\n" +
            "  z-index: 10000;\n" +
            "}\n" +
            ".calendar-cell {\n" +
            "  padding: 0 !important;\n" +
            "  height: 37px;\n" +
            "}\n" +
            ".weekview-allday-label {\n" +
            "  float: left;\n" +
            "  height: 100%;\n" +
            "  line-height: 50px;\n" +
            "  text-align: center;\n" +
            "  width: 50px;\n" +
            "  border-left: 1px solid #ddd;\n" +
            "}\n" +
            "[dir=\"rtl\"] .weekview-allday-label {\n" +
            "  float: right;\n" +
            "  border-right: 1px solid #ddd;\n" +
            "}\n" +
            ".weekview-allday-content-wrapper {\n" +
            "  margin-left: 50px;\n" +
            "  overflow: hidden;\n" +
            "  height: 51px;\n" +
            "}\n" +
            "[dir=\"rtl\"] .weekview-allday-content-wrapper {\n" +
            "  margin-left: 0;\n" +
            "  margin-right: 50px;\n" +
            "}\n" +
            ".weekview-allday-content-table {\n" +
            "  min-height: 50px;\n" +
            "}\n" +
            ".weekview-allday-content-table td {\n" +
            "  border-left: 1px solid #ddd;\n" +
            "  border-right: 1px solid #ddd;\n" +
            "}\n" +
            ".weekview-header th {\n" +
            "  overflow: hidden;\n" +
            "  white-space: nowrap;\n" +
            "  font-size: 14px;\n" +
            "}\n" +
            ".weekview-allday-table {\n" +
            "  height: 50px;\n" +
            "  position: relative;\n" +
            "  border-bottom: 1px solid #ddd;\n" +
            "  font-size: 14px;\n" +
            "}\n" +
            ".weekview-normal-event-container {\n" +
            "  margin-top: 87px;\n" +
            "  overflow: hidden;\n" +
            "  left: 0;\n" +
            "  right: 0;\n" +
            "  top: 0;\n" +
            "  bottom: 0;\n" +
            "  position: absolute;\n" +
            "  font-size: 14px;\n" +
            "}\n" +
            ".weekview .slide-zoom {\n" +
            "  height: 100%;\n" +
            "}\n" +
            ".weekview-allday-content-wrapper scroll-content {\n" +
            "  width: 100%;\n" +
            "}\n" +
            "::-webkit-scrollbar,\n" +
            "*::-webkit-scrollbar {\n" +
            "  display: none;\n" +
            "}\n" +
            ".table > tbody > tr > td.calendar-hour-column {\n" +
            "  padding-left: 0;\n" +
            "  padding-right: 0;\n" +
            "  vertical-align: middle;\n" +
            "}\n" +
            "@media (max-width: 750px) {\n" +
            "  .weekview-allday-label, .calendar-hour-column {\n" +
            "    width: 31px;\n" +
            "    font-size: 12px;\n" +
            "  }\n" +
            "  .weekview-allday-label {\n" +
            "    padding-top: 4px;\n" +
            "  }\n" +
            "  .table > tbody > tr > td.calendar-hour-column {\n" +
            "    padding-left: 0;\n" +
            "    padding-right: 0;\n" +
            "    vertical-align: middle;\n" +
            "    line-height: 12px;\n" +
            "  }\n" +
            "  .table > thead > tr > th.weekview-header {\n" +
            "    padding-left: 0;\n" +
            "    padding-right: 0;\n" +
            "    font-size: 12px;\n" +
            "  }\n" +
            "  .weekview-allday-label {\n" +
            "    line-height: 20px;\n" +
            "  }\n" +
            "  .weekview-allday-content-wrapper {\n" +
            "    margin-left: 31px;\n" +
            "  }\n" +
            "  [dir=\"rtl\"] .weekview-allday-content-wrapper {\n" +
            "    margin-left: 0;\n" +
            "    margin-right: 31px;\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            ".have-events{\n" +
            "  width: 100%;\n" +
            "  height: 20px;\n" +
            "}\n" +
            "\n" +
            ".weekview-primary-with-event {\n" +
            "  background-color: #3a87ad;\n" +
            "  color: white;\n" +
            "}\n" +
            "\n" +
            ".weekview-secondary-with-event {\n" +
            "  background-color: "+bgcolor_monthviewsecondarywithevent+";\n" +
            "}\n" +
            "\n" +
            ".weekview-selected {\n" +
            "  background-color: "+color_monthviewprimarywithevent+";\n" +
            "  color: white;\n" +
            "}\n" +
            "\n" +
            ".weekview-current {\n" +
            "  background-color: "+bgcolor_monthviewcurrent+";\n" +
            "}\n" +
            "\n" +
            ".text-muted {\n" +
            "  color: #999;\n" +
            "}\n" +
            "\n" +
            ".outer {\n" +
            "  width: 100%;\n" +
            "  text-align: center;\n" +
            "}\n" +
            "\n" +
            "\n" +
            ".circle-text {\n" +
            "  width:50%;\n" +
            "}\n" +
            ".circle-text:after {\n" +
            "  content: \"\";\n" +
            "  width: 100%;\n" +
            "  height:0;\n" +
            "  padding-bottom: 100%;\n" +
            "  background: #4679BD;\n" +
            "  -moz-border-radius: 50%;\n" +
            "  -webkit-border-radius: 50%;\n" +
            "  border-radius: 50%;\n" +
            "}\n" +
            ".circle-text div {\n" +
            "  float:left;\n" +
            "  width:100%;\n" +
            "  padding-top:50%;\n" +
            "  line-height:1em;\n" +
            "  margin-top:-0.5em;\n" +
            "  text-align:center;\n" +
            "  color:white;\n" +
            "}\n" +
            "ion-badge {\n" +
            " min-width: 25px;\n" +
            " font-weight: normal !important;\n" +
            "} " +
            ".weekview-with-event h2 {\n" +
            " color: "+color_monthviewprimarywithevent+";\n" +
            "} " +
            ".weekview-selected h2, .weekview-current h2 {\n" +
            " color: white!important;\n" +
            "} " +
            "" +
            "" +
            "" +
            ""],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [CalendarService, ElementRef])
    ], WeekViewComponent);
    return WeekViewComponent;
}());
export { WeekViewComponent };
