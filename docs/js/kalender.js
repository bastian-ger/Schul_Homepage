"use strict";$(document).ready(function(){$("#calendar").fullCalendar({googleCalendarApiKey:gcal_key,locale:"de",weekNumbers:!0,columnHeaderFormat:"ddd",firstDay:1,header:{left:"agendaWeek month listMonth prev,next",right:"title",center:"today"},contentHeight:"auto",
// agenda options
allDaySlot:!0,minTime:"07:00:00",maxTime:"20:00:00",allDayText:"Gtg",events:{googleCalendarId:gcal_id},windowResizeDelay:500})});