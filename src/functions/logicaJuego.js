
export const palabraAleatoria = (palabras) =>{
        
    const n = Math.ceil(Math.random() * palabras.length)
    const aleatoria = palabras[n-1]
    return aleatoria
}

export const desordenarPalabra = (palabra) => {

    const arrayPalabra = [...palabra]
    let desordenada = ''

    for(let i=0 ; i < 5; i++){
        const n = Math.ceil(Math.random() * (5 - i))
        const letra = arrayPalabra.splice(n-1, 1)
        desordenada += letra
    }

    return desordenada
}

export const cambiarBorde = (estilos, color) =>{
    estilos.borderColor = color
    setTimeout( () => {estilos.borderColor = 'white'}, 500)
}

export const palabras = [
    "abeja", "abrir", "acero", "actos","agudo","aislo","amigo","ancho", "angel", "antes", "arena","asilo",
     "audaz","audio","aviso", "ayuda", "azote", "bache", "baile", "bajar", "balas", "bando", "barco", "basar",
     "blanco", "bocas", "broma", "buscar", "cable", "calle","campa", "campo", "canto", "carro", "casas", 
     "causa", "cerca", "ciclo","cieno", "cielo", "cinco", "circo","clase", "clima", "clave", "color", "coral",
     "cruel", "cuerpo", "danza", "datos", "dedos", "dolor", "ducha", "duelo", "enano", "enero",
     "flaco", "flora", "fondo", "fuego", "fumar", "gafas", "negro", "gallo", "gente", "globo", "grano",
     "guapo", "gusto", "hablo", "hacer", "hojas", "humor", "igual", "imagen", "jabón","jugar", "lejos", "libro", 
     "madre", "manos", "marco", "mesas", "miedo", "mucho", "nacer", "nieve", "nubes", "ocaso",
     "papel", "parar", "patas", "perro", "piedra", "plato", "pobre", "radio", "robar", "sabor", "salir", "sello",
     "silla", "tarde", "tarta", "tigre", "torre", "traje", "trozo", "vagon", "vapor", "venir", "volar",
     "zorro"
]