import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading,setloading]=useState(true);
  const [searchterm, setsearch]=useState('');
  const [cocktail,setcocktail]=useState([]);
  // console.log(cocktail);
  const fetchdata= async()=>{
    setloading(true);
    try{
      const resp= await fetch(`${url}${searchterm}`);
      const data= await resp.json();
      const {drinks}=data;
      if(drinks){
        const newcocktails= drinks.map((elem)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=elem;
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })
        setcocktail(newcocktails);
      }
      else {
        setcocktail([])
      }
      setloading(false);
    }
    catch (error){
        console.log(error);
        setloading(false);
    }

  }

  useEffect(()=>{
    fetchdata();
  },[searchterm])

  return <AppContext.Provider value={{loading,searchterm,cocktail,setsearch}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
