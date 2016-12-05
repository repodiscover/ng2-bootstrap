exports.fireEvent = function (target, action) {
  if (document.createEvent) {
    event = new Event(action);
    target.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    target.fireEvent('on' + action, event);
  }
};
