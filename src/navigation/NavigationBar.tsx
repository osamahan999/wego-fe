import Logo from "../components/logo/Logo";
import VerticalSpacer from "../components/spacers/vertical/VerticalSpacer";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBarContainer}>
      <Logo />
      <VerticalSpacer />
    </div>
  );
};

export default NavigationBar;
