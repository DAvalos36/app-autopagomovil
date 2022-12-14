import type { User } from '@supabase/supabase-js'

export interface ProductoInfo {
    codigo: string
    descripcion: string
    link_img: string
    nombre: string
}
export interface ProductoTienda {
    existe: boolean,
    id: number,
    precio: number,
    productos_info: ProductoInfo,
}

export interface TiendaProductosProvider {
    tiendaId: string;
    productos: ProductoTienda[];

    setTienda: (tiendaId: string) => void;
    salirtienda: () => void;

    insertarProducto: (producto: ProductoTienda) => void;
    eliminarProducto: (producto: ProductoTienda) => void;
}
export interface LoginContext {
    sesionIniciada: boolean;
    cargando: boolean;
    usuario: User | null;

}
export interface LogginProvider {

}