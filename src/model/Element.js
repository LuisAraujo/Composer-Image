/**
 * DragDrop()
 * Move()
 *
 */

var Element = function(img, h, w){

    this.x=95;
    this.y=223;
    this.image=img;
    this.h =h;
    this.w =w;
    this.r=0;


    this.getPosX = function(){
        return this.x;
    };

    this.setPosX = function(x){
        this.x = x;
    };

    this.getPosY = function(){
      return this.y;
    };

    this.setPosY = function(y){
        this.y = y;
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
        return this.r;
    };


    this.click = function(evt){

        var canvas = document.getElementById('canvas');
        canvas.height=400;
        canvas.width=320;
        var rectNav = canvas.getBoundingClientRect();

        var pos = {
            x: evt.targetTouches[0].pageX - rectNav.left,
            y: evt.targetTouches[0].pageY - rectNav.top
        };

        var y= ( (this.y < 0)? 0 : this.y);
        var x= ( (this.x < 0)? 0 : this.x);
        console.log('x',x,x+this.w,'y',y,y+this.h );
        // if(  ((pos.x > x) && (pos.x<(x+eval(this.w)))) && ((pos.y>y) && (pos.y<(y+eval(this.h))))){
         if( (pos.x > x) && (pos.x<(x+this.w)) && (pos.y>y) && (pos.y<(y+this.h)) ){
            return true;
        }

        return false;
    };

}
