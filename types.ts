export interface Producto {
    codigo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    link_img: string;
    cantidad?: number;
}

export interface TiendaProductosProvider {
    tiendaId: string;
    productos: Producto[];

    setTienda: (tiendaId: string) => void;
    salirtienda: () => void;

    insertarProducto: (producto: Producto) => void;
    eliminarProducto: (producto: Producto) => void;
}