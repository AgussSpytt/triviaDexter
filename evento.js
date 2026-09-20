let p = 0; // contador de puntaje
let tiempo = 0; 

// cro
function iniciarCronometro() {
    setInterval(() => {
        tiempo++;
        document.getElementById('cronometro').innerText = "Tiempo: " + tiempo + "s";
    }, 1000);
}

function verificarPuntajeMaximo() {
    if (p === 10) {
        document.getElementById("modalVictoria").style.display = "flex";
    }
}


function cerrarModal() {
    document.getElementById("modalVictoria").style.display = "none";
}


function mostrar1() {
    document.getElementById('txt_1').readOnly = true;
    let r1 = document.getElementById('txt_1').value.trim().toUpperCase();
    if (r1 === "MIAMI METRO" || r1 === "POLICIA DE MIAMI") {
        document.getElementById("respuesta1").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta1").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res1").innerText = "Lo correcto es: Miami Metro";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar2() {
    document.getElementById('txt_2').readOnly = true;
    let r2 = document.getElementById('txt_2').value.trim().toUpperCase();
    if (r2 === "PASAJERO OSCURO" || r2 === " PASAJEROOSCURO") {
        document.getElementById("respuesta2").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta2").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res2").innerText = "Lo correcto es: Pasajero Oscuro";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar3() {
    document.getElementById("txt_3").disabled = true;
    let r3 = document.getElementById('txt_3').value;
    if (r3 == 1) {
        document.getElementById("respuesta3").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta3").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res3").innerText = "Lo correcto es: Análisis de salpicaduras de sangre";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar4() {
    document.getElementById("txt_4").disabled = true;
    let r4 = document.getElementById('txt_4').value;
    if (r4 == 1) {
        document.getElementById("respuesta4").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta4").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res4").innerText = "Lo correcto es: Su padre adoptivo, Harry";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar5(grupo, valor) {
    document.getElementsByName(grupo).forEach(radio => radio.disabled = true);
    if (valor == 1) {
        document.getElementById("respuesta5").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta5").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res5").innerText = "Lo correcto es: Slice of Life";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar6(grupo, valor) {
    document.getElementsByName(grupo).forEach(radio => radio.disabled = true);
    if (valor == 1) {
        document.getElementById("respuesta6").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta6").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res6").innerText = "Lo correcto es: Es su hermana adoptiva";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar7() {
    document.getElementById("txt_7").disabled = true;
    let r7 = document.getElementById('txt_7').value;
    if (r7 == 1) {
        document.getElementById("respuesta7").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta7").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res7").innerText = "Lo correcto es: Brian Moser (Bynie)";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar8(grupo, valor) {
    document.getElementsByName(grupo).forEach(radio => radio.disabled = true);
    if (valor == 1) {
        document.getElementById("respuesta8").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta8").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res8").innerText = "Lo correcto es: Muestras de sangre en portaobjetos";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}
function mostrar9() {
    document.getElementById("txt_9").disabled = true;
    let r9 = document.getElementById('txt_9').value;
    
    if (r9 == 1) {
        document.getElementById("respuesta9").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p = p + 1; // <-- ¡AQUÍ ESTABA FALTANDO SUMAR EL PUNTO!
    } else {
        document.getElementById("respuesta9").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res9").innerText = "Lo correcto es: Miami";
    }
    
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}


function mostrar10() {
    document.getElementById('txt_10').readOnly = true;
    // .toLowerCase() convierte el texto a minúsculas para que coincida perfectamente
    let r10 = document.getElementById('txt_10').value.trim().toLowerCase();

    if (r10 === "blood brother" || r10 === "hermanos de sangre") {
        document.getElementById("respuesta10").innerHTML = "<img src='IMG/bien.gif' width='60' height='60'>";
        p++;
    } else {
        document.getElementById("respuesta10").innerHTML = "<img src='IMG/malo.gif' width='60' height='60'>";
        document.getElementById("res10").innerText = "Lo correcto es: blood brother";
    }
    document.getElementById("resultado").innerText = "Puntos: " + p;
    verificarPuntajeMaximo();
}
let reproduciendo = false;

function alternarMusica() {
    let audio = document.getElementById("musicaFondo");
    let btn = document.getElementById("btnMusica");

    if (reproduciendo) {
        audio.pause();
        btn.innerText = "🎵 Reproducir Música";
        reproduciendo = false;
    } else {
        audio.play();
        btn.innerText = "🔇 Pausar Música";
        reproduciendo = true;
    }
}