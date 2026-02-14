const cartaCerrada = document.getElementById("cartaCerrada");
const cartaAbierta = document.getElementById("cartaAbierta");
const texto = document.getElementById("texto");
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const stickerContainer = document.getElementById("stickerContainer");

const mensaje = "Amor de mi vida, mujer de mis ojos, lo más bello que tengo, mi tesorito. No una carta, porque te mereces algo mucho más grande: le he dedicado toda una página web para preguntarte… ¿Quieres ser mi San Valentín? ❤️";

let i = 0;
let contadorNo = 0;


const fotosRandom = [
    "img/ft1.jpg",
    "img/ft2.jpg"
];

// ===============================
// ABRIR CARTA
// ===============================
cartaCerrada.addEventListener("click", () => {
    
    cartaCerrada.style.display = "none";
    cartaAbierta.classList.add("activa");
    document.querySelector(".botones").style.display = "flex";
    escribirTexto();
});

// ===============================
// EFECTO MÁQUINA DE ESCRIBIR
// ===============================
function escribirTexto(){
    if(i < mensaje.length){
        texto.innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 40);
    }
}

// ===============================
// BOTÓN SÍ
// ===============================
btnSi.addEventListener("click", () => {

    // Ocultar carta y botones
    cartaAbierta.style.display = "none";
    document.querySelector(".botones").style.display = "none";
    stickerContainer.innerHTML = "";

    // Crear cuadro final
    stickerContainer.innerHTML = `
        <div class="final-box latido">
            <img src="img/ft4.jpg">
            <p>Sabía que dirías que sí ❤️ <br> no te puedes resistir a este bombom .</p>
        </div>
    `;
});


// ===============================
// BOTÓN NO
// ===============================
btnNo.addEventListener("click", () => {

    contadorNo++;

    // CRECER BOTÓN SÍ
    let escalaActual = 1 + (contadorNo * 0.3);
    btnSi.style.transform = `scale(${escalaActual})`;

    // NO 1
    if (contadorNo === 1) {

        const random = fotosRandom[Math.floor(Math.random() * fotosRandom.length)];

        stickerContainer.innerHTML = `
            <div>
                <img src="${random}" style="width:220px; border-radius:15px;">
                <p style="margin-top:10px;">¿Segura? </p>
            </div>
        `;
    }

    // NO 2
    else if (contadorNo === 2) {

        const random = fotosRandom[Math.floor(Math.random() * fotosRandom.length)];

        stickerContainer.innerHTML = `
            <img src="${random}" style="width:220px; border-radius:15px;">
        `;
    }

    // NO 3 en adelante
    else {
        
    }

});

// Lluvia de corazones
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.fontSize = (10 + Math.random() * 20) + "px";
    corazon.style.animationDuration = (4 + Math.random() * 3) + "s";
    corazon.innerHTML = "❤️";
    document.body.appendChild(corazon);

    // Remover después de caer
    setTimeout(() => {
        corazon.remove();
    }, 7000);
}

// Crear un corazón cada 300ms
setInterval(crearCorazon, 300);

const musica = document.getElementById("musica2");

cartaCerrada.addEventListener("click", () => {
    cartaCerrada.style.display = "none";
    cartaAbierta.classList.add("activa");
    document.querySelector(".botones").style.display = "flex";
    escribirTexto();

    
    musica.play().catch(() => {
        console.log("Usuario debe interactuar para reproducir la música");
    });
});
