function mostrarOcultarMenu(){
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive"); 
    menuVisible = !menuVisible;  // Alterna el estado del menú
}

function seleccionar(){
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}
let debounceTimer;
function efectoHabilidades(){
    clearTimeout(debounceTimer); // Limpia el temporizador
    debounceTimer = setTimeout(() => {
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("cisco");
            habilidades[3].classList.add("wordpress");
            habilidades[4].classList.add("cms");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("creatividad");
            habilidades[9].classList.add("proyect");
        }
    }, 100);  // 100 ms de espera antes de ejecutar la animación
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active'); // Añade la clase active al elemento clickeado
    });
});
