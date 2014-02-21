/**
 * Created by fl43 on 19/02/14.
 */


function onFilePicked(){

    $('#selectFile').css('display','none');

    var file = this.files[0];
    app.canvas.setBGImage(dataToBlob(file));
    app.startLoopCanvas();
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
