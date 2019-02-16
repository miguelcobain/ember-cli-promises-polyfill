if (window && !window.Promise) {
  window.Promise = Ember.RSVP.Promise;
}
