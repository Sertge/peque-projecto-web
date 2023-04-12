// alert("En la lista no enumerada hay una función especial")
const miClase=document.getElementsByClassName("mi-clase")
console.log(miClase,"Esta es mi clase")
let miObjeto={
  tipo:'carro',
  marca:'toyota',
  modelo:2017,
  precioNuevo:20000
}
let arreglo=[
  {
    tipo:'carro',
    marca:'toyota',
    modelo:2017,
    precioNuevo:20000
  },{
    tipo:'moto',
    marca:'honda',
    modelo:2014,
    precioNuevo:3000
  },{
    tipo:'bicicleta',
    marca:'gw',
    modelo:2000,
    precioNuevo:500
  }
]
function preciosUsados({parameter,descuento}){
  if(2021-parameter.modelo>2){
    parameter.precioUsado=parameter.precioNuevo*descuento
    }else{
      parameter.precioUsado=parameter.precioNuevo
    }
}
arreglo.forEach(el=>{preciosUsados({parameter:el,descuento:0.9})})
  if(2021-miObjeto.modelo>2){
    miObjeto.precioUsado=miObjeto.precioNuevo*0.9
  }else{
    miObjeto.precioUsado=miObjeto.precioNuevo
  }
  console.log(arreglo)
  // console.log(miObjeto.precioUsado,arreglo)
miClase[0].onclick=function(){
  console.log("you clicked the list")
  let newElement=document.createElement('li')
  const elementText=prompt("Add an item to the list")
  newElement.textContent=elementText
  miClase[0].appendChild(newElement)
  miClase[0].style.backgroundColor="red"
  
}