function printCards(array = []){

    arrayofCards = ""

    array.forEach(item =>{
       //indicarle que en el div va a ir concatenado las
       //tarjetas anteriores con una tarjeta nueva

       console.log(item)
       let statuscolor = item.status === "alive" ? "success" : "danger"

       if(item.status === "alive") statuscolor = "success"
       else statuscolor = "danger"
          
       arrayofCards +=  `
       <div class="card" style="width: 30rem;">
          <img src="${item.image}" class="card-img-top" alt="imagen personaje">
          <div class="card-body">
              <p>${item.name} - <spam class="text-${statuscolor}">${item.status}</spam> </p>
             <p>${item.species}</p>
              <p>${item.location.name}</p>
          </div>
        </div>
       `
    })
     document.querySelector("#printer").innerHTML = arrayofCards

    }

    function getCharacters(){
        // devuelve los personajes que yo le indique

        // definir la url
        const url = "https://rickandmortyapi.com/api/character/1,183"

        // consumir la url con fetch
        // promesa exitosa o error
        fetch(url) .then(response =>{
          // conventir la informacion a tipo json
              response.json().then(data => {
                printCards(data)
              })
        })
        .catch(error =>{
            console.log(error)
        })

        // conventir la informacion a tipo json
    }

printCards();
getCharacters();