import $ from 'jquery';
import 'fullcalendar';
import {modal} from './modules/modal';
import {addEvent} from './modules/addEvent';
import {removeEvent} from './modules/removeEvent';

$(document).ready(function () {
    var containerEl = $('#calendar');

    containerEl.fullCalendar({
        defaultView: 'agendaWeek',
        hiddenDays: [0],
        locale: 'pt-br',
        slotLabelFormat: 'HH:mm',
        views: {
            week: { columnHeaderFormat: 'ddd D/M' }
        },
        editable: true,
        allDaySlot: false,
        slotDuration: '00:15:00',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        buttonText: {
            month: 'Mês',
            agendaDay: 'Dia',
            agendaWeek: 'Semana',
            today: 'Hoje'
        },
        // Dates outside of the valid range will be grayed-out. The user
        // will not be able to drag or resize events into these areas.
        validRange: {
            start: moment('2018-10-22'),
            end: moment('2018-05-29')
        },
        minTime: "07:00:00",
        maxTime: "23:30:00",
        // Slot do evento de tamanho fixo a horaAula da escola
        eventDurationEditable: false,
        eventStartEditable: true,
        defaultTimedEventDuration: '00:45:00',
        selectable: true,
        // Eventos
        select: function (start, end, jsEvent, view) {
            console.log(view);
            addEvent(containerEl, start, end, jsEvent, view);
        },
        eventClick: function (event, jsEvent, view) {
            removeEvent(containerEl, event, jsEvent, view);
        },
        dayClick: function(date, allDay, jsEvent, view) {
            // Se a view for de mês mudamos para o dia quando clicável
            if (jsEvent.name === 'month') {
                containerEl.fullCalendar('changeView', 'agendaDay', date);
            }
        }
    });

    modal();
});
