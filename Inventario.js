class Inventario {

    constructor(){
        this.inicio = null;
    }

    agregar(nuevo){
        if (this.inicio === null){
            this.inicio = nuevo;
        } else {
            let temp = this.inicio;
            while (temp.siguiente != null){
                temp = temp.siguiente;
            }
            temp.siguiente = nuevo;
        }
    }

    buscar(Codigo){
        let temp = this.inicio;
        while (temp != null){
            if (temp.Codigo === Codigo){
                return temp;
            }
            temp = temp.siguiente;
        }
        return null;
    }
    
    eliminar(Codigo){
        let temp = this.inicio;
        let anterior = null;
        while (temp != null){
            if (temp.codigo == Codigo){
                if (anterior == null){
                    this.inicio = temp.siguiente;
                } else {
                    anterior.siguiente = temp.siguiente;
                }
                return temp;
            }
            anterior = temp;
            temp = temp.siguiente;
        }
        return null;
    }

    insertar(nuevo, posicion){
        if (posicion == 0){
            nuevo.siguiente = this.inicio;
            this.inicio = nuevo;

        } else {
            let temp = this.inicio;
            let anterior = null;
            let i = 0;
            while (temp != null && i < posicion){
                anterior = temp;
                temp = temp.siguiente;
                i++;


            }
            anterior.siguiente = nuevo;
            nuevo.siguiente = temp;
        }
    }


    listarP(){
        let concat = "";
        let temp = this.inicio;
        while (temp != null){
            concat += temp.nombre + " ";
            temp = temp.siguiente;
        }
        return concat;
    }


    listadoInversa(){
        let temp = this.inicio;
        let anterior = null;
        let siguiente = null;
        while (temp != null){
            siguiente = temp.siguiente;
            temp.siguiente = anterior;
            anterior = temp;
            temp = siguiente;
        }
        this.inicio = anterior;
    }
}


class Producto{
    constructor(codigo, nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}


let lista = new Inventario ();

function addProducto(){
    let producto = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    
    if(producto == ""){
        alert("El nombre es obligatorio para agregar un producto");
        document.getElementById("nombre").focus();

    }else if(codigo == ""){
        alert("El codigo es obligatorio para agregar un producto")
        document.getElementById("codigo").focus();
    }else if (cantidad == ""){
        alert("La cantidad es obligatoria para agregar un producto");
        document.getElementById("cantidad").focus();
    }else if( costo == ""){
        alert("El costo es obligatorio para agregar un producto");
        document.getElementById("costo").focus();
    }

    let articulo = new Producto (producto, codigo, cantidad, costo);
    lista.agregar(articulo);
    console.log(lista);
    document.getElementById("nombre").value="";
    document.getElementById("codigo").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("costo").value="";
}

function buscarX(){
    let codigo = document.getElementById("codigo").value;
    let producto = lista.buscar(codigo);
    if(producto == null){
        alert("El producto no existe");
    }else{
        alert("El producto es: " + producto.nombre + " " + producto.codigo + " " + producto.cantidad + " " + producto.costo);
    }
}


function eliminarX(){
    let codigo = document.getElementById("eliminar").value;
    let producto = lista.eliminar(codigo);
    console.log(producto);
}

function insertar(){
    let producto = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    let articulo = new Producto (producto, codigo, cantidad, costo);
    lista.insertar(articulo, codigo);
    console.log(lista);
}


function listar(){
    let tabla = document.getElementById("productos");
    let temp = lista.inicio;
    while (temp != null){
        let fila = tabla.insertRow(-1);
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        let celda4 = fila.insertCell(3);
        celda1.innerHTML = temp.nombre;
        celda2.innerHTML = temp.codigo;
        celda3.innerHTML = temp.cantidad;
        celda4.innerHTML = temp.costo;
        temp = temp.siguiente;
    }
}