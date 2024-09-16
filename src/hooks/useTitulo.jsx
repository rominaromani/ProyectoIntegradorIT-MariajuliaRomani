import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `FF - ${textoTitulo}`
    }, [])
    
}

export default useTitulo