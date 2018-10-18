function removeEvent(containerEl, event, jsEvent, view) {
    if(view.name !== 'month') {
        containerEl.fullCalendar('removeEvents', event._id);
    }
}

export {removeEvent};
