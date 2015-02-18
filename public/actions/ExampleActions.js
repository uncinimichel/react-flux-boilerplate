/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * ExampleActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ExampleConstants = require('../constants/ExampleConstants');

var ExampleActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: ExampleConstants.EXAMPLE_CREATE,
      text: text
    });
  },

  destroyAll: function () {
  	AppDispatcher.dispatch({
  		actionType: ExampleConstants.EXAMPLE_DESTROY_ALL
  	});
  }

};

module.exports = ExampleActions;
