$(document).ready( () => {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'Your_Google_Calendar_KEY',
    locale: 'de',
    weekNumbers: true,
    columnHeaderFormat: 'ddd',
    firstDay: 1,
    header: {
      left: 'agendaWeek month listMonth prev,next',
      right: 'title',
      center: 'today'
    },
    contentHeight: 'auto',
    // agenda options
    allDaySlot: true,
    minTime: '07:00:00',
    maxTime: '20:00:00',
    allDayText: 'Gtg',
    events: {
            googleCalendarId: 'Your_Google_Calendar_Id'
        },
    windowResizeDelay: 500
  });
});
