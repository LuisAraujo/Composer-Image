
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
    arrayElements = new Array();
    backgroundImage = new Image();
    this.WIDTH = 320;
    this.HEIGHT = 400;
    c = new Controller();
}

    /*constructor*/
    MyCanvas.prototype.constructor = MyCanvas();

    /* attribute */
    MyCanvas.prototype.canvas= null;
    MyCanvas.prototype.ctx = null;
    MyCanvas.prototype.arrayElements = null;
    MyCanvas.prototype.backgroundImage = null;
    MyCanvas.prototype.c = null;
    MyCanvas.prototype.WIDTH = 0;
    MyCanvas.prototype.HEIGHT = 0;


    /* methods */


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

        if(this.ctx==null)
            this.ctx = this.getContextCanvas;

    this.ctx.clearRect(0,0,320,400);
    }

    /*
     * Redraw canvas with backgroundImage and all Elements
     * */
    MyCanvas.prototype.redrawCanvas = function(){

        this.clearCanvas();

        this.ctx.drawImage(backgroundImage, 0, 0, this.WIDTH, this.HEIGHT);

        for(var i=0; i< arrayElements.length; i++){
            //this.canvas.drawImage(arrayElements[i].getImage(), arrayElements[i].getPosX(), arrayElements[i].getPosY());
            this.ctx.drawImage(arrayElements[i].getImage(),arrayElements[i].getPosX(),arrayElements[i].getPosY(),arrayElements[i].getWidth(), arrayElements[i].getHeight());
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
    //    backgroundImage = new Image();
        backgroundImage.src = img;
    };


    MyCanvas.prototype.pushElement = function(elem){
        arrayElements.push(elem)
    }

    MyCanvas.prototype.clearArrayElement = function(){
        for(var i=0; i<arrayElements.length; i++)
            arrayElements.pop();
    }

    MyCanvas.prototype.verificaClique = function(evt){

        for(var i = arrayElements.length-1; i >=0; i--){
            if(arrayElements[i].click(evt)==true){
               c.setDeleteMode('enable');
                return arrayElements[i];
            }
        }
      c.setDeleteMode('disable');
      return null;
    };

