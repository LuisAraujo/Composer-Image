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
   set_images_view();
   set_buttons_events();

   app = new App();
   //app.set_buttons_events();

});
