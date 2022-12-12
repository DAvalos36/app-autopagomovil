import { createContext, useState } from 'react'
import { Producto, TiendaProductosProvider } from '../types'

export const TiendaContext = createContext<TiendaProductosProvider | null>(null)

export const DataProviderTienda = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [tiendaId, setTiendaId] = useState<string>('')

  const setTienda = (tiendaId: string): void => {
    setTiendaId(tiendaId)
  }
  const salirtienda = (): void =>{
    setTiendaId('')
  }

  const insertarProducto = (producto: Producto) => {
    setProductos([...productos, producto])
  }
  const eliminarProducto = (producto: Producto) => {
    setProductos(productos.filter((p) => p.codigo !== producto.codigo))
  }


  return (
    <TiendaContext.Provider value={{ productos, insertarProducto, eliminarProducto, setTienda, salirtienda, tiendaId }}>
      {children}
    </TiendaContext.Provider>
  )
}