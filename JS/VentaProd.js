function listarVentas() {
    console.table(ventasRealizdas);
}

function generarCarrito() {
    let carroVentas = JSON.parse(localStorage.getItem("DatosVentas"));

carroVentas.forEach((tarj) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card my-3 mx-2" style="width: 18rem;  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.4);">
                        <img src="${tarj.imagen}" class="card-img-top" alt="..."/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title">${tarj.nombre}</h5>
                                    <p class="card-text text-center">${tarj.descripcion}</p>
                                <h6 class="card-title txtvioleta">$ ${tarj.importe}</h6>
                                    <p>Cantidad de unidades: (esto queda por implementar) </p>
                            <a class="btn btn-warning"><i class="fa-solid fa-trash-can"></i></a>
                            </div>
                    </div>`;
    carrito.appendChild(div);
});
}
