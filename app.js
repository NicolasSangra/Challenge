function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("resultado__texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
      swal("¡Lo siento!", "Debes modificar el texto. Tiene que ser en minúscula y sin acento.", "warning");
      return;
    }
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = textoCifrado;
      document.getElementById("texto").value="";
      titulo__resultado.textContent = "";
      parrafo.textContent = "";
      muñeco.style.display = "none";
      document.querySelector(".boton__copiar").style.display = "block";
     
    } 
    else {
      muñeco.src = "/assets/Muñeco.png";
      titulo__resultado.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("¡Lo siento!", "Debes ingresar un texto en minúscula y sin acento.", "warning");
    }
  }

  
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("resultado__texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

     
      if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
      swal("¡Lo siento!", "Debes modificar el texto. Tiene que ser en minúscula y sin acento.", "warning");
      return;
    }
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u")
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = textoCifrado;
        document.getElementById("texto").value="";
        titulo__resultado.textContent = "";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        document.querySelector(".boton__copiar").style.display = "block";
      
      } 
      
      else {
        muñeco.src = "/assets/Muñeco.png";
        titulo__resultado.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Lo siento!", "Debes ingresar el texto encriptado en minuscula y sin acento.", "warning");
      }
  }


  function copiarResultado() {
    let tituloMensaje = document.getElementById("resultado__texto");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    var resultadoEncriptado = document.getElementById("resultado__texto").innerText; 
    const tempInput = document.createElement("textarea");
    tempInput.value = resultadoEncriptado;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy"); 
    swal("¡Texto Copiado!", "El texto ha sido copiado al portapapeles.", "success"); 
    document.body.removeChild(tempInput);
    document.querySelector(".boton__copiar").style.display = "none";
    muñeco.style.display = "block";
    tituloMensaje.textContent= "";
    titulo__resultado.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    
   
  }


