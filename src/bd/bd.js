/**
 * Created by fl43 on 19/02/14.
 */

/*
* @param tipo {String} - kind do device
* @return storage
*/

var storage;

function OpenDB(kind, callback){
    storage = navigator.getDeviceStorage(kind);
    callback();
};


function getElementsStorage(){

    storage = navigator.getDeviceStorage('pictures');
    var cursor = storage.enumerate();
    var files= new Array();
    var ind=0;

    cursor.onsuccess = function () {

        if(this.result){
            var file = this.result;
            var objetoURL = window.URL.createObjectURL(file);
            files.push(objetoURL);
            this.continue();
            //$('.conteiner_imgs').append('hhh');
        }else
             printImages(files, 0);

    }
    cursor.onerror = function () {
        $('.conteiner_imgs').html("No file found: " + this.error);
    }

}


function printImages(files, value){
/*
    var nome_file = 'img'+value;
    var img = document.createElement('img');
    img.src = files[value];
    img.id = nome_file;
    document.getElementById('conteiner_imgs').appendChild(img);

    $('#'+nome_file).ready(function(){
        if(value < 10)
        // if(files[value]!=null)
           printImages(files,value+1);
    });

*/


   str = "<div class='img' style='background-image:url( " +files[value]+ " )' > </div>";

   $('#conteiner_imgs').append(str);
    if(value< 10)
    printImages(files, value+1);


}