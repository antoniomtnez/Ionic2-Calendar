/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular/dist/core.ngfactory";
import * as i3 from "@ionic/angular";
import * as i4 from "./monthview";
import * as i5 from "./calendar.service";
var styles_MonthViewComponent = [".text-muted[_ngcontent-%COMP%] {\n            color: #999;\n        }\n\n        .table-fixed[_ngcontent-%COMP%] {\n            table-layout: fixed;\n        }\n\n        .table[_ngcontent-%COMP%] {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\n            border-top: 0\n        }\n\n        .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%] {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n            background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event[_ngcontent-%COMP%] {\n            background-color: #3a87ad;\n            color: white;\n        }\n\n        .monthview-current[_ngcontent-%COMP%] {\n            background-color: #f0f0f0;\n        }\n\n        .monthview-selected[_ngcontent-%COMP%] {\n            background-color: #009900;\n            color: white;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td.monthview-disabled[_ngcontent-%COMP%] {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .monthview-secondary-with-event[_ngcontent-%COMP%] {\n            background-color: #d9edf7;\n        }\n\n        [_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar {\n            display: none;\n        }"];
var RenderType_MonthViewComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_MonthViewComponent, data: {} });
export { RenderType_MonthViewComponent as RenderType_MonthViewComponent };
function View_MonthViewComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "td", [["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.select(_co.views[0].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_5)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getHighlightClass(_co.views[0].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, _co.views[0], _v.parent.context.$implicit, _v.context.$implicit); var currVal_2 = _co.monthviewDisplayEventTemplate; _ck(_v, 3, 0, currVal_1, currVal_2); }, null); }
function View_MonthViewComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_4)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_2)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_3)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[0].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_10)), i0.ɵdid(2, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.views[0], _v.parent.context.$implicit, _v.context.$implicit); var currVal_1 = _co.monthviewInactiveDisplayEventTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MonthViewComponent_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_9)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_7)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_8)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6), (_l()(), i0.ɵeld(9, 0, null, null, 0, "tr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[0].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "td", [["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.select(_co.views[1].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_15)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getHighlightClass(_co.views[1].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, _co.views[1], _v.parent.context.$implicit, _v.context.$implicit); var currVal_2 = _co.monthviewDisplayEventTemplate; _ck(_v, 3, 0, currVal_1, currVal_2); }, null); }
function View_MonthViewComponent_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_14)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_12)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_13)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[1].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_20(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_19(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_20)), i0.ɵdid(2, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.views[1], _v.parent.context.$implicit, _v.context.$implicit); var currVal_1 = _co.monthviewInactiveDisplayEventTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MonthViewComponent_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_19)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_17)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_18)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6), (_l()(), i0.ɵeld(9, 0, null, null, 0, "tr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[1].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_22(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_25(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_24(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "td", [["tappable", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.select(_co.views[2].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_25)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getHighlightClass(_co.views[2].dates[((_v.parent.context.$implicit * 7) + _v.context.$implicit)]); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, _co.views[2], _v.parent.context.$implicit, _v.context.$implicit); var currVal_2 = _co.monthviewDisplayEventTemplate; _ck(_v, 3, 0, currVal_1, currVal_2); }, null); }
function View_MonthViewComponent_23(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_24)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_21(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_22)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_23)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[2].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_27(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MonthViewComponent_30(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MonthViewComponent_29(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_30)), i0.ɵdid(2, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { view: 0, row: 1, col: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.views[2], _v.parent.context.$implicit, _v.context.$implicit); var currVal_1 = _co.monthviewInactiveDisplayEventTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MonthViewComponent_28(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_29)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(3, 7)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, 0, 1, 2, 3, 4, 5, 6); _ck(_v, 2, 0, currVal_0); }, null); }
function View_MonthViewComponent_26(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "table", [["class", "table table-bordered table-fixed monthview-datetable"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "tr", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MonthViewComponent_27)), i0.ɵdid(4, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_28)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpad(8, 6), (_l()(), i0.ɵeld(9, 0, null, null, 0, "tr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.views[2].dayHeaders; _ck(_v, 4, 0, currVal_0); var currVal_1 = _ck(_v, 8, 0, 0, 1, 2, 3, 4, 5); _ck(_v, 7, 0, currVal_1); }, null); }
function View_MonthViewComponent_31(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
export function View_MonthViewComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { slider: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 19, "ion-slides", [], [[8, "dir", 0]], [[null, "ionSlideDidChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionSlideDidChange" === en)) {
        var pd_0 = (_co.onSlideChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_IonSlides_0, i2.RenderType_IonSlides)), i0.ɵdid(3, 49152, [[1, 4], ["monthSlider", 4]], 0, i3.IonSlides, [i0.ChangeDetectorRef, i0.ElementRef], { options: [0, "options"] }, null), (_l()(), i0.ɵeld(4, 0, null, 0, 5, "ion-slide", [], null, null, null, i2.View_IonSlide_0, i2.RenderType_IonSlide)), i0.ɵdid(5, 49152, null, 0, i3.IonSlide, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_1)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_6)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, 0, 5, "ion-slide", [], null, null, null, i2.View_IonSlide_0, i2.RenderType_IonSlide)), i0.ɵdid(11, 49152, null, 0, i3.IonSlide, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_11)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_16)), i0.ɵdid(15, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(16, 0, null, 0, 5, "ion-slide", [], null, null, null, i2.View_IonSlide_0, i2.RenderType_IonSlide)), i0.ɵdid(17, 49152, null, 0, i3.IonSlide, [i0.ChangeDetectorRef, i0.ElementRef], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_21)), i0.ɵdid(19, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_MonthViewComponent_26)), i0.ɵdid(21, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MonthViewComponent_31)), i0.ɵdid(23, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(24, { showEventDetail: 0, selectedDate: 1, noEventsLabel: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.sliderOptions; _ck(_v, 3, 0, currVal_1); var currVal_2 = (0 === _co.currentViewIndex); _ck(_v, 7, 0, currVal_2); var currVal_3 = (0 !== _co.currentViewIndex); _ck(_v, 9, 0, currVal_3); var currVal_4 = (1 === _co.currentViewIndex); _ck(_v, 13, 0, currVal_4); var currVal_5 = (1 !== _co.currentViewIndex); _ck(_v, 15, 0, currVal_5); var currVal_6 = (2 === _co.currentViewIndex); _ck(_v, 19, 0, currVal_6); var currVal_7 = (2 !== _co.currentViewIndex); _ck(_v, 21, 0, currVal_7); var currVal_8 = _ck(_v, 24, 0, _co.showEventDetail, _co.selectedDate, _co.noEventsLabel); var currVal_9 = _co.monthviewEventDetailTemplate; _ck(_v, 23, 0, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dir; _ck(_v, 2, 0, currVal_0); }); }
export function View_MonthViewComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "monthview", [], null, null, null, View_MonthViewComponent_0, RenderType_MonthViewComponent)), i0.ɵdid(1, 4964352, null, 0, i4.MonthViewComponent, [i5.CalendarService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MonthViewComponentNgFactory = i0.ɵccf("monthview", i4.MonthViewComponent, View_MonthViewComponent_Host_0, { monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate", monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate", monthviewEventDetailTemplate: "monthviewEventDetailTemplate", formatDay: "formatDay", formatDayHeader: "formatDayHeader", formatMonthTitle: "formatMonthTitle", eventSource: "eventSource", startingDayMonth: "startingDayMonth", showEventDetail: "showEventDetail", noEventsLabel: "noEventsLabel", autoSelect: "autoSelect", markDisabled: "markDisabled", locale: "locale", dateFormatter: "dateFormatter", dir: "dir", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", sliderOptions: "sliderOptions" }, { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, []);
export { MonthViewComponentNgFactory as MonthViewComponentNgFactory };
