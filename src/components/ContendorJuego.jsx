import { palabras } from "../functions/logicaJuego"
import Juego from "./Juego"

export default function ContenedorJuego(){


    return(
        <div className="ContenedorJuego">
            <header className="">
                <h1>Encuentra la Palabra</h1>
            </header>
            <hr/>
            <Juego palabras={palabras}/>
            
            

        </div>
    )
}