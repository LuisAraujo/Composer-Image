
/**
 * canvas
 *
 */

/*constructor*/
var App = function(){
   this.canvas = new MyCanvas();
    //Maybe???
    //this.events {EventManager}
};
/*setting construct*/
App.prototype.constructor = App();

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

    /* button 'open file' of main screen */
    $('#bt_open_file').click(function(){
        /* effect hide*/
        $('#selectFile_inp').trigger('click');
        $('#screen01').hide('slide',{},500, function(){
            /*effect show*/
            $('#screen_editor').show('slide',{},500, function(){});
        });
    });


    filePicker = document.getElementById('selectFile');
    filePicker.querySelector('input').addEventListener('change',onFilePicked, false);
}
