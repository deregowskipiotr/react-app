import PageTitle from "../PageTitle/PageTitle"
import styles from './Favorite.module.scss';


const Favorite = () => {

  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate
        elit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  )
}

export default Favorite;