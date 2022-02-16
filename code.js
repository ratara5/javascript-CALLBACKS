// PRIMER USO
function prueba(callback){
    callback("pedro")
}

function decirNombre(nombre){
    console.log(nombre)
}

//callback es una función dentro de otra función
prueba(decirNombre)
//o
prueba(nombre=>console.log(nombre))

//SEGUNDO USO 
class Persona{
    constructor(nombre,instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}

//Cómo crear varias personas?
const data=[
    ["sujeto0","@sujeto0"],
    ["sujeto1","@sujeto1"],
    ["sujeto2","@sujeto2"],
    ["sujeto3","@sujeto3"]
]

const personas=[];

for(datum in data){
    personas[datum]=new Persona(data[datum][0],data[datum][1])
}

//Obtener el nombre de cada persona con callback
obtenerPersona=(id,cb)=>{
    if(personas[id]==undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null,personas[id].nombre)
    }
}

//...se llama la función. El primer parámetro es un id, el segundo es una función (un callback) que a su vez, como se muestra a continuación, recibe dos parámetros: err y persona. Esa segunda función se escribe, pero no es que se vaya a ejecutar obligatoriamente, primero hay que revisar el contenido de la primera función (una de cuyas instrucciones es ejecutar la segunda función) 
obtenerPersona(2,(err,persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona)
        //después de encontrar id, mostrar un nombre, luego mostrar un instagram, luego mostrar nro seguidores etc. Esto generaría un montón de if-else anidados, creándose código spaguetti. Esto se soluciona con promesas
    }
})
