import React, { useRef, useEffect } from "react";


export default function SearchForm( { setSearchTerm } ) {

  const searchValue  = useRef('');
  console.log(searchValue);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <section className='section'>
      <h2 className='section-title'>
        <form className='form search-form' onSubmit = { handleSubmit } >
          <div className = 'form-control'>
            <label htmlFor='name'>
              Search your favourite cocktail
            </label>
            <input type='text' name='name' id='name' onChange = { searchCocktail } ref= { searchValue } />
          </div>
        </form>
      </h2>
    </section>
  );
}
