jest.dontMock('../ExampleStore');

describe('ExampleStore', function() {
  var AppDispatcher;
  var ExampleStore;
  var callback;


  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    ExampleStore = require('../ExampleStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });
});