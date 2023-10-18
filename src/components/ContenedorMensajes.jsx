
export default function ContenedorMensajes({titulo, valor}){
    
    return(
        <div className="contenedorPalabra">
            <p>{titulo}: </p>
            <p>{valor}</p>
        </div>
    )
}