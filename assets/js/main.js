  /*ocultar imagenes con el span close*/
  var close = document.getElementsByClassName('close');
  for(i= 0; i < close.length; i++){
   close[i].addEventListener("click",remove);
  }

  function remove(){
    var img=this.parentNode;
      img.style.display="none";
    }
  /* ocultar y mostrar textos de origen y historia*/
  document.getElementById("origen").addEventListener("click", function(){
    var texto1 = document.getElementById("texto1");
    mostrar(texto1);
  })

  document.getElementById("historia").addEventListener("click", function(){
    var texto2 = document.getElementById("texto2");
    mostrar(texto2);
  })

/** restaurar imagenes **/
document.getElementById("restaurar").addEventListener("click", function(){
  var content_img = document.getElementsByClassName("content-img");
  for(i= 0; i < content_img.length; i++){
   content_img[i].style.display="inline-block";
  }
})

function mostrar(texto){
  if(texto.style.visibility=="hidden"){
    texto.style.visibility="visible";
  }
  else {
    texto.style.visibility="hidden";
  }
}
