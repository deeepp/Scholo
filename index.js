var doc=document.getElementById("img");
var slides= ['assets/book.jpg','assets/scl.webp','assets/grad.jpg'];
var pos=['center','left','right']
var content = ['Get your <br>dream <br>done','Enhance your <br> Education','Achieve <br>Ambition']
var start=0;
function slider(){
    if(start<slides.length){
        start=start+1;
    }
    else{
        start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[start-1]+">";
    img.innerHTML+= "<div class="+pos[start-1]+">"+content[start-1]+"</div>";}
    
  
//slider();
setInterval(slider,5000);
