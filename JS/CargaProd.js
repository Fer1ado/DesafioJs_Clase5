


function crearID() {
    return parseInt(Math.random() * 1000)
}


function cargarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a cargar:")
    let stock = parseInt(prompt("Ingrese la cantidad del producto ofrecido:"))
    let importe = parseInt(prompt("Ingrese el precio del producto cargado:"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), nombre, stock, importe))
    console.table(piezasEnstock)
}



function GeneradorAutomatico(){
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Base de Maceta", 45, 1200, "estas bases de maceta únicas son especiales para tu jardín", "../ASSETS/FOTOS_CATALOGO/item1-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "platos playos", 30, 2200, "Este juego de platos es el ideal para destacar tus comidas", "../ASSETS/FOTOS_CATALOGO/item10-min.JPG"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Platos de Postre", 80, 800, "Nuestros platos de postre son pequeños y versátiles", "../ASSETS/FOTOS_CATALOGO/item11-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Plato de Gres", 100, 1400, "Los platos de Gres son especiales por su dureza y esmaltado distintivo", "../ASSETS/FOTOS_CATALOGO/item12-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Plato de Gres", 25, 1500, "Los platos de Gres son especiales por su dureza y esmaltado distintivo", "../ASSETS/FOTOS_CATALOGO/item13-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Tazas de te chino", 24, 900, "Las tasas de te chinas tienen un trabajo especial de esmalte para bebidas calientes", "../ASSETS/FOTOS_CATALOGO/item2-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Cuencos de Terracota", 75, 1800, "Los cuencos de la tierra son los indicados para organizar tus cosas", "../ASSETS/FOTOS_CATALOGO/item4-min.jpg"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Cuencos de Rio", 35, 2000, "Los cuencos del rio estan especialmente preparados para líquidos fermentados", "../ASSETS/FOTOS_CATALOGO/item5-min.jpg"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Juego de mesa", 18, 3600, "los juegos de terracota vienen genial para el uso diario en la casa", "../ASSETS/FOTOS_CATALOGO/item9-min.JPG" ))
}





function GeneradorVentas(){
    ventasRealizdas.push(new Venta("Pepe Jonte", "Calle laspina 2085", 165, 15 ,"pepeJ@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Cacho Fontaner", "Calle josefa 6548", 486, 7, "cachoF@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Pepe Mujica", "Calle pintaponint 1058", 846, 12, "pepeM@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Ricardo Alfonsin", "Calle cisaña 789", 684, 45, "ricardoA@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Juana de Arco", "Calle pendular 57", 864, 5 ,"JuanaA@gmail.com", crearID()))
}

function buscarProducto (){
    let nom = prompt("ingrese parte del nombre de las piezas a buscar:")
    let resultado = piezasEnstock.filter(p => p.nombre.includes(nom.toUpperCase()))
    console.log("Encontramos los siguientes productos:")
    console.table(resultado)
}


function listarProductos(){
    for(let lista of piezasEnstock){
    console.table(lista)
}
}

function borrarProducto(){
    console.table(piezasEnstock)
    let cod = parseInt(prompt ("ingrese el ID del producto que desea borrar:"))
    let existe = piezasEnstock.some(p=> p.id === cod)

    if (existe){
        let index = piezasEnstock.findIndex((i)=>i.id === cod)
            piezasEnstock.splice(index,1)
            console.clear()
            console.table(piezasEnstock)
            console.warn("el producto con id " + cod + " ha sido borrado")
        
    } else {
        console.error("No se encontro el código ingresado")
    }
}


function mostrarCatalogo(){
    piezasEnstock.forEach(tarj =>{
        let div = document.createElement("div")
        div.className = "tarjeta"
        div.innerHTML = `<div class="card my-3 mx-2" style="width: 18rem;  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.4);">
                            <img src="${tarj.imagen}" class="card-img-top" alt="..."/>
                                <div class="card-body d-flex flex-column align-items-center">
                                    <h5 class="card-title">${tarj.nombre}</h5>
                                    <p class="card-text text-center" style="height: 60px;"> ${tarj.descripcion} </p>
                                    <h6 class="card-title txtvioleta">$ ${tarj.importe}</h6>
                                    <p>stock: ${tarj.stock} unidades </p>
                                    <a id="btnAgr${tarj.id}" class="btn btn-primary text-white">Agregar al Carrito</a>
                                </div>
                        </div>`
        catalogo.appendChild(div)

let sumaCarro = document.getElementById(`btnAgr${tarj.id}`)
sumaCarro.addEventListener("click", ()=>{cargarCarro(tarj.id)}) //FALTA COMPLETAR EL AJUSTE DE STOCK
})
}

function cargarCarro(id){
    let agregarProducto = piezasEnstock.find(prod=> prod.id === id)
    carroVentas.push(agregarProducto)
        let str = JSON.stringify(carroVentas)
        localStorage.setItem("DatosVentas", str)
        console.log("Producto Agregado!")
}





