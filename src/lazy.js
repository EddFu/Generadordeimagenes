//intersection observer API para identificar si la imagen ya se esta viendo por medio del wiewport

const isIntersecting = (entry) => {
    return entry.isIntersecting // sera true (si esta dentro de la pantalla)
};

const loadImage = (entry) => {
    const container = entry.target; //target es el container (div)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar imagen
    imagen.src = url;

    //si la imagen ya cargo desregistrar la imagen del observer
    observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {

    entries.filter(isIntersecting).forEach(loadImage)
});

//
export const registerImg = (imagen) => {
    observer.observe(imagen);
}