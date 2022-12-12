import { createContext, ReactNode, useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { LoginContext } from '../types';

const LoggingContext = createContext<LoginContext | null>(null)

export function UserContextProvide({ children }: { children: ReactNode | ReactNode[] }) {
  const [cargando, setCargando] = useState<boolean>(true)
  const [sesionIniciada, setSesionIniciada] = useState(false)
  const [usuario, setUsuario] = useState<null>(null)

  const peticion = async () => {

    let { data: tiendas, error } = await supabase
      .from('tiendas')
      .select('*')

    console.log("Error: ", error)
    console.log("===Tiendas uwu===", tiendas)

  }

  useEffect(() => {
    // void peticion()
  }, [])
  
  return (
    <LoggingContext.Provider value={{ cargando, sesionIniciada, usuario }}>
      {children}
    </LoggingContext.Provider>
  )
}
