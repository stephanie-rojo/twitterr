window.onload = function() {

    var sendButton = document.getElementsByName("twittear")[0];
    var thinkInput = document.getElementsByName("loQuePenso")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    var mostrador = document.getElementById("mostrador");

    var boton=document.getElementsByName("twittear")[0];

    sendButton.onclick = function() {
        if (thinkInput.value == "") {
          boton.disabled=true;

        } else {

            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit";
            nameSpan.textContent = "El usuario ";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;
            dateSpan.id="datos";
            nameSpan.id="nombre";
            tuitP.id="comentario";

            timeLine.insertBefore(tuitDiv, timeLine.children[0]);

        }
    }
//creando contador de caracteres//
thinkInput.onkeyup =function(){

       var max = 140;
       var total = '';
       var rest = thinkInput.value.length;
       total = max-rest;
       mostrador.value=total;

       if (total < 0) {
         boton.disabled= true;
       }
       if (total <=20 && total >10) {
         boton.disabled=false;
         mostrador.style.color="blue";
       }
       if(total <= 10){
         boton.disable=false;
         mostrador.style.color="red";
       }

     }

}
// textarea cresca//
var textarea = document.getElementByClass("textarea");
var heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
