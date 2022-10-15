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
    
    buscar(nCodigo){
        let temp = this.inicio;
        while (temp.codigo != nCodigo){
            temp = temp.siguiente;
        }
        if (temp.codigo === nCodigo){
            return temp;
        }
    }

    eliminar(nCodigo) {
        let temp = this.inicio;
        if (this.inicio.codigo === nCodigo){
            this.inicio = this.inicio.siguiente;
        } else {
            while (temp.siguiente.codigo != nCodigo){
                temp = temp.siguiente;
            }
    
            if (temp.siguiente.codigo === nCodigo){
                temp.siguiente = temp.siguiente.siguiente;
            } else {
                alert ('Inexistente');
            }
        } 
    }
    

    insertar(nuevo, posicion){
        let temp = this.inicio;
        if (posicion === 1){
            this.agregarInicio(nuevo);
        } else {
            let i = 1;
            while ((i + 1) != posicion){
                if (temp.siguiente != null){
                    temp = temp.siguiente;
                    i++;
                } else {
                    alert('Inexistente');
                    break;
                }
            } 
    
            if ((i+1) === posicion){
                nuevo.siguiente = temp.siguiente;
                temp.siguiente = nuevo;
            }
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
        let j = 1;
        while(temp.siguiente != null){
            temp = temp.siguiente;
            j++;
        }

        let concat = "" + temp.nombre;
        j = j - 1;
        while (j > 0){
            let i = 1;
            temp = this.inicio;
            while (i < j){
                temp = temp.siguiente;
                i++;
            }
            concat += " " + temp.nombre ;
            j--;
        }

        return concat;
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
