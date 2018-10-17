import $ from 'jquery';
import 'fullcalendar';
import { modal } from './modules/modal';

$(function() {
  var containerEl = $('#calendar');

  containerEl.fullCalendar({
    defaultView: 'agendaWeek',
    hiddenDays: [0],
    locale: 'pt-br',
    slotLabelFormat: 'HH:mm',
    editable: true,
    slotDuration: '00:15:00',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    // Dates outside of the valid range will be grayed-out. The user
    // will not be able to drag or resize events into these areas.
    validRange: {
      start: moment('2018-10-22'),
      end: moment('2018-05-29')
    },
    minTime: "07:00:00",
    maxTime: "23:30:00",
    selectable: true,
    // Tentar exportar isso aqui para um módulo
    select: function (start, end, jsEvent, view) {
      var allDay = ! start.hasTime && !end.hasTime;
      var newEvent = new Object();
      newEvent.title = 'Colocar o nome da disciplina aqui';
      newEvent.start = moment(start).format();
      newEvent.allDay = false;
      containerEl.fullCalendar('renderEvent', newEvent);
    }
  });

  modal();
});
