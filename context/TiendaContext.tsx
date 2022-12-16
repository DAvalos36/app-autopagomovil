import { createContext, useState } from 'react'
import { ProductoTienda, TiendaProductosProvider } from '../types'

export const TiendaContext = createContext<TiendaProductosProvider | null>(null)

export const DataProviderTienda = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [productos, setProductos] = useState<ProductoTienda[]>([])
  const [tiendaId, setTiendaId] = useState<string>('')

  const setTienda = (tiendaId: string): void => {
    setTiendaId(tiendaId)
  }
  const salirtienda = (): void =>{
    setTiendaId('')
  }

  const insertarProducto = (producto: ProductoTienda): number => {
    setProductos([...productos, producto])
    return productos.length
  }
  const modificarProducto = (producto: ProductoTienda) => {
    setProductos(productos.map((p) => p.id === producto.id ? producto : p))
  }
  const eliminarProducto = (i: number) => {
    setProductos(productos.filter((p,index) => index !== i))
  }

  const eliminarTodosProductos = () => {
    setProductos([])
  }


  return (
    <TiendaContext.Provider value={{ productos, insertarProducto, eliminarProducto, setTienda, salirtienda, eliminarTodosProductos, modificarProducto, tiendaId }}>
      {children}
    </TiendaContext.Provider>
  )
}