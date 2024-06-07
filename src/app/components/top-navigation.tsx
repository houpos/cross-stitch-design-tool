import Link from "next/link";
import CreateDesignButton from "./create-design-button";
import styles from "./top-navigation.module.scss";

export default function TopNavigation() {
  return (
    <>
      <nav className={`${styles.navigationContainer} no-print`}>
        <div>
          <Link href="/" aria-label="navigate to account home page">
            <img alt="" src="/" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.profileContainer}>
          <CreateDesignButton />
          <img alt="" src="/" />
        </div>
      </nav>
    </>
  );
}
