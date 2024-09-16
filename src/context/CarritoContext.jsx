import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import PropTypes from 'prop-types'


const CarritoContext = createContext()

const CarritoProvider = ( { children } ) => {

    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])


    function elProductoEstaEnElCarrito(producto) { 
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {

        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const ModificarCantidadDeProducto = (productoId, cantidad) => {
        const productoDeCarrito = carrito.find(prod => prod.id === productoId);

        if (productoDeCarrito) {
            productoDeCarrito.cantidad = cantidad;
            window.localStorage.setItem('carrito', JSON.stringify(carrito));
        } else {
            console.error(`Producto con id ${productoId} no encontrado en el carrito`);
        }
    };

    const eliminarProductoDelCarritoContext = (id) => {
        console.log(id)
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoContext = () => {
        console.log(carrito)
    }

    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext,
        ModificarCantidadDeProducto
    }

    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>
}

CarritoProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CarritoProvider }
export default CarritoContext