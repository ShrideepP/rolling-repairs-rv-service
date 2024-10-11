import styles from "@/styles/components/roadside-assistance.module.scss";

import { Button } from "./ui/button";

export default function RoadsideAssistance() {
  return (
    <section className={styles.roadside__assistance}>
      <div className={styles.roadside__assistance__content}>
        <h2>Stuck? We’ve Got You Covered!</h2>
        <p>
          Available 24/7, our emergency roadside assistance gets you back on the
          road fast. From flat tires to engine trouble, we’re just a call away.
        </p>
      </div>
      <div className={styles["roadside__assistance__button-container"]}>
        <a href="tel:+15559876543">
          <Button variant="tertiary">Get Help Now</Button>
        </a>
      </div>
    </section>
  );
}
