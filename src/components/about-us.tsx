import aboutUs from "@/assets/images/about-us.jpg";

import styles from "@/styles/components/about-us.module.scss";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className={styles.about__us}>
      <div className={styles.about__us__image}>
        <Image
          alt="A blue and white van is parked in a spacious warehouse."
          src={aboutUs}
          fill
        />
      </div>

      <div className={styles.about__us__content}>
        <div className={styles.about__us__content__header}>
          <span className={styles["about__us__content__header-sub"]}>
            Your Trusted RV Repair Experts Since 2015
          </span>
          <h2 className={styles["about__us__content__header-title"]}>
            Committed to Keeping You Rolling, Mile After Mile
          </h2>
        </div>

        <div className={styles.about__us__content__body}>
          <p>
            Since 2015, Rolling Repairs RV Service has provided fast, reliable
            RV repairs to Boulder and beyond. Our certified technicians ensure
            your RV is always road-ready.
          </p>
          <p>
            With 24/7 support and a customer-first approach, we handle
            everything from routine maintenance to emergency fixes. Join over
            1,000 satisfied customers and keep your journey rolling.
          </p>
        </div>
      </div>
    </section>
  );
}
