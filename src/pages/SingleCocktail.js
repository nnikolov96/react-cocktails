import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';


export default function SingleCocktail() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() { 
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      
      if(data.drinks) { 
        console.log('here');
        const {strDrink: name, 
                strDrinkThumb: image, 
                strAlcoholic: info,
                strCategory: category, 
                strGlass: glass, 
                strInstructions: instructions,
                strIngredient1, strIngredient5, strIngredient2,strIngredient3 ,strIngredient4 } = data.drinks[0]
        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
        const newCocktail = { name, image, info, category, glass, instructions , ingredients };       
        setCocktail(newCocktail); 
      }
      else { 
        setCocktail(null);
      }
    }
    getCocktail();
  }, [id])
  if(cocktail) { 
    const { name, image, category, ingredients, glass, instructions, info } = cocktail;
    return (
      <section className='section cocktail-section'> 
        <Link to='/' className='btn btn-primary'>Back home</Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt = {name}/>
          <div className='drink-info'>
          <p>name: {name}</p>
          <p>category: {category}</p>
          <p>info: {info}</p>
          <p>glass: {glass}</p>
          <p>instructions: {instructions}</p>
          <p>ingredients: {ingredients.map((item, index) => {
            return item ? <span key={index}>{item}</span> : null  
          })}</p>
        </div>
        </div>

      </section>
    );
  }
  else { 
    return <div>Loading</div>;
  }

}
