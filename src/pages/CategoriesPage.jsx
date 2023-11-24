import { useEffect, useState } from "react";

function CategoriesPage () {

    const [categories, setCategories] = useState (null);

    useEffect (() => {

        (async () => {
           
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");  
            
            const data = await response.json();   
            console.log(data);
            setCategories(data.drinks);
      
        })();

    }, [])

    return (
        <main>
        {categories && 
        <div>
            {categories.map ((category) => {
                return (
                    <p> {category.strCategory} </p>
                );
            })}
        </div>
        
        }
        </main>
    );
}

export default CategoriesPage;