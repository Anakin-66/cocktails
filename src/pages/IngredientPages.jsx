import { useEffect, useState } from "react";

function IngredientPage () {

    const [ingredients, setIngredients] = useState (null)

    useEffect(() => {

        (async () => {

            const ingregientsApiResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")

            const ingredientsApi = await ingregientsApiResponse.json();
            setIngredients(ingredientsApi.drinks);

        })();

    }, [])


    return (

        <main>
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

                <p> Les ingrédients ne chargent pas</p>
            )}
        </main>

    )
}

export default IngredientPage;