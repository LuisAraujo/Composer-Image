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

}


function dataToBlob(file){
    var objetoURL = window.URL.createObjectURL(file);
    return objetoURL;
}

function cliqueElement(evt){
    global_elem = null;
    var elem = app.canvas.verificaClique(evt);
    var canvas = document.getElementById('canvas');

    if(elem!=null){
        console.log('ok');
        global_elem = elem;
        global_elem.setPointClickX(evt.targetTouches[0].pageX-elem.getPosX());
        global_elem.setPointClickY(evt.targetTouches[0].pageY-elem.getPosY());
        canvas.height=400;
        canvas.width=320;
       // canvas.addEventListener("touchmove", moveElement, false);
    }

}

function moveElement(evt){

    if(global_elem != null){
        global_elem.setPosX(evt.targetTouches[0].pageX - (global_elem.getPointClickX() ));
        global_elem.setPosY(evt.targetTouches[0].pageY - (global_elem.getPointClickY()));
    }

}

function resizeImage(str){
    console.log('call resize');
    if(global_elem != null){
        global_elem.resizeImage(str);
    }
}



function set_images_view(){

    $('.img_gallery').each(function(){
        $(this).css('background-image',"url('images/"+$(this).attr('id')+".png')" );
    });


}
function  set_buttons_events(){

    /* button 'open file' of main screen */
    $('#bt_open_file').click(function(){
        /* effect hide*/
        $('#selectFile_inp').trigger('click');
        $('#screen01').hide('slide',{},500, function(){
            /*effect show*/
            $('#screen_editor').show('slide',{},500, function(){});
        });
    });
    $('#bt_menu').click(function(){

        if(app.getState() != 'menu_editor'){
            $('#menu_editor').show('blind',{},500,function(){});
            app.setState('menu_editor');
        }else{
            $('#menu_editor').hide('blind',{},500,function(){});
            app.setState('editor');
        }
    });

    $('#bt_open').click(function(){
        $('#menu_editor').hide('blind',{},500,function(){});

        app.setState('open_file');

        //in onFilePicked()?
        app.canvas.clearArrayElement();
        app.canvas.clearCanvas();
        $('#selectFile_inp').trigger('click');

    });

    $('#bt_insert_image').click(function(){

        if(app.getState() != 'gallery_image'){
            $('#gallery_images').show('blind',{},500,function(){});
            app.setState('gallery_image');
        }else{
            $('#gallery_images').hide('blind',{},500,function(){});
            app.setState('editor');
        }

    });

    $('.img_gallery').click(function(){
        $('#gallery_images').hide('blind',{},500,function(){});
        app.setState('editor');
        var img = new Image();
        img.src=$(this).attr('file');
        var h=$(this).attr('h');
        var w=$(this).attr('w');
        //'images/elementos1.png';
        var elem = new Element(img,parseInt(h),parseInt(w));
        app.canvas.pushElement(elem);

    });

    $('#zoomin').click(function(){
        resizeImage('zoomin');
    });
    $('#zoomout').click(function(){
        resizeImage('zoomout');
    });


    var filePicker = document.getElementById('selectFile');
    filePicker.querySelector('input').addEventListener('change',onFilePicked, false);

}

