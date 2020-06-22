/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/dist/core.ngfactory";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/common";
import * as i4 from "./monthview.ngfactory";
import * as i5 from "./monthview";
import * as i6 from "./calendar.service";
import * as i7 from "./weekview.ngfactory";
import * as i8 from "./weekview";
import * as i9 from "./dayview.ngfactory";
import * as i10 from "./dayview";
import * as i11 from "./calendar";
var styles_CalendarComponent = ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { height: 100%; }\n\n        .event-detail-container[_ngcontent-%COMP%] {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label[_ngcontent-%COMP%] {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail[_ngcontent-%COMP%] {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn[_ngcontent-%COMP%] {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner[_ngcontent-%COMP%] {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner[_ngcontent-%COMP%] {\n            font-size: 12px;\n          }\n        }"];
var RenderType_CalendarComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_CalendarComponent, data: {} });
export { RenderType_CalendarComponent as RenderType_CalendarComponent };
function View_CalendarComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.view.dates[((_v.context.row * 7) + _v.context.col)].label; _ck(_v, 0, 0, currVal_0); }); }
function View_CalendarComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "monthview-eventdetail-timecolumn"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", " - ", " "])), i0.ɵppd(2, 2), i0.ɵppd(3, 2)], null, function (_ck, _v) { var currVal_0 = i0.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i0.ɵnov(_v.parent.parent.parent.parent, 0), _v.parent.context.$implicit.startTime, "HH:mm")); var currVal_1 = i0.ɵunv(_v, 1, 1, _ck(_v, 3, 0, i0.ɵnov(_v.parent.parent.parent.parent, 0), _v.parent.context.$implicit.endTime, "HH:mm")); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CalendarComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "monthview-eventdetail-timecolumn"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.allDayLabel; _ck(_v, 1, 0, currVal_0); }); }
function View_CalendarComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "ion-item", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.eventSelected(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_IonItem_0, i1.RenderType_IonItem)), i0.ɵdid(1, 49152, null, 0, i2.IonItem, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_CalendarComponent_5)), i0.ɵdid(3, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_CalendarComponent_6)), i0.ɵdid(5, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(6, 0, null, 0, 1, "span", [["class", "event-detail"]], null, null, null, null, null)), (_l()(), i0.ɵted(7, null, [" | ", ""]))], function (_ck, _v) { var currVal_0 = !_v.context.$implicit.allDay; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.allDay; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.title; _ck(_v, 7, 0, currVal_2); }); }
function View_CalendarComponent_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "ion-item", [], null, null, null, i1.View_IonItem_0, i1.RenderType_IonItem)), i0.ɵdid(1, 49152, null, 0, i2.IonItem, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵeld(2, 0, null, 0, 1, "div", [["class", "no-events-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.noEventsLabel; _ck(_v, 3, 0, currVal_0); }); }
function View_CalendarComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "ion-list", [["class", "event-detail-container"], ["has-bouncing", "false"], ["overflow-scroll", "false"]], null, null, null, i1.View_IonList_0, i1.RenderType_IonList)), i0.ɵdid(1, 49152, null, 0, i2.IonList, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_CalendarComponent_4)), i0.ɵdid(3, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_CalendarComponent_7)), i0.ɵdid(5, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.parent.context.selectedDate == null) ? null : _v.parent.context.selectedDate.events); _ck(_v, 3, 0, currVal_0); var currVal_1 = (((_v.parent.context.selectedDate == null) ? null : _v.parent.context.selectedDate.events.length) == 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_CalendarComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_3)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.showEventDetail; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalendarComponent_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.viewDate.dayHeader; _ck(_v, 0, 0, currVal_0); }); }
function View_CalendarComponent_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "calendar-event-inner"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.displayEvent.event.title; _ck(_v, 1, 0, currVal_0); }); }
function View_CalendarComponent_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "calendar-event-inner"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.displayEvent.event.title; _ck(_v, 1, 0, currVal_0); }); }
function View_CalendarComponent_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_CalendarComponent_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "calendar-event"], ["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.eventSelected(_v.context.$implicit.event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(2, { top: 0, width: 1, height: 2 }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_CalendarComponent_14)), i0.ɵdid(4, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(5, { displayEvent: 0 })], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, ((25 * _v.context.$implicit.position) + "px"), ((100 * (_v.context.$implicit.endIndex - _v.context.$implicit.startIndex)) + "%"), "25px"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _v.context.$implicit); var currVal_2 = _v.parent.parent.context.eventTemplate; _ck(_v, 4, 0, currVal_1, currVal_2); }, null); }
function View_CalendarComponent_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "calendar-event-wrap": 0 }), i0.ɵdid(3, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(4, { height: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_13)), i0.ɵdid(6, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.parent.context.day.events); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, ((25 * _v.parent.context.day.events.length) + "px")); _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.parent.context.day.events; _ck(_v, 6, 0, currVal_2); }, null); }
function View_CalendarComponent_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_12)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.day.events; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalendarComponent_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_CalendarComponent_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "calendar-event"], ["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.eventSelected(_v.context.$implicit.event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(2, { top: 0, width: 1, height: 2 }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_CalendarComponent_17)), i0.ɵdid(4, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(5, { displayEvent: 0 })], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, ((25 * _v.context.index) + "px"), "100%", "25px"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _v.context.$implicit); var currVal_2 = _v.parent.context.eventTemplate; _ck(_v, 4, 0, currVal_1, currVal_2); }, null); }
function View_CalendarComponent_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_16)), i0.ɵdid(1, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.allDayEvents; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalendarComponent_21(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_CalendarComponent_20(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "calendar-event"], ["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.eventSelected(_v.context.$implicit.event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(2, { top: 0, left: 1, width: 2, height: 3 }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_CalendarComponent_21)), i0.ɵdid(4, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(5, { displayEvent: 0 })], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, (((37 * _v.context.$implicit.startOffset) / _v.parent.parent.context.hourParts) + "px"), (((100 / _v.context.$implicit.overlapNumber) * _v.context.$implicit.position) + "%"), ((100 / _v.context.$implicit.overlapNumber) + "%"), ((37 * ((_v.context.$implicit.endIndex - _v.context.$implicit.startIndex) - ((_v.context.$implicit.endOffset + _v.context.$implicit.startOffset) / _v.parent.parent.context.hourParts))) + "px")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _v.context.$implicit); var currVal_2 = _v.parent.parent.context.eventTemplate; _ck(_v, 4, 0, currVal_1, currVal_2); }, null); }
function View_CalendarComponent_19(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "calendar-event-wrap": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_20)), i0.ɵdid(4, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.parent.context.tm.events); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.parent.context.tm.events; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CalendarComponent_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_19)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.tm.events; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalendarComponent_22(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_CalendarComponent_23(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_CalendarComponent_24(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "monthview", [], null, [[null, "onRangeChanged"], [null, "onEventSelected"], [null, "onTimeSelected"], [null, "onTitleChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onRangeChanged" === en)) {
        var pd_0 = (_co.rangeChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("onEventSelected" === en)) {
        var pd_1 = (_co.eventSelected($event) !== false);
        ad = (pd_1 && ad);
    } if (("onTimeSelected" === en)) {
        var pd_2 = (_co.timeSelected($event) !== false);
        ad = (pd_2 && ad);
    } if (("onTitleChanged" === en)) {
        var pd_3 = (_co.titleChanged($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, i4.View_MonthViewComponent_0, i4.RenderType_MonthViewComponent)), i0.ɵdid(1, 4964352, null, 0, i5.MonthViewComponent, [i6.CalendarService], { monthviewDisplayEventTemplate: [0, "monthviewDisplayEventTemplate"], monthviewInactiveDisplayEventTemplate: [1, "monthviewInactiveDisplayEventTemplate"], monthviewEventDetailTemplate: [2, "monthviewEventDetailTemplate"], formatDay: [3, "formatDay"], formatDayHeader: [4, "formatDayHeader"], formatMonthTitle: [5, "formatMonthTitle"], eventSource: [6, "eventSource"], startingDayMonth: [7, "startingDayMonth"], showEventDetail: [8, "showEventDetail"], noEventsLabel: [9, "noEventsLabel"], autoSelect: [10, "autoSelect"], markDisabled: [11, "markDisabled"], locale: [12, "locale"], dateFormatter: [13, "dateFormatter"], dir: [14, "dir"], lockSwipeToPrev: [15, "lockSwipeToPrev"], lockSwipes: [16, "lockSwipes"], sliderOptions: [17, "sliderOptions"] }, { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.monthviewDisplayEventTemplate || i0.ɵnov(_v.parent, 1)); var currVal_1 = (_co.monthviewInactiveDisplayEventTemplate || i0.ɵnov(_v.parent, 1)); var currVal_2 = (_co.monthviewEventDetailTemplate || i0.ɵnov(_v.parent, 2)); var currVal_3 = _co.formatDay; var currVal_4 = _co.formatDayHeader; var currVal_5 = _co.formatMonthTitle; var currVal_6 = _co.eventSource; var currVal_7 = _co.startingDayMonth; var currVal_8 = _co.showEventDetail; var currVal_9 = _co.noEventsLabel; var currVal_10 = _co.autoSelect; var currVal_11 = _co.markDisabled; var currVal_12 = _co.locale; var currVal_13 = _co.dateFormatter; var currVal_14 = _co.dir; var currVal_15 = _co.lockSwipeToPrev; var currVal_16 = _co.lockSwipes; var currVal_17 = _co.sliderOptions; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17]); }, null); }
function View_CalendarComponent_25(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "weekview", [], [[2, "weekview", null]], [[null, "onRangeChanged"], [null, "onEventSelected"], [null, "onTimeSelected"], [null, "onTitleChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onRangeChanged" === en)) {
        var pd_0 = (_co.rangeChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("onEventSelected" === en)) {
        var pd_1 = (_co.eventSelected($event) !== false);
        ad = (pd_1 && ad);
    } if (("onTimeSelected" === en)) {
        var pd_2 = (_co.timeSelected($event) !== false);
        ad = (pd_2 && ad);
    } if (("onTitleChanged" === en)) {
        var pd_3 = (_co.titleChanged($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, i7.View_WeekViewComponent_0, i7.RenderType_WeekViewComponent)), i0.ɵdid(1, 4964352, null, 0, i8.WeekViewComponent, [i6.CalendarService, i0.ElementRef], { weekviewHeaderTemplate: [0, "weekviewHeaderTemplate"], weekviewAllDayEventTemplate: [1, "weekviewAllDayEventTemplate"], weekviewNormalEventTemplate: [2, "weekviewNormalEventTemplate"], weekviewAllDayEventSectionTemplate: [3, "weekviewAllDayEventSectionTemplate"], weekviewNormalEventSectionTemplate: [4, "weekviewNormalEventSectionTemplate"], weekviewInactiveAllDayEventSectionTemplate: [5, "weekviewInactiveAllDayEventSectionTemplate"], weekviewInactiveNormalEventSectionTemplate: [6, "weekviewInactiveNormalEventSectionTemplate"], formatWeekTitle: [7, "formatWeekTitle"], formatWeekViewDayHeader: [8, "formatWeekViewDayHeader"], formatHourColumn: [9, "formatHourColumn"], startingDayWeek: [10, "startingDayWeek"], allDayLabel: [11, "allDayLabel"], hourParts: [12, "hourParts"], eventSource: [13, "eventSource"], autoSelect: [14, "autoSelect"], markDisabled: [15, "markDisabled"], locale: [16, "locale"], dateFormatter: [17, "dateFormatter"], dir: [18, "dir"], scrollToHour: [19, "scrollToHour"], preserveScrollPosition: [20, "preserveScrollPosition"], lockSwipeToPrev: [21, "lockSwipeToPrev"], lockSwipes: [22, "lockSwipes"], startHour: [23, "startHour"], endHour: [24, "endHour"], sliderOptions: [25, "sliderOptions"], hourSegments: [26, "hourSegments"] }, { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.weekviewHeaderTemplate || i0.ɵnov(_v.parent, 3)); var currVal_2 = (_co.weekviewAllDayEventTemplate || i0.ɵnov(_v.parent, 4)); var currVal_3 = (_co.weekviewNormalEventTemplate || i0.ɵnov(_v.parent, 5)); var currVal_4 = (_co.weekviewAllDayEventSectionTemplate || i0.ɵnov(_v.parent, 6)); var currVal_5 = (_co.weekviewNormalEventSectionTemplate || i0.ɵnov(_v.parent, 8)); var currVal_6 = (_co.weekviewInactiveAllDayEventSectionTemplate || i0.ɵnov(_v.parent, 9)); var currVal_7 = (_co.weekviewInactiveNormalEventSectionTemplate || i0.ɵnov(_v.parent, 10)); var currVal_8 = _co.formatWeekTitle; var currVal_9 = _co.formatWeekViewDayHeader; var currVal_10 = _co.formatHourColumn; var currVal_11 = _co.startingDayWeek; var currVal_12 = _co.allDayLabel; var currVal_13 = _co.hourParts; var currVal_14 = _co.eventSource; var currVal_15 = _co.autoSelect; var currVal_16 = _co.markDisabled; var currVal_17 = _co.locale; var currVal_18 = _co.dateFormatter; var currVal_19 = _co.dir; var currVal_20 = _co.scrollToHour; var currVal_21 = _co.preserveScrollPosition; var currVal_22 = _co.lockSwipeToPrev; var currVal_23 = _co.lockSwipes; var currVal_24 = _co.startHour; var currVal_25 = _co.endHour; var currVal_26 = _co.sliderOptions; var currVal_27 = _co.hourSegments; _ck(_v, 1, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).class; _ck(_v, 0, 0, currVal_0); }); }
function View_CalendarComponent_26(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "dayview", [], [[2, "dayview", null]], [[null, "onRangeChanged"], [null, "onEventSelected"], [null, "onTimeSelected"], [null, "onTitleChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onRangeChanged" === en)) {
        var pd_0 = (_co.rangeChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("onEventSelected" === en)) {
        var pd_1 = (_co.eventSelected($event) !== false);
        ad = (pd_1 && ad);
    } if (("onTimeSelected" === en)) {
        var pd_2 = (_co.timeSelected($event) !== false);
        ad = (pd_2 && ad);
    } if (("onTitleChanged" === en)) {
        var pd_3 = (_co.titleChanged($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, i9.View_DayViewComponent_0, i9.RenderType_DayViewComponent)), i0.ɵdid(1, 4964352, null, 0, i10.DayViewComponent, [i6.CalendarService, i0.ElementRef], { dayviewAllDayEventTemplate: [0, "dayviewAllDayEventTemplate"], dayviewNormalEventTemplate: [1, "dayviewNormalEventTemplate"], dayviewAllDayEventSectionTemplate: [2, "dayviewAllDayEventSectionTemplate"], dayviewNormalEventSectionTemplate: [3, "dayviewNormalEventSectionTemplate"], dayviewInactiveAllDayEventSectionTemplate: [4, "dayviewInactiveAllDayEventSectionTemplate"], dayviewInactiveNormalEventSectionTemplate: [5, "dayviewInactiveNormalEventSectionTemplate"], formatHourColumn: [6, "formatHourColumn"], formatDayTitle: [7, "formatDayTitle"], allDayLabel: [8, "allDayLabel"], hourParts: [9, "hourParts"], eventSource: [10, "eventSource"], markDisabled: [11, "markDisabled"], locale: [12, "locale"], dateFormatter: [13, "dateFormatter"], dir: [14, "dir"], scrollToHour: [15, "scrollToHour"], preserveScrollPosition: [16, "preserveScrollPosition"], lockSwipeToPrev: [17, "lockSwipeToPrev"], lockSwipes: [18, "lockSwipes"], startHour: [19, "startHour"], endHour: [20, "endHour"], sliderOptions: [21, "sliderOptions"], hourSegments: [22, "hourSegments"] }, { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.dayviewAllDayEventTemplate || i0.ɵnov(_v.parent, 4)); var currVal_2 = (_co.dayviewNormalEventTemplate || i0.ɵnov(_v.parent, 5)); var currVal_3 = (_co.dayviewAllDayEventSectionTemplate || i0.ɵnov(_v.parent, 7)); var currVal_4 = (_co.dayviewNormalEventSectionTemplate || i0.ɵnov(_v.parent, 8)); var currVal_5 = (_co.dayviewInactiveAllDayEventSectionTemplate || i0.ɵnov(_v.parent, 9)); var currVal_6 = (_co.dayviewInactiveNormalEventSectionTemplate || i0.ɵnov(_v.parent, 10)); var currVal_7 = _co.formatHourColumn; var currVal_8 = _co.formatDayTitle; var currVal_9 = _co.allDayLabel; var currVal_10 = _co.hourParts; var currVal_11 = _co.eventSource; var currVal_12 = _co.markDisabled; var currVal_13 = _co.locale; var currVal_14 = _co.dateFormatter; var currVal_15 = _co.dir; var currVal_16 = _co.scrollToHour; var currVal_17 = _co.preserveScrollPosition; var currVal_18 = _co.lockSwipeToPrev; var currVal_19 = _co.lockSwipes; var currVal_20 = _co.startHour; var currVal_21 = _co.endHour; var currVal_22 = _co.sliderOptions; var currVal_23 = _co.hourSegments; _ck(_v, 1, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).class; _ck(_v, 0, 0, currVal_0); }); }
export function View_CalendarComponent_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i3.DatePipe, [i0.LOCALE_ID]), (_l()(), i0.ɵand(0, [["monthviewDefaultDisplayEventTemplate", 2]], null, 0, null, View_CalendarComponent_1)), (_l()(), i0.ɵand(0, [["monthviewDefaultEventDetailTemplate", 2]], null, 0, null, View_CalendarComponent_2)), (_l()(), i0.ɵand(0, [["defaultWeekviewHeaderTemplate", 2]], null, 0, null, View_CalendarComponent_8)), (_l()(), i0.ɵand(0, [["defaultAllDayEventTemplate", 2]], null, 0, null, View_CalendarComponent_9)), (_l()(), i0.ɵand(0, [["defaultNormalEventTemplate", 2]], null, 0, null, View_CalendarComponent_10)), (_l()(), i0.ɵand(0, [["defaultWeekViewAllDayEventSectionTemplate", 2]], null, 0, null, View_CalendarComponent_11)), (_l()(), i0.ɵand(0, [["defaultDayViewAllDayEventSectionTemplate", 2]], null, 0, null, View_CalendarComponent_15)), (_l()(), i0.ɵand(0, [["defaultNormalEventSectionTemplate", 2]], null, 0, null, View_CalendarComponent_18)), (_l()(), i0.ɵand(0, [["defaultInactiveAllDayEventSectionTemplate", 2]], null, 0, null, View_CalendarComponent_22)), (_l()(), i0.ɵand(0, [["defaultInactiveNormalEventSectionTemplate", 2]], null, 0, null, View_CalendarComponent_23)), (_l()(), i0.ɵeld(11, 0, null, null, 7, "div", [], [[8, "className", 0]], null, null, null, null)), i0.ɵdid(12, 16384, null, 0, i3.NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_24)), i0.ɵdid(14, 278528, null, 0, i3.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i3.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_25)), i0.ɵdid(16, 278528, null, 0, i3.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i3.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarComponent_26)), i0.ɵdid(18, 278528, null, 0, i3.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i3.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.calendarMode; _ck(_v, 12, 0, currVal_1); var currVal_2 = "month"; _ck(_v, 14, 0, currVal_2); var currVal_3 = "week"; _ck(_v, 16, 0, currVal_3); var currVal_4 = "day"; _ck(_v, 18, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.calendarMode, "view-container"); _ck(_v, 11, 0, currVal_0); }); }
export function View_CalendarComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "calendar", [], null, null, null, View_CalendarComponent_0, RenderType_CalendarComponent)), i0.ɵprd(512, null, i6.CalendarService, i6.CalendarService, []), i0.ɵdid(2, 245760, null, 0, i11.CalendarComponent, [i6.CalendarService, i0.LOCALE_ID], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var CalendarComponentNgFactory = i0.ɵccf("calendar", i11.CalendarComponent, View_CalendarComponent_Host_0, { currentDate: "currentDate", eventSource: "eventSource", calendarMode: "calendarMode", formatDay: "formatDay", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatWeekTitle: "formatWeekTitle", formatMonthTitle: "formatMonthTitle", formatWeekViewDayHeader: "formatWeekViewDayHeader", formatHourColumn: "formatHourColumn", showEventDetail: "showEventDetail", startingDayMonth: "startingDayMonth", startingDayWeek: "startingDayWeek", allDayLabel: "allDayLabel", noEventsLabel: "noEventsLabel", queryMode: "queryMode", step: "step", timeInterval: "timeInterval", autoSelect: "autoSelect", markDisabled: "markDisabled", monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate", monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate", monthviewEventDetailTemplate: "monthviewEventDetailTemplate", weekviewHeaderTemplate: "weekviewHeaderTemplate", weekviewAllDayEventTemplate: "weekviewAllDayEventTemplate", weekviewNormalEventTemplate: "weekviewNormalEventTemplate", dayviewAllDayEventTemplate: "dayviewAllDayEventTemplate", dayviewNormalEventTemplate: "dayviewNormalEventTemplate", weekviewAllDayEventSectionTemplate: "weekviewAllDayEventSectionTemplate", weekviewNormalEventSectionTemplate: "weekviewNormalEventSectionTemplate", dayviewAllDayEventSectionTemplate: "dayviewAllDayEventSectionTemplate", dayviewNormalEventSectionTemplate: "dayviewNormalEventSectionTemplate", weekviewInactiveAllDayEventSectionTemplate: "weekviewInactiveAllDayEventSectionTemplate", weekviewInactiveNormalEventSectionTemplate: "weekviewInactiveNormalEventSectionTemplate", dayviewInactiveAllDayEventSectionTemplate: "dayviewInactiveAllDayEventSectionTemplate", dayviewInactiveNormalEventSectionTemplate: "dayviewInactiveNormalEventSectionTemplate", dateFormatter: "dateFormatter", dir: "dir", scrollToHour: "scrollToHour", preserveScrollPosition: "preserveScrollPosition", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", locale: "locale", startHour: "startHour", endHour: "endHour", sliderOptions: "sliderOptions" }, { onCurrentDateChanged: "onCurrentDateChanged", onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, []);
export { CalendarComponentNgFactory as CalendarComponentNgFactory };