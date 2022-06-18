
const catalogo = document.querySelector("#disProd")
const carrito = document.querySelector("#VentProd")
const Nprod = document.querySelector("#NProd")
const PrecioFinal = document.querySelector("#PrecioFinal")

const ventasRealizdas= []

const piezasEnstock = []

const carroVentas = []

GeneradorAutomatico()

GeneradorVentas()

mostrarCatalogo()

