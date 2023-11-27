import { useEffect, useState } from "react";

function IngredientPage () {

    // Déclaration de mon hook useState
    const [ingredients, setIngredients] = useState (null)

    // Pour que le fetch soit executé qu'une fois
    useEffect(() => {
        // Déclaration de ma fonction asynchrone anonyme, il y a plusieurs façon de le faire mais cette synthaxe est la plus récente
        (async () => {
            // Déclaration d'une variable pour récupérer l'API public grâce à un fetch
            const ingregientsApiResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            // Conversion du json en js
            const ingredientsApi = await ingregientsApiResponse.json();
            // Execution de la fonction de mon useState
            setIngredients(ingredientsApi.drinks);
            // Execution de la fonction asynchrone grâce aux doubles parenthèses
        })();
        // Le composant sera rendue une fois grâce à ce tableau vide
    }, [])


    return (

        <main>
            {/* Si les ingredients s'affichent alors grâce map, il me retournera les ingredients */}
            {ingredients ? (
                <section>
                    {ingredients.map ((ingredient) => {
                        return (
                            <article>
                                {ingredient.strIngredient1}
                            </article>
                        )
                    })}
                </section>
            ) : (
                // Si les ingredients s'affichent pas alors ce message sera affichée
                <p> Les ingrédients ne chargent pas</p>
            )}
        </main>

    )
}

export default IngredientPage;