import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setsearch,searchterm}=useGlobalContext();
    const inputelem= React.useRef();
  const getinput=(e)=>{
        setsearch(e.target.value);
  }

  useEffect(()=>{
    inputelem.current.focus();
  },[])
  console.log(searchterm);
  return (
    <section className='section search'>
     <form className='search-form'>
      <div className='form-control'>
          <label htmlFor='input'></label>
          <input  ref={inputelem} type='text' id='input' onChange={getinput} ></input>
      </div>

     </form>
    </section>
  )
}

export default SearchForm
