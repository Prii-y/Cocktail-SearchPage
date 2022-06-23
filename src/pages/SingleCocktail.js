import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading,setloading]=useState(false);
  const [cocktail,setcocktail]=useState(null)
  const {id}=useParams();
  
  async function getdata(){
        setloading(true);
  try{
      const res = await fetch(`${url}${id}`);
      const data=await res.json();
      if(data.drinks.length>=0){
        console.log(data);
          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strGlass:glass,
            strCategory:category,strInstructions:instructions}=data.drinks[0];
            const newcocktails={name,image,info,glass,category,instructions};
            setcocktail(newcocktails);
      }
        else{setcocktail(null)}
    } 
    catch(error)
    {console.log(error);}
    finally{setloading(false);}
  
  };

  useEffect(()=>{getdata()},[])


    useEffect(()=>{
      getdata();
    } ,[])


    if(loading){
      return <Loading></Loading>
    }
    if(!cocktail){
      return <h2 className='section-title'>No content to Display</h2>
    }
    const {name,image,info,glass,category,instructions}=cocktail;
  return (
    <div>
      
        <img src={image}></img>
        <h2>  {name} </h2>
        <div>
          {
            info
          }
        </div>
        <span>{glass}</span>
        <p>{category}</p>
        <p>
          {instructions}
        </p>
        <Link to='/cocktail'><button className='btn btn-primary'>Back to Home</button> </Link>
    </div>
  )
}

export default SingleCocktail
