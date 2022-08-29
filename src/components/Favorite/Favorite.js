import PageTitle from "../PageTitle/PageTitle"
import styles from './Favorite.module.scss';
import { getFavoriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";
import { useSelector } from "react-redux/";



const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return ( 
      <div>
          <PageTitle>Favorite</PageTitle>
          <p className={styles.subtitle}>THERE IS NO CARD !!</p>
      </div>
    );
  };

  return(
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.cardsWrapper}>
        <ul className={styles.cards}>
        	{ favoriteCards.map(card => <Card key={card.id} {...card} />) }
        </ul>
      </article>
    </div>
  )

}

export default Favorite;