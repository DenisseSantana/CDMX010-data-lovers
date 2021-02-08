//El proposito de data.js es manipular la data.... SOLO LA DATA
import rickandmorty from './data/rickandmorty/rickandmorty.js';
let information = rickandmorty.results;
//contenedor para los resultados
///funciones  
    function filterResults(order) {
     let myFunctionSort
     if (order === 'az') {
      myFunctionSort = orderCardsAZ
     } else {
      myFunctionSort = orderCardsZA
     }
      const result = information
        .filter(filterSpecies)
        .filter(filterStatus)
        .filter(filterGender)
        .filter(filterType)
        .sort(myFunctionSort)
     return result;
    }

    function filterSpecies(element){
      const {species} = information;
      if(species){
        return element.species === species;
      }
      return element;
    }

    function filterStatus(element){
      const {status} = information;
      if(status){
        return element.status === status;
      }
      return element;
    }

    function filterGender(element){
      const {gender} = information;
      if(gender){
        return element.gender === gender;
      }
      return element;
    }


    function filterType(element){
      const {type} = information;
      if(type){
        return element.type === type;
      }
      return element;
    }

    function orderCardsAZ(){
     const {order} = information;
    if(order)
    return information.sort(function(a,b){
      if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
       )return -1;
      if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
       )return 1;
      return 0;
})
}

function orderCardsZA(){
  const {order} = information;
  if(order)
  return information.sort(function(a,b){
    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
      )return -1;
    if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
      )return 1;
    return 0;
})
}
export { filterResults, filterSpecies, filterGender, filterStatus, filterType, orderCardsAZ, orderCardsZA };


// export function filterAlgo(caracteristica){
//   return `${caracteristica}´jajajajaja`
// }

// export function filterBySpecies(specie){
//   return `${specie}´jajajajaja`  
// }

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// export function filterAlive(statusAlive, status) {

//   const filterForAlive= statusAlive.filter(allData=> allData.status===status);
  
//   return filterForAlive;
// };


