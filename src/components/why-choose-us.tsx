import whyChooseUs from "@/assets/images/why-choose-us.jpg";

import styles from "@/styles/components/why-choose-us.module.scss";

import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.why}>
      <div className={styles.why__image}>
        <Image
          alt="A blue and white van is parked in a spacious warehouse."
          src={whyChooseUs}
          fill
        />
      </div>

      <div className={styles.why__content}>
        <div className={styles.why__header}>
          <span className={styles["why__header-sub"]}>
            Why Choose Rolling Repairs?
          </span>
          <h2 className={styles["why__header-title"]}>
            Reliable, Professional RV Services at Your Fingertips
          </h2>
        </div>

        <div className={styles.why__features}>
          {featureList.map(({ title, description }, index) => (
            <div className={styles["why__features-item"]} key={index}>
              <div className={styles["why__features-icon"]}>
                <div className={styles["why__features-icon-inner"]}>
                  <Check />
                </div>
              </div>

              <div className={styles["why__features-text"]}>
                <h6 className={styles["why__features-text-title"]}>{title}</h6>
                <p className={styles["why__features-text-description"]}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const featureList = [
  {
    title: "Fast & Reliable Service",
    description: "We work quickly and efficiently to get you back on the road.",
  },
  {
    title: "24/7 Emergency Support",
    description:
      "Help is always available, day or night, with our emergency service.",
  },
  {
    title: "Certified Technicians",
    description: "Our skilled team ensures top-quality repairs every time.",
  },
  {
    title: "Over 1,000 Satisfied Customers",
    description: "Join the community of RV owners who trust our expertise.",
  },
];
