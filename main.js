//El proposito de main es manipular el DOM (eso incluye invocar funciones)
//--------------------------------------------------------
// import {filterResults} from './data.js'
import {filterResults} from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
  
    showData(information);
})

//variables
let results = document.getElementById('character')
let information = rickandmorty.results;
const species = document.querySelector('#specie'),
      status = document.querySelector('#status'),
      gender = document.querySelector('#gender'),
      type = document.querySelector('#type'),
      order = document.querySelector('#order');
//Event listener para los selects de la busqueda
species.addEventListener('change', e => {
    // searchData.species = e.target.value;
    information.species = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })
  status.addEventListener('change', e => {
    information.status = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })
  gender.addEventListener('change', e => {
    information.gender = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })
  type.addEventListener('change', e => {
    information.type = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })
  order.addEventListener('change', e => {
    // console.log('evento de order');
    information.order = e.target.value;
   const result = filterResults(information.order);
   if(result.length){
     showData(result);
     }else{
       noResult();
     }
  })
function showData(information){
  CleanHTML();  //limpia el html previo
  information.forEach( element => {
    const divHtml = document.createElement('div');
    divHtml.className = 'card';
        divHtml.innerHTML=`
        <img src='${element.image}'/><br><br>
        <p> <b>Id</b>: ${element.id}</P>
        <p> <b>Name:</b> ${element.name}</P>
        <p> <b>Status:</b> ${element.status}</P>
        <p> <b>Species:</b> ${element.species}</P>
        <p> <b>Type:</b> ${element.type}</P>
        <p> <b>Gender:</b> ${element.gender}</P>
        <p> <b>Origin:</b> ${element.origin.name}</P>
        <p> <b>Location:</b> ${element.location.name}</P>
        `;
    results.appendChild(divHtml)
  })
}
function CleanHTML(){
  while(results.firstChild){
    results.removeChild(results.firstChild);
  }
}
function noResult(){
  CleanHTML();
  const noResult = document.createElement('div');
  noResult.classList.add('alert')
  // noResult.innerHTML = ' 👽 Oops 👽 <br>  No matches found <br> 🤦‍♂️';
  noResult.innerHTML = "You're not gonna believe this,<br> because it ussually never happens,<br>👽 but 👽<br> No matches found";
  results.appendChild(noResult);
}

//funciones
// function showData(information){
//   CleanHTML();  //limpia el html previo
//   information.forEach( element => {
//     const divHtml = document.createElement('div');
//     divHtml.className = 'card';
//         divHtml.innerHTML=`
//         <img src='${element.image}'/><br><br>
//         <p> <b>Id</b>: ${element.id}</P>
//         <p> <b>Name:</b> ${element.name}</P>
//         <p> <b>Status:</b> ${element.status}</P>
//         <p> <b>Species:</b> ${element.species}</P>
//         <p> <b>Type:</b> ${element.type}</P>
//         <p> <b>Gender:</b> ${element.gender}</P>
//         <p> <b>Origin:</b> ${element.origin.name}</P>
//         <p> <b>Location:</b> ${element.location.name}</P>
//         `;
//     results.appendChild(divHtml)
//   })
// }
//     function CleanHTML(){
//       while(results.firstChild){
//         results.removeChild(results.firstChild);
//       }
//     }

//     // Funcion que filtra
//    export function filterResults(order) {
//      let myFunctionSort
//      if (order === 'az') {
//       myFunctionSort = orderCardsAZ
//      } else {
//       myFunctionSort = orderCardsZA
//      }
//       const result = information
//         .filter(filterSpecies)
//         .filter(filterStatus)
//         .filter(filterGender)
//         .filter(filterType)
//         .sort(myFunctionSort)
//       if(result.length){
//       showData(result);
//       }else{
//         noResult();
//       }
//     }
    
//     function noResult(){
//       CleanHTML();
//       const noResult = document.createElement('div');
//       noResult.classList.add('alert')
//       noResult.textContent = 'No matches found';
//       results.appendChild(noResult);
//     }

//     function filterSpecies(element){
//       const {species} = searchData;
//       if(species){
//         return element.species === species;
//       }
//       return element;
//     }
//     function filterStatus(element){
//       const {status} = searchData;
//       if(status){
//         return element.status === status;
//       }
//       return element;
//     }
//     function filterGender(element){
//       const {gender} = searchData;
//       if(gender){
//         return element.gender === gender;
//       }
//       return element;
//     }
//     function filterType(element){
//       const {type} = searchData;
//       if(type){
//         return element.type === type;
//       }
//       return element;
//     }
// function orderCardsAZ(){
//   const {order} = searchData;
//   if(order)
//   return information.sort(function(a,b){
//     if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
//       )return -1;
//     if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
//       )return 1;
//     return 0;
// })
// }
// function orderCardsZA(){
//   const {order} = searchData;
//   if(order)
//   return information.sort(function(a,b){
//     if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
//       )return -1;
//     if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
//       )return 1;
//     return 0;
// })
// }

//TERCER INTENTO

// //El proposito de main es manipular el DOM (eso incluye invocar funciones)
// //--------------------------------------------------------
// // import {filtrarAlgo} from './data.js'
// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// let information = rickandmorty.results;
// //Eventos
// document.addEventListener('DOMContentLoaded',()=>{
//     // data;
//     showData(information);
// })
// //variables
// const species = document.querySelector('#specie');
// const status = document.querySelector('#status');
// const gender = document.querySelector('#gender');
// const type = document.querySelector('#type');
// const name = rickandmorty.results.name;
// //contenedor para los resultados
// let results = document.getElementById('character')
// //Event listener para los selects de la busqueda
// species.addEventListener('change', e => {
//     searchData.species = e.target.value;
//     filterResults();
//   })
//   status.addEventListener('change', e => {
//     searchData.status = e.target.value;
//     filterResults();
//   })
//   gender.addEventListener('change', e => {
//     searchData.gender = e.target.value;
//     filterResults();
//   })
//   type.addEventListener('change', e => {
//     searchData.type = e.target.value;
//     filterResults();
//   })
//   order.addEventListener('change', e => {
//     searchData.order = e.target.value;
//     filterResults();
//   })
//   //generando un objeto con la busqueda
//   const searchData = {
//     species: "",
//     status: "",
//     gender: "",
//     type: "",
//     order:"",
// }
// //funciones
// function showData(information){
//   CleanHTML();  //limpia el html previo
//   information.forEach( element => {
//     const divHtml = document.createElement('div');
//     divHtml.className = 'card';
//         divHtml.innerHTML=`
//         <img src='${element.image}'/><br><br>
//         <p> <b>Id</b>: ${element.id}</P>
//         <p> <b>Name:</b> ${element.name}</P>
//         <p> <b>Status:</b> ${element.status}</P>
//         <p> <b>Species:</b> ${element.species}</P>
//         <p> <b>Type:</b> ${element.type}</P>
//         <p> <b>Gender:</b> ${element.gender}</P>
//         <p> <b>Origin:</b> ${element.origin.name}</P>
//         <p> <b>Location:</b> ${element.location.name}</P>
//         `;
//     results.appendChild(divHtml)
//   })
// }
//     function CleanHTML(){
//       while(results.firstChild){
//         results.removeChild(results.firstChild);
//       }
//     }
//     //Funcion que filtra
//     function filterResults() {
//       const result = information.filter(filterSpecies).filter(filterStatus).filter(filterGender).filter(filterType).filter(filterOrder)
//       if(result.length){
//       showData(result);
//       }else{
//         noResult();
//       }
//     }
//     function noResult(){
//       CleanHTML();
//       const noResult = document.createElement('div');
//       noResult.classList.add('alert')
//       noResult.textContent = 'Oops! There are no characters like that!'
//       results.appendChild(noResult);
//     }

   

//     function filterSpecies(element){
//       const {species} = searchData;
//       if(species){
//         return element.species === species;
//       }
//       return element;
//     }
//     function filterStatus(element){
//       const {status} = searchData;
//       if(status){
//         return element.status === status;
//       }
//       return element;
//     }
//     function filterGender(element){
//       const {gender} = searchData;
//       if(gender){
//         return element.gender === gender;
//       }
//       return element;
//     }
//     function filterType(element){
//       const {type} = searchData;
//       if(type){
//         return element.type === type;
//       }
//       return element;
//     }
//     function filterOrder(element){
//       const {order} = searchData;
//       if (order === az) {
//       name.sort(function(a,b) {
//         if (a.name > b.name) {
//           return 1;
//         }
//         if (a.name < b.name) {
//           return -1;
//         }
//         // a must be equal to b
//         return 0;
//       })
//       } else if (order === za) {
//         name.sort(function(a,b) {
//           if (a.name > b.name) {
//             return -1;
//           }
//           if (a.name < b.name) {
//             return 1;
//           }
//           // a must be equal to b
//           return 0;
//         })
//         }
//     }




// SEGUNDO INTENTO - YA FUNCIONAN LOS FILTROS

// //El proposito de main es manipular el DOM (eso incluye invocar funciones)
// //--------------------------------------------------------
// // import {filtrarAlgo} from './data.js'
// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// let information = rickandmorty.results;
// //Eventos
// document.addEventListener('DOMContentLoaded',()=>{
//     // data;
//     showData();
// })
// //variables
// const species = document.querySelector('#specie');
// const status = document.querySelector('#status');
// const gender = document.querySelector('#gender');
// const type = document.querySelector('#type');
// //contenedor para los resultados
// let results = document.getElementById('character')
// // let cardsFiltered = document.getElementById('character')
// //Event listener para los selects de la busqueda
//   species.addEventListener('change', e => {
//     searchData.species = e.target.value;
//     filterResults();
//   })
//   status.addEventListener('change', e => {
//     searchData.status = e.target.value;
//     filterResults();
//   })
//   gender.addEventListener('change', e => {
//     searchData.gender = e.target.value;
//     filterResults();
//   })
//   type.addEventListener('change', e => {
//     searchData.type = e.target.value;
//     console.log(results);
//     filterResults();
//   })
//   //generando un objeto con la busqueda
//   const searchData = {
//     species: "",
//     status: "",
//     gender: "",
//     type: "",
// }
// //funciones
// function showData(){
//   information.forEach( element => {
//     const divHtml = document.createElement('div');
//     divHtml.className = 'card';
//         divHtml.innerHTML=`
//         <img src='${element.image}'/><br><br>
//         <p> <b>Id</b>: ${element.id}</P>
//         <p> <b>Name:</b> ${element.name}</P>
//         <p> <b>Status:</b> ${element.status}</P>
//         <p> <b>Species:</b> ${element.species}</P>
//         <p> <b>Type:</b> ${element.type}</P>
//         <p> <b>Gender:</b> ${element.gender}</P>
//         <p> <b>Origin:</b> ${element.origin.name}</P>
//         <p> <b>Location:</b> ${element.location.name}</P>
//         `;
//     results.appendChild(divHtml)
//   })
// }
//     //Funcion que filtra
//     function filterResults() {
//       results.innerHTML = ''
//       const result = information.filter(filterSpecies).filter(filterStatus).filter(filterGender).filter(filterType)

//       result.forEach( element => {
//         const divHtml = document.createElement('div');
//         divHtml.className = 'card';
//             divHtml.innerHTML=`
//             <img src='${element.image}'/><br><br>
//             <p> <b>Id</b>: ${element.id}</P>
//             <p> <b>Name:</b> ${element.name}</P>
//             <p> <b>Status:</b> ${element.status}</P>
//             <p> <b>Species:</b> ${element.species}</P>
//             <p> <b>Type:</b> ${element.type}</P>
//             <p> <b>Gender:</b> ${element.gender}</P>
//             <p> <b>Origin:</b> ${element.origin.name}</P>
//             <p> <b>Location:</b> ${element.location.name}</P>
//             `;
//         results.appendChild(divHtml)
//       })
//       console.log(result);
//       console.log(result.length);
//     }

//     function filterSpecies(element){
//       const {species} = searchData;
//       if(species){
//         return element.species === species;
//       }
//       return element;
//     }
//     function filterStatus(element){
//       const {status} = searchData;
//       if(status){
//         return element.status === status;
//       }
//       return element;
//     }
//     function filterGender(element){
//       const {gender} = searchData;
//       if(gender){
//         return element.gender === gender;
//       }
//       return element;
//     }
//     function filterType(element){
//       const {type} = searchData;
//       if(type){
//         return element.type === type;
//       }
//       return element;
//     }

// export function filterAlive(statusAlive, status) {

//   const filterForAlive= statusAlive.filter(allData=> allData.status===status);
  
//   return filterForAlive;
// };

//PRIMER INTENTO


// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// let personajes = rickandmorty.results;
// //Eventos
// document.addEventListener('DOMContentLoaded',()=>{
//     data;
// })
// //variables
// const species = document.querySelector('#specie');
// const status = document.querySelector('#status');
// const gender = document.querySelector('#gender');
// const type = document.querySelector('#type');
// //contenedor para los resultados
// let results = document.getElementById('character')
// //Event listener para los selects de la busqueda
// species.addEventListener('change', e => {
//     searchData.species = e.target.value;
// //   console.log( filterAlgo(searchData.species), 'Esto ejecuto tu filter') -------Carlos
//     // filterResults();
//   })
//   status.addEventListener('change', e => {
//     searchData.status = e.target.value;
//     console.log(searchData);
//   })
//   gender.addEventListener('change', e => {
//     searchData.gender = e.target.value;
//     console.log(searchData);
//   })
//   type.addEventListener('change', e => {
//     searchData.type = e.target.value;
//     console.log(searchData);
//   })
//   //generando un objeto con la busqueda
//   const searchData = {
//     species: "",
//     status: "",
//     gender: "",
//     type: "",
// }
// // Consumiendo la data dinamicamente
// // Funciones
// // function getData() {
// //     const url ='data/rickandmorty/rickandmorty.json'
// //     fetch(url)
// //     .then(response => response.json ())
// //     .then(alldata => {setHtml(alldata.results)})
// //     .catch(error => console.log(error));
// // }
//  let data = personajes.forEach(( element )=>{
//     const divHtml = document.createElement('div');
//     divHtml.className = 'card';
//     // divHtml.setAttribute("data-status", status);
//     // divHtml.setAttribute("data-species", species);
//     // divHtml.setAttribute("data-type", type);
//     // divHtml.setAttribute("data-gender", gender);
//     // divHtml.setAttribute("data-origin", origin.name);
//     // divHtml.setAttribute("data-location", location.name);
//         divHtml.innerHTML=`
//         <img src='${element.image}'/><br><br>
//         <p> <b>Id</b>: ${element.id}</P>
//         <p> <b>Name:</b> ${element.name}</P>
//         <p> <b>Status:</b> ${element.status}</P>
//         <p> <b>Species:</b> ${element.species}</P>
//         <p> <b>Type:</b> ${element.type}</P>
//         <p> <b>Gender:</b> ${element.gender}</P>
//         <p> <b>Origin:</b> ${element.origin.name}</P>
//         <p> <b>Location:</b> ${element.location.name}</P>
//         `;
//     results.appendChild(divHtml)
//     })
