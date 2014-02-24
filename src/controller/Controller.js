/**
 * Created by fl43 on 23/02/14.
 */


var Controller = function(){}

Controller.prototype.constructor = new Controller();

Controller.prototype.setDeleteMode = function(str){
  if(str=='enable')
      $('#bt_delete_image').css('background-image','url(images/bt_delete.png)');
  else if(str=='disable')
      $('#bt_delete_image').css('background-image','url(images/bt_delete_disable.png)');
};
