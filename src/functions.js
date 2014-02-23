/**
 * Created by fl43 on 19/02/14.
 */


var global_elem=null;


function onFilePicked(){

    $('#selectFile').css('display','none');

    var file = this.files[0];
    app.canvas.setBGImage(dataToBlob(file));
    app.startLoopCanvas();


    var canvas = document.getElementById('canvas');
    canvas.height=400;
    canvas.width=320;
    canvas.addEventListener("touchstart", cliqueElement, false);
    canvas.addEventListener("touchmove", moveElement, false);
    canvas.addEventListener("touchend", function(){
       // document.getElementById('canvas').removeEventListener("touchmove", moveElement, false);
        global_elem = null;
        console.log('saiu');
    }, false);
}


function dataToBlob(file){
    var objetoURL = window.URL.createObjectURL(file);
    return objetoURL;
}

function insertImageInCanvas(){
    $('#canvas').css('display','block');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.drawImage(ArrayElements['image'],0,0);
    setTimeout(loop, 1000);
}

function loop(){
    ctx.clearRect(0,0,ctx.width, ctx.height);
    ctx.drawImage(ArrayElements['image'],0,0,300,400);
}




function cliqueElement(evt){
    global_elem = null;
    var elem = app.canvas.verificaClique(evt);
    var canvas = document.getElementById('canvas');

    if(elem!=null){
        console.log('ok');
        global_elem = elem;
        canvas.height=400;
        canvas.width=320;
       // canvas.addEventListener("touchmove", moveElement, false);
    }

}

function moveElement(evt){

    if(global_elem != null){
        global_elem.setPosX(evt.targetTouches[0].pageX - (global_elem.w/2));
        global_elem.setPosY(evt.targetTouches[0].pageY  - (global_elem.h) );
    }

}