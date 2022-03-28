function IncrHandler(event){
    let cantidad =  parseInt(event.parrafo.innerHTML);
    console.log(cantidad);
    event.parrafo.innerHTML=toString(cantidad+1);
}


const botonUno = document.querySelector("#boton");
console.log(botonUno);
botonUno.addEventListener("click",IncrHandler);



