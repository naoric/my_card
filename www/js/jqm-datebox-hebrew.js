jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
    'he': {
        setDateButtonLabel: "בחר תאריך",
        setTimeButtonLabel: "בחר שעה",
        setDurationButtonLabel: "Set Duration",
        calTodayButtonLabel: "היום",
        titleDateDialogLabel: "בחר תאריך",
        titleTimeDialogLabel: "Set Time",
        daysOfWeek: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        daysOfWeekShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthsOfYear: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthsOfYearShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
        durationLabel: ['ימים', 'שעות', 'דקות', 'שניות'],
        durationDays: ['Day', 'Days'],
        tooltip: "בחר תאריך",
        nextMonth: "חודש הבא",
        prevMonth: "חודש קודם",
        timeFormat: 12,
        headerFormat: '%A, %B %-d, %Y',
        dateFieldOrder: ['y', 'm', 'd'],
        timeFieldOrder: ['h', 'i', 'a'],
        slideFieldOrder: ['y', 'm', 'd'],
        dateFormat: '%m/%d/%Y',
        useArabicIndic: false,
        isRTL: false,
        calStartDay: 0,
        clearButton: 'clear',
        durationOrder: ['d', 'h', 'i', 's'],
        meridiem: ['AM', 'PM'],
        timeOutput: '%k:%M', // 12hr: '%l:%M %p', 24hr: '%k:%M',
        durationFormat: '%Dd %DA, %Dl:%DM:%DS',
        calDateListLabel: 'Other Dates',
		calHeaderFormat: '%B %Y'
    }
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
    useLang: 'he'
});