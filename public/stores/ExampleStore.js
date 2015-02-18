/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * ExampleStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('../constants/ExampleConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _examples = [];
var _index =0;

/**
 * Create a Example item.
 * @param  {string} text The content of the Example
 */
function create(text) {
  _examples.push({
    text : text,
    index : _index++
  })
}

function destroyAll(){
  _examples = [];
  index =0;
}

var ExampleStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _examples;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case ExampleConstants.EXAMPLE_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      ExampleStore.emitChange();
    break;

    case ExampleConstants.EXAMPLE_DESTROY_ALL:
      destroyAll();
      ExampleStore.emitChange();
    break;

    default:
      // no op
  }
});

module.exports = ExampleStore;