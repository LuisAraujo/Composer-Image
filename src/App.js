/**
 *
 */

/*constructor*/
var App = function(){
   this.canvas = new MyCanvas();
   this.state = 'begin';
    //Maybe???
    //this.events {EventManager}
};
    /*construct*/
    App.prototype.constructor = App();

    /* attribute */
    App.prototype.canvas = null;
    App.prototype.state = '';


    /**
     * Start the loop of canvas
    **/
    App.prototype.startLoopCanvas = function(){
        window.setInterval(this.loopCanvas, 1000/60);
    }

    /* Get the canvas
    * @return {HTMLCanvasElement}
    * */
    App.prototype.getCanvas = function(){
        return this.canvas;

    }

    /* Call loop of canvas*/
    App.prototype.loopCanvas = function(){
         this.canvas.redrawCanvas();
    }

    /* Setting events*/
    App.prototype.set_buttons_events= function(){

    }

    App.prototype.setState = function(str){
        this.state = str;
    }

    App.prototype.getState = function(){
        return this.state;
    }