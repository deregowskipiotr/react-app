import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {

  return (
    <div className={styles.hero}>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  )
}

export default About;