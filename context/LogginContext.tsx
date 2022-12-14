import { createContext, ReactNode, useEffect, useState } from 'react';
import { supabase } from '../supabase';

import { LoginContext, ProductoTienda } from '../types';
import type { User } from '@supabase/supabase-js'

export const LoggingContext = createContext<LoginContext | null>(null)

export function UserContextProvide({ children }: { children: ReactNode | ReactNode[] }) {
  const [cargando, setCargando] = useState<boolean>(true)
  const [sesionIniciada, setSesionIniciada] = useState(false)
  const [usuario, setUsuario] = useState<User | null>(null)

  const pruebaJoin = async () => {
    let { data: tienda_productos, error } = await supabase
    .from('tienda_productos')
    .select(`
      id,
      precio,
      existe,
      productos_info (
        codigo,
        nombre,
        descripcion,
        link_img
      )
    `).eq('tienda', '5bece0fa-01cf-4e52-8bf7-b8a28b588a02')
    .eq('producto', '7501006559316')
    
    const info = tienda_productos as ProductoTienda[]
    console.log("Error: ", error)
    console.log("===Tienda_productos uwu===", info)


  }

  const peticion = async () => {

    let { data: tiendas, error } = await supabase
      .from('tiendas')
      .select('*')

    console.log("Error: ", error)
    console.log("===Tiendas uwu===", tiendas)

  }

  const cargarInfoUsuario = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (user !== null) {
      setSesionIniciada(true)
      console.log(user.id)
    }
    setUsuario(user)
    setCargando(false)
  }

  useEffect(() => {
    // void pruebaJoin()
    cargarInfoUsuario()

    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        if (session.user !== null) {
          console.log(session.user.id)
          setUsuario(session.user)
          setSesionIniciada(session != null)
        }
        else {
          setSesionIniciada(false)
        }
      }
      else {
        setSesionIniciada(false)
      }
    })
  }, [])

  return (
    <LoggingContext.Provider value={{ cargando, sesionIniciada, usuario }}>
      {children}
    </LoggingContext.Provider>
  )
}
