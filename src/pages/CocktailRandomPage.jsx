import { useState } from "react";

function CocktailRandomPage () {

    const [randomCocktail, setRandomCocktail] = useState(null);

    // Je déclare un boolean pour que la fonction ne s'exécute qu'une fois pour éviter une boucle infinie et faire péter le serveur
    if (!randomCocktail) {
        // Je déclare une fonctione asynchrone anonyme car c'est la synthaxe la plus récente pour faire un fetch d'API
        (async () => {
            // Je déclare une variable response avec un await car il y a un petit temps d'attente le temps que le fetch récupère les données
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);  
            // Grâce à la promesse du dessus je déclare une variable data qui va devoir me retranscrire mon json en js
            const data = await response.json();   
            //  J'exécute la fonction de mon useState 
            setRandomCocktail(data.drinks[0]);
        // J'exécute la fonction asynchrone avec les doubles parenthèse
        })();
        
    }
    

    return (
        <main>
        {randomCocktail &&

            <article>
                <h2> {randomCocktail.strDrink} </h2>
            </article>
        
        }
        </main>

    )
}

export default CocktailRandomPage;