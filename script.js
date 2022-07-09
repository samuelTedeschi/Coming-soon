function time(){
    temporisador = new Date();
    
    let hora = temporisador.getHours();
    let min = temporisador.getMinutes();
    let seg = temporisador.getSeconds();

    document.getElementById("dv1").innerHTML = hora
    document.getElementById("dv2").innerHTML = min
    document.getElementById("dv3").innerHTML = seg
}


