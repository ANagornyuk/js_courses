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
	this._figures = [];
	var self = this;
	this.addFigure = function(figure) {
		self._figures[_figures.length] = figure;
	}
	this.clear = function() {
		self._figures.lenght = 0;
	}
}


var area = new Area(); 
Object.defineProperty(area, "size", {
  get: function() {
  	var yardage = 0;
  	for (var i in this._figures){
  		yardage += i.getArea();
  	}
    return yardage;
  }
});