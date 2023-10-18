import { useEffect, useRef, useState } from "react"
import ContenedorMensajes from "./ContenedorMensajes"
import { palabraAleatoria, desordenarPalabra, cambiarBorde } from "../functions/logicaJuego"

export default function Juego({palabras}){


    const [aleatoria, setAleatoria] = useState(palabraAleatoria(palabras))
    const [desordenada, setDesordenada] = useState(desordenarPalabra(aleatoria))
    const [errores, setErrores] = useState(0)
    const [puntuacion, setPuntuacion] = useState(0)
    const input1 = useRef(), input2 = useRef(), input3 = useRef(), input4 = useRef(), input5 = useRef()
    const referencias = [input1, input2, input3, input4, input5]

    if(input1.current){
        input1.current.focus()
    }

    const validarLetra = (e) =>{
        const nInput = e.target.id
        const currentInput = referencias[nInput -1]
        const letraIngresada = (currentInput.current.value).toLowerCase()
        const estilos = currentInput.current.style

        

        if(letraIngresada != ''){
            if( letraIngresada === aleatoria[nInput - 1]){
                if(nInput != 5){
                    referencias[nInput].current.focus()
                    cambiarBorde(estilos, 'green')
                } else{
                    referencias[0].current.focus()
                    setPuntuacion(puntuacion + 10)
                }
                
            } else{
                
                setErrores(errores + 1)
                setTimeout( () => {currentInput.current.value = ''   }, 500)
                cambiarBorde(estilos, 'red')
            }
        }
        
        
        
    }

    const vaciarInputs = () =>{
        referencias.map(ref => {
            ref.current.value = ''
        });
    }

    const reiniciarJuego = () => { 
        setPuntuacion(0)
        setErrores(0)
        setAleatoria(palabraAleatoria(palabras))
    }

    useEffect( () => {
        if(errores == 4){
            alert('perdiste')
            vaciarInputs()
            setAleatoria(palabraAleatoria(palabras))
            setErrores(0)
            setPuntuacion(0)
        }
    }, [errores])

    useEffect(() =>{
        if(puntuacion != 0 ){
            setTimeout( () => {}, 500)
            vaciarInputs()
            setAleatoria(palabraAleatoria(palabras))
        }

        if(puntuacion == 100) {
            reiniciarJuego()
        }
        
    }, [puntuacion])

    useEffect( () => {
        setDesordenada(desordenarPalabra(aleatoria))
    }, [aleatoria]) 

    return(
        <div className="Juego">

            <ContenedorMensajes titulo="Palabra" valor={desordenada}/>
            <ContenedorMensajes titulo="Errores" valor={errores} />
            <ContenedorMensajes titulo="Puntuacion" valor={puntuacion} />

            <div className="contenedorInputs">
                
                <input className="inputLetra" maxLength={1} onChange={validarLetra} ref={input1} id={1} />
                <input className="inputLetra" maxLength={1} onChange={validarLetra} ref={input2} id={2} />
                <input className="inputLetra" maxLength={1} onChange={validarLetra} ref={input3} id={3} />
                <input className="inputLetra" maxLength={1} onChange={validarLetra} ref={input4} id={4} />
                <input className="inputLetra" maxLength={1} onChange={(e) => setTimeout( () => validarLetra(e), 1)} ref={input5} id={5} />
                
            </div>

            <div className="contenedorBotones">
                <button className="boton" onClick={reiniciarJuego}>Reiniciar</button>
            </div>
            

        </div>


    )

}