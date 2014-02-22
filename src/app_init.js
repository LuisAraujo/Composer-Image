/**
 * Created by fl43 on 19/02/14.
 */
'use strict';

/*
 * App COMPOSER IMAGES
 * Fun editor images for Firefox Os
 *
 * Author: Luis Araujo
 * Contact: luisaraujo.ifba@gmail.com
 * GitHub: github.com/LuisAraujo
 *
 */

var app = null;

$('window').ready(function() {
    //block screen
    window.screen.mozLockOrientation("portrait");

    //initializing app
   set_buttons_events();
   app = new App();
   //app.set_buttons_events();

});


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
      //  app.canvas.setBGImage(null);
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
            //'images/elementos1.png';
        var elem = new Element(img);
        app.canvas.pushElement(elem);

    });


    var filePicker = document.getElementById('selectFile');
    filePicker.querySelector('input').addEventListener('change',onFilePicked, false);

}