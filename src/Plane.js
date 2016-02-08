'use strict';

function Plane(){

};

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._landing = airport;
};

Plane.prototype.takeoff = function(airport){
  this._landing.clearForTakeOff('');
};
