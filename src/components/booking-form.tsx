import styles from "@/styles/components/booking-form.module.scss";

import { Button } from "./ui/button";

export default function BookingForm() {
  return (
    <section className={styles.booking__form}>
      <div className={styles.booking__form__content}>
        <div className={styles.booking__form__header}>
          <span className={styles["booking__form__header-sub"]}>
            Get Your RV Fixed Today
          </span>
          <h2 className={styles["booking__form__header-title"]}>
            Fast and easy service booking
          </h2>
        </div>

        <form className={styles.booking__form__container}>
          <div className={styles.booking__form__container__fields}>
            <div className={styles.booking__form__container__group}>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Service Type" />

            <div className={styles.booking__form__container__group}>
              <input type="text" placeholder="Preferred Date" />
              <input type="text" placeholder="Preferred Time" />
            </div>
          </div>

          <Button>Book Appointment</Button>
        </form>
      </div>
    </section>
  );
}
