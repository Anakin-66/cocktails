import { Link } from "react-router-dom";


function CocktailCard ({cocktailToDisplay }) {
    return (
        <article>
            <h2> {cocktailToDisplay.strDrink} </h2>
            <img src={cocktailToDisplay.strDrinkThumb} />
            <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>
            <p>Voir les détails des cocktails</p>
            </Link>
        </article>
    )
}

export default CocktailCard;