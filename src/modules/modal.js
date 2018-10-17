import $ from 'jquery';
import 'fullcalendar';

function modal() {
  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    // Pôr um modal depois
    alert('Clicado em ' + date.format());
  });
}

export { modal };
