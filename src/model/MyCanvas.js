
/**
 *  canvas
 *  ctx
 *  arrayElements
 *  backgroundImage
*/

/*constructor*/
var MyCanvas = function() {
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    arrayElements = new Array();
  //  var img = new Image();
    //img.src='images/elementos1.png'
    //arrayElements.push(img);

    backgroundImage = new Image();
    WIDTH = 320;
    HEIGHT = 400;


   this.getInstanceCanvas = function(){

        if(canvas == null){
           canvas = document.getElementById('canvas');
        }
        return canvas;
    }


    /*
     * Get a context 2d of canvas
     * @return {HTMLContext2dCanvas}
     * */
    this.getContextCanvas = function(){
        return this.getInstanceCanvas().getContext('2d');
    }

    /*
     *  Clear all canvas
     * */
    this.clearCanvas = function(){

        if(ctx==null)
            ctx = this.getContextCanvas;

        ctx.clearRect(0,0,320,400);
    }

    /*
     * Redraw canvas with backgroundImage and all Elements
     * */
    this.redrawCanvas = function(){

        this.clearCanvas();

        ctx.drawImage(backgroundImage, 0, 0, WIDTH, HEIGHT);

        for(var i=0; i< arrayElements.length; i++){
            //this.canvas.drawImage(arrayElements[i].getImage(), arrayElements[i].getPosX(), arrayElements[i].getPosY());
            ctx.drawImage(arrayElements[i].getImage(),arrayElements[i].getPosX(),arrayElements[i].getPosY());
        }



    }

    /*
     * Get backgroundImage
     * @return {HTMLImageElement}
     * */
    this.getBGImage = function(){
        return backgroundImage;
    };

    /*
     * Set backgroundImage
     * @param {String} - url of image
     * */
   this.setBGImage = function(img){
        backgroundImage.src = img;
    };


    this.pushElement = function(elem){
        arrayElements.push(elem)
    }


    this.verificaClique = function(evt){

        for(var i = arrayElements.length-1; i >=0; i--){
            if(arrayElements[i].click(evt)==true)
              return arrayElements[i];
        }

      return null;
    };

};


/*
 * Get a instance of canvas. this method use the Partner Singleton
 * @return {CanvasRenderingContext2D}
 * */
