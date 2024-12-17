const d= document

class jugadores {
    constructor(nombre){
        this.nombre=nombre
        this.puntos =0
    }

    sumar(){
        this.puntos+=1
      
        
    }

    restarRepetida(){
        this.puntos-=0.5

    }

    restarSuspendida(){
        this.puntos-=2
    }

    estatus(){
        console.log(this.nombre, this.puntos);
        
    }
}

const winner={
        Omar:{nombre:"Omar",Oro:5,Plata:3,Bronce:3,UltimaPosicion:3,jugadorActual:0},
        Prim:{nombre:"Prim",Oro:1,Plata:4,Bronce:2,UltimaPosicion:2,jugadorActual:0},
        Ter:{nombre:"Ter",Oro:4,Plata:2,Bronce:3,UltimaPosicion:1,jugadorActual:0},
        Rem:{nombre:"Rem",Oro:2,Plata:3,Bronce:4,UltimaPosicion:4,jugadorActual:0}

    
}



const obj={
    jugador1:new jugadores("jugador1"),
    jugador2:new jugadores("jugador2"),
    jugador3:new jugadores("jugador3"),
    jugador4:new jugadores("jugador4"),


}

const $header=d.querySelector(".header")
const $fragmento = d.createDocumentFragment()

Object.values(winner).map((valor,index)=>{
   const $div =d.createElement("div")
   const $pN= d.createElement("p")
   const $pO= d.createElement("p")
   const $pP= d.createElement("p")
   const $pB= d.createElement("p")
   const $pNPo= d.createElement("p")


   $pN.classList.add("nombreP")
   $pN.innerText=valor.nombre

   $pO.innerText=`Oro: ${valor.Oro} 🥇`
   $pP.innerHTML=`Plata: ${valor.Plata} 🥈`
   $pB.innerHTML=`Bronce: ${valor.Bronce} 🥉`
   $pNPo.innerHTML=`Posicion Anterior: ${valor.UltimaPosicion}° Jugador actual: ${valor.jugadorActual}`

   $div.appendChild($pN)
   $div.appendChild($pO)
   $div.appendChild($pP)
   $div.appendChild($pB)
   $div.appendChild($pNPo)

   $fragmento.append($div)
 
 



   
    

})
$header.appendChild($fragmento)

const $tbody= d.querySelector(".body-table")




Object.values(obj).map((valor)=>{
    const $tr =d.createElement("tr")
    const $thN=d.createElement("th")
    const $thP=d.createElement("th")

    const $botonSumar= d.createElement("button")
    const $botonRestar= d.createElement("button")
    const $botonSuspender= d.createElement("button")

    $botonSumar.innerText="Sumar"
    $botonRestar.innerText="Restar"
    $botonSuspender.innerText="Suspender"


    $botonSumar.addEventListener("click",()=>{
        valor.sumar()
        $thP.innerText=valor.puntos
        darColor()
        contar(10)
    
    })

    $botonRestar.addEventListener("click",()=>{
        valor.restarRepetida()
        $thP.innerText=valor.puntos
        darColor()
        contar(10)
        
    })

    $botonSuspender.addEventListener("click",()=>{
        valor.restarSuspendida()
        $thP.innerText=valor.puntos
        darColor()
        
        contar(10)
    })

    $thN.innerText=valor.nombre
    $thP.innerText=valor.puntos
    $thP.setAttribute("id", `${valor.nombre}`)
    

    $thN.classList.add("nombre")

    $botonSumar.classList.add('sumar')

    
    

    $tr.appendChild($thN);
    $tr.appendChild($thP)
    $tr.appendChild($botonSumar)
    $tr.appendChild($botonRestar)
    $tr.appendChild($botonSuspender)

    
   

    $fragmento.appendChild($tr)


    

})
$tbody.appendChild($fragmento)


function darColor (){

const jugadoresOrdenados =Object.values(obj).sort((a,b)=>b.puntos-a.puntos)


const jugadores = Object.keys(obj)




jugadores.forEach((id) => {
    const $Cpuntos = document.getElementById(id);
    // Reiniciar clases
    $Cpuntos.className="";

    // Agregar clase según la posición
   if (id === jugadoresOrdenados[0].nombre) {
        $Cpuntos.classList.add('primer-lugar'); // Clase para el más alto
    } else if (id === jugadoresOrdenados[1].nombre) {
        $Cpuntos.classList.add('segundo-lugar');
    } else if (id === jugadoresOrdenados[2].nombre) {
        $Cpuntos.classList.add('tercer-lugar');
    } else[
        $Cpuntos.classList.add('cuarto-lugar')
    ]
        
});

}

console.log(Math.round(Math.random()*4));
darColor()



const $contador = d.querySelector(".contador")
$contador.firstElementChild.innerText=10

const prueba = $tbody.querySelectorAll('tr .sumar')







let timeoutId;

function contar(contador){
     // Si hay un timeout en progreso, cancelarlo
    if (timeoutId) {
        clearTimeout(timeoutId);  // Cancelar el timeout anterior
    }

    if (contador>=0){
        prueba.forEach(el => {
            console.log(el.disabled=false)
             
         });

        $contador.firstElementChild.innerText=contador
        if(contador>6){
            $contador.style.backgroundColor='rgb(209, 171, 245)'
        }else if(contador==3){
             $contador.style.backgroundColor='rgb(0, 255, 21)'

        }else if(contador==2){
            $contador.style.backgroundColor='rgb(0, 255, 21)'

       }else if(contador==1){
        $contador.style.backgroundColor='rgb(217, 255, 0)'
        }else if(contador==0){
            $contador.style.backgroundColor='rgb(255, 0, 0)'
        }
        timeoutId = setTimeout(() => contar(contador - 1),1000)

        console.log(timeoutId);
        

     
        


    }else{
        prueba.forEach(el => {
            el.disabled=true
             
         });


    }

}






