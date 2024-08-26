//Jan: Ya esra funcional

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Jan: Error en $n, segun google XD name solito no va leerse como su clase en html sin un signo '#' si es id o '.'si es clase. Blog tiene que cambiar su '#' por un '.' (creo)
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/*Janice: la solucion de visual fue agregar Async a la funcion*/
async function displayUser(username) {

    $n.textContent = 'cargando...';
    /*Janice: Error de await, por que solo es valido para funciones asincronas || Data es lo que recibimos*/
    const data = await fetch(`${usersEndpoint}/${username}`);// *Mafer correccion para el JSON 
    
    /*Jan: Segun google, flata convertir la respuesta en json*/
    const dataJson = await data.json();

    console.log(data);
    console.log(dataJson); //Jan: Esto si imprime la info chida

    //Jan: Solo queda cambiar data -> dataJson (Creo)
    $n.textContent = dataJson.name; //Mafer , correcion comillas invertidas
    $b.textContent = dataJson.blog || 'Blog no disponible';
    $l.textContent = dataJson.location || 'Locacion no disponible'; 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; //correcion del mensaje de error. Decia messege
}

//Jan: Ya trae la info
displayUser('stolinski').catch(handleError);