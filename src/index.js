import $ from 'jquery';
import 'fullcalendar';
import { modal } from './modules/modal';

$(function() {
  var containerEl = $('#calendar');

  containerEl.fullCalendar({
    hiddenDays: [0],
    locale: 'pt-br'
  });

  modal();
  // var calendar = $('#calendar').fullCalendar('getCalendar');
  //
  // calendar.on('dayClick', function(date, jsEvent, view) {
  //   // Põr um modal depois
  //   console.log('Clicado em ' + date.format());
  // });
});
