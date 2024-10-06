import styles from "@/styles/components/hero.module.scss";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__content__header}>
          <h1 className={styles["hero__content__header-title"]}>
            RV Repair & Maintenance Boulder, CO
          </h1>
          <h4 className={styles["hero__content__header-sub"]}>
            Expert RV Repairs, Anytime, Anywhere
          </h4>
        </div>

        <Button variant="secondary">Schedule Service</Button>
      </div>
    </section>
  );
}
