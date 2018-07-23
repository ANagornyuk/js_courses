"use strict";


function Square(width, height){
	this.getArea = function() {
		return width*height;
	}
}

function Circle(radius){
	Square.call(this);
	this.getArea = function() {
		return Math.PI*radius*radius;
	}
}

function Area(){
	this._figures = new Array();
	var self = this;
	this.addFigure = function(figure) {
		self._figures[self._figures.length] = figure;
	}
	this.clear = function() {
		self._figures.length = 0;
	}
	/*
	this.getSize = function () {
		var size = 0;
		for (var i=0; i<self._figures.length;i++){
			size += self._figures[i].getArea();
		}
		return size;
	}
	*/
	Object.defineProperty(this, "size", {	
  		get: function() {
  			var yardage = 0;
  			for (var i=0; i<this._figures.length; i++){
  				yardage += this._figures[i].getArea();
  			}
    		return yardage;
 		}
	});
}

/*
var area = new Area(); 

Object.defineProperty(area, "size", {	
  get: function() {
  	var yardage = 0;
  	for (var i=0; i<this._figures.length; i++){
  		yardage += this._figures[i].getArea();
  	}
    return yardage;
  }
});
*/
