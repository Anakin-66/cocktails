import { useState } from "react";

function CocktailPage () {

    // Déclaration du hook useState propre à REACT qui évitera le composant de s'éxécuter plusieurs fois, je déclare une variable cocktails et une fonction setCocktails
    const [cocktails, setCocktails] = useState(null);
    
    if (!cocktails) {

        // Je déclare mon fetch qui va capturer le lien de l'api
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    // Response donne un temps d'attente jusqu'à ce que les données soit collectées
    .then((response) => {
     return   response.json()
    })
    // Dès que les données sont récupérées elles sont ensuite affichées dans le console log
    .then((data) => {
        // Je récupère avec ma fonction setCocktails la variable data qui a le tableau et ensuite je met .drinks pour accéder au tableau car le json a été mal foutu 
        setCocktails(data.drinks);
        console.log(data.drinks);
    })
        
    }
    

    return (
        <main>
            {/* Est-ce que cocktail contient quelque chose ? */}
        {cocktails ? (
            <>
            {/* Je fais un array map pour récupérer les cocktails grâce à la variable cocktails de useState */}
            {cocktails.map ((cocktail) => {
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


export default CocktailPage