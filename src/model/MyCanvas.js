
/**
 *  canvas
 *  ctx
 *  arrayElements
 *  backgroundImage
*/

/*constructor*/
var MyCanvas = function() {
    this.canvas= document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.arrayElements = new Array();
    this.backgroundImage = 0;
    this.WIDTH = 320;
    this.HEIGHT = 400;
};

/*setting constructor*/
MyCanvas.prototype.constructor = MyCanvas();

/*
* Get a instance of canvas. this method use the Partner Singleton
* @return {CanvasRenderingContext2D}
* */

MyCanvas.prototype.getInstanceCanvas = function(){

  if(this.canvas == null){
   this.canvas = document.getElementById('canvas');
  }
 return this.canvas;
}


/*
* Get a context 2d of canvas
* @return {HTMLContext2dCanvas}
* */
MyCanvas.prototype.getContextCanvas = function(){
    return this.getInstanceCanvas().getContext('2d');
}

/*
*  Clear all canvas
* */
MyCanvas.prototype.clearCanvas = function(){
    ctx = this.getContextCanvas;
    ctx.clearRect(0,0,ctx.width, ctx.height);
}

/*
* Redraw canvas with backgroundImage and all Elements
* */
MyCanvas.prototype.redrawCanvas = function(str){

   this.ctx.drawImage(backgroundImage, 0, 0, WIDTH, HEIGHT);

    for(var i=0; i< arrayElements.length; i++){
       this.canvas.drawImage(arrayElements[i], arrayElements[i].getPosX, arrayElements[i].getPosY);
    }
}

/*
* Get backgroundImage
* @return {HTMLImageElement}
* */
 MyCanvas.prototype.getBGImage = function(){
  return backgroundImage;
};

/*
* Set backgroundImage
* @param {String} - url of image
* */
MyCanvas.prototype.setBGImage = function(img){
   backgroundImage=new Image();
   backgroundImage.src = img;
};


