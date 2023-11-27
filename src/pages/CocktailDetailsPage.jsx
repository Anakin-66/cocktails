import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetailsPage () {

    const { id } = useParams();

    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {

        (async () => {

            const cocktailApiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
            const cocktailApi = await cocktailApiResponse.json();
    
            setCocktail(cocktailApi.drinks[0])
            console.log(cocktailApi);
        })();

    }, [])

    return (
        <main>
             {cocktail ? (
            <>
            {cocktail.map ((cocktail) => {
                return (
                    <article>
                        <h2> {cocktail.strDrink} </h2>
                        <img src={cocktail.strDrinkThumb} />
                        
                    </article>
                )

            })}
            </>
            
         ) : (

            <p>Cocktails en cours de chargement</p>

            )}
        </main>

    )
}

export default CocktailDetailsPage;