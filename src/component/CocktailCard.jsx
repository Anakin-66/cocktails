import { Link } from "react-router-dom";


function CocktailCard ({cocktailToDisplay }) {

    // Fonction de l'eventListener qui est asynchrone car les éléments ne seront affichés instantanement 
    // Je met 2 paramètres l'event et l'id de l'element
    const handleDeleteCocktail = async (event, id) => {
        // Je récupére l'id de l'élement cliqué
        // Je fais ensuite  un appel fetch DELETE
        // await fetch("https://www.monlien.com")
        // method :

    }


    return (
        <article>
            <h2> {cocktailToDisplay.strDrink} </h2>
            <img src={cocktailToDisplay.strDrinkThumb} />
            {/* idDrink = dans le tableau des données du json */}
            <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>
            <p>Voir les détails des cocktails</p>
            </Link>
            {/* J'appel en fonction fleché mon eventlistener car pour pouvoir passer le 2ème paramètre il faut passer le event avant   */}
            <button onClick={(event) => handleDeleteCocktail(event, cocktailToDisplay.idDrink)}>Supprimer le cocktail</button>
        </article>
    )
}

export default CocktailCard;