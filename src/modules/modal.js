import $ from 'jquery';
import 'fullcalendar';

function modal() {
    var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    // Pôr um modal depois
    //console.log('Clicado em ' + date.format());
  });
}

export { modal };
