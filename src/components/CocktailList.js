import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  
  const {cocktail,loading}=useGlobalContext();

  if(loading){
    return <Loading></Loading>
  }

  if(!loading&&cocktail.length<=0){
    return <h2 className='section-title '> No Cocktails found for Search</h2>
  }

  return (

    <section className='section'>
    <h2 className='section-title'>Cocktails</h2>
    <div className='cocktails-center'>
    {
      cocktail.map((elem)=>(<Cocktail key={elem.id} {...elem}></Cocktail>))
    }

    </div>
    </section>
  )
}

export default CocktailList
