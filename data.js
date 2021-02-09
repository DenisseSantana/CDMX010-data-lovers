//El proposito de data.js es manipular la data.... SOLO LA DATA
import rickandmorty from './data/rickandmorty/rickandmorty.js';
let Data = rickandmorty.results;

//contenedor para los resultados
///funciones  

    function filterResults(order) {
     let myFunctionSort
     if (order === 'az') {
      myFunctionSort = orderCardsAZ
     } else {
      myFunctionSort = orderCardsZA
     }
      const result = Data
        .filter(filterSpecies)
        .filter(filterStatus)
        .filter(filterGender)
        .filter(filterType)
        .sort(myFunctionSort)
     return result;
    }

    function filterSpecies(element){
     
      if(Data.species){
        return element.species === Data.species;
      }
      return element;
    }


    function filterStatus(element){
     
      if(Data.status){
        return element.status === Data.status;
      }
      return element;
    }


    function filterGender(element){
     
      if(Data.gender){
        return element.gender === Data.gender;
      }
      return element;
    }


    function filterType(element){
    
      if(Data.type){
        return element.type === Data.type;
      }
      return element;
    }

 
    function orderCardsAZ(){
  
    if(Data.order)
    return Data.sort(function(a,b){
      if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
       )return -1;
      if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
       )return 1;
      return 0;
})
}

function orderCardsZA(){
  
  if(Data.order)
  return Data.sort(function(a,b){
    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
      )return -1;
    if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
      )return 1;
    return 0;
})
}

export { filterResults, filterSpecies, filterGender, filterStatus, filterType, orderCardsAZ, orderCardsZA };

