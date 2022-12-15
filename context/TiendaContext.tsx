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

  const insertarProducto = (producto: ProductoTienda) => {
    setProductos([...productos, producto])
  }
  const eliminarProducto = (producto: ProductoTienda) => {
    setProductos(productos.filter((p) => p.productos_info.codigo !== producto.productos_info.codigo))
  }

  const eliminarTodosProductos = () => {
    setProductos([])
  }


  return (
    <TiendaContext.Provider value={{ productos, insertarProducto, eliminarProducto, setTienda, salirtienda, eliminarTodosProductos, tiendaId }}>
      {children}
    </TiendaContext.Provider>
  )
}