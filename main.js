//El proposito de main es manipular el DOM (eso incluye invocar funciones)
//--------------------------------------------------------
// import {filterResults} from './data.js'
import {filterResults} from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';
//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    showData(Data);
})
//variables
let results = document.getElementById('character')
let Data = rickandmorty.results;
const selectedSpecies = document.querySelector('#specie'),
      selectedStatus = document.querySelector('#status'),
      selectedGender = document.querySelector('#gender'),
      selectedType = document.querySelector('#type'),
      selectedOrder = document.querySelector('#order');

//Event listener para los selects de la busqueda
selectedSpecies.addEventListener('change', e => {
    // searchData.species = e.target.value;
    Data.species = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  selectedStatus.addEventListener('change', e => {
    Data.status = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  selectedGender.addEventListener('change', e => {
    Data.gender = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  selectedType.addEventListener('change', e => {
    Data.type = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  selectedOrder.addEventListener('change', e => {
    Data.order = e.target.value;
   const result = filterResults(Data.order);
   if(result.length){
     showData(result);
     }else{
       noResult();
     }
  })

function showData(Data){
  CleanHTML();  //limpia el html previo
  Data.map( element => {
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
  noResult.innerHTML = "You're not gonna believe this,<br> because it ussually never happens,<br>👽 but 👽<br> No matches found";
  results.appendChild(noResult);
}