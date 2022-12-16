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
    cantidad?: number
}

export interface TiendaProductosProvider {
    tiendaId: string;
    productos: ProductoTienda[];

    setTienda: (tiendaId: string) => void;
    salirtienda: () => void;

    insertarProducto: (producto: ProductoTienda) => number;
    modificarProducto: (producto: ProductoTienda) => void;
    eliminarProducto: (id: number) => void;

    eliminarTodosProductos: () => void;
}
export interface LoginContext {
    sesionIniciada: boolean;
    cargando: boolean;
    usuario: User | null;

}
export interface LogginProvider {

}