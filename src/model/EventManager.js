/**
 * Created by fl43 on 21/02/14.
 */

var EventManager = function( callback){
   this.callback = callback;
};

EventManager.prototype.constructor = EventManager(function(){});

EventManager.prototype.setEvents = this.callback();