import styles from "@/styles/components/cta.module.scss";

import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <h2>Get Your RV Back on the Road!</h2>
        <p>
          Don’t wait until it’s too late! Whether you need routine maintenance
          or emergency repairs, our team is here to help you every step of the
          way.
        </p>
      </div>

      <div className={styles["cta__button-container"]}>
        <Link href="/book-appointment">
          <Button variant="tertiary">Book Service Now</Button>
        </Link>
      </div>
    </section>
  );
}
