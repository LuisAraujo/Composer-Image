/**
 * DragDrop()
 * Move()
 *
 */

var Element = function(str){

    this.posX=95;
    this.posY=223;
    this.image=str;
    this.h = 0;
    this.w=0;
    this.r=0;


    this.getPosX = function(){
        return this.posX;
    };

    this.setPosX = function(x){
        this.posX = x;
    };

    this.getPosY = function(){
      return this.posY;
    };

    this.setPosY = function(y){
        this.PosY = y;
    };

    this.setImage = function(str){
        this.image.src = 'images/'+str;
    };

    this.getImage = function(){
        return this.image;
    };

    this.setHeight = function(h){
        this.h = h;
    };

    this.getHeight = function(){
        return this.h;
    };

    this.setWidth = function(w){
        this.w = w;
    };

    this.getWidth = function(){
        return this.w;
    };

    this.setRotation = function(r){
        this.r = r;
    };

    this.getRotation = function(){
        return r;
    };



}
