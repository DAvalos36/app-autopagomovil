import { createContext, ReactNode, useEffect, useState } from 'react';
import { LoginContext } from '../types';

const LoggingContext = createContext<LoginContext | null>(null)

export function UserContextProvide({children}: {children: ReactNode | ReactNode[]}) {
  const [cargando, setCargando] = useState<boolean>(true)
  const [sesionIniciada, setSesionIniciada] = useState(false)
  const [usuario, setUsuario] = useState<null>(null)

  return (
    <LoggingContext.Provider value={{cargando, sesionIniciada, usuario}}>
      {children}
    </LoggingContext.Provider>
  )
}
