import { useEffect, useState } from "react";
import CocktailCard from "../component/CocktailCard";

function CocktailRandomPage () {

    const [randomCocktail, setRandomCocktail] = useState(null);

        // J'utilise mon hook useEffect pour exécuter du code à un certains moment du chargement du composant
        useEffect(() => {
            // Je déclare une fonctione asynchrone anonyme car c'est la synthaxe la plus récente pour faire un fetch d'API
            (async () => {
                // Je déclare une variable response avec un await car il y a un petit temps d'attente le temps que le fetch récupère les données
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);  
                // Je daclare une variable data avec un await qui va définir un temps d'attente et qui va devoir me retranscrire mon json en js
                const data = await response.json();   
                //  J'exécute la fonction de mon useState 
                setRandomCocktail(data.drinks[0]);
            // J'exécute la fonction asynchrone avec les doubles parenthèse
            })();
            // Le composant sera rendu une seule fois si le tableau est vide à la fin
        }, [])
       
        
   

    const handleButtonClick = () => {
        (async () => {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);  
            const data = await response.json();   
            setRandomCocktail(data.drinks[0]);
        })();
    }
    

    return (
        <main>
        {randomCocktail &&

            <CocktailCard cocktailToDisplay={randomCocktail} />
        
        }
        <button onClick={handleButtonClick}> J'ai soif, change de cocktail </button>
        </main>

    )
}

export default CocktailRandomPage;