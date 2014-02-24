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
    this.pointClickX=0;
    this.pointClickY=0;
};

    Element.prototype.constructor = new Element();

    Element.prototype.getPosX = function(){
        return this.x;
    };

    Element.prototype.setPosX = function(x){
        this.x = x;
    };

    Element.prototype.getPosY = function(){
      return this.y;
    };

    Element.prototype.setPosY = function(y){
        this.y = y;
    };

    Element.prototype.getPointClickX = function(){
        return this.PointClickX;
    };

    Element.prototype.setPointClickX = function(PointClickX){
        this.PointClickX = PointClickX;
    };

    Element.prototype.getPointClickY = function(){
        return this.PointClickY;
    };

    Element.prototype.setPointClickY = function(PointClickY){
        this.PointClickY = PointClickY;
    };
    Element.prototype.setImage = function(str){
        this.image.src = 'images/'+str;
    };

    Element.prototype.getImage = function(){
        return this.image;
    };

    Element.prototype.setHeight = function(h){
        this.h = h;
    };

    Element.prototype.getHeight = function(){
        return this.h;
    };

    Element.prototype.setWidth = function(w){
        this.w = w;
    };

    Element.prototype.getWidth = function(){
        return this.w;
    };

    Element.prototype.setRotation = function(r){
        this.r = r;
    };

    Element.prototype.getRotation = function(){
        return this.r;
    };

    Element.prototype.resizeImage = function(str){
        if(str == 'zoomout'){

            this.setHeight(this.getHeight()+(this.getHeight()*0.1));
            this.setWidth(this.getWidth()+(this.getWidth()*0.1));
            this.setPosX(this.getPosX()- ((this.getWidth()*0.1)/2));
            this.setPosY(this.getPosY()-((this.getHeight()*0.1)/2));

        }else if(str=='zoomin'){

            if((this.getHeight() > 11) && (this.getWidth()>11)){
                console.log('in!');
                this.setHeight(this.getHeight()-(this.getHeight()*0.1));
                this.setWidth(this.getWidth()-(this.getWidth()*0.1));
                this.setPosX(this.getPosX()+((this.getWidth()*0.1)/2));
                this.setPosY(this.getPosY()+((this.getHeight()*0.1)/2));
            }
        }

    }

    Element.prototype.click = function(evt){

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

         if( (pos.x > x) && (pos.x<(x+this.w)) && (pos.y>y) && (pos.y<(y+this.h)) ){
            return true;
        }

        return false;
    };


