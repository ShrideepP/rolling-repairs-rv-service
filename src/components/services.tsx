import engine from "@/assets/icons/engine.svg";
import electricity from "@/assets/icons/electricity.svg";
import roofing from "@/assets/icons/roofing.svg";
import design from "@/assets/icons/design.svg";
import tire from "@/assets/icons/tire.svg";
import last24Hours from "@/assets/icons/last-24-hours.svg";

import styles from "@/styles/components/services.module.scss";

import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.services__header}>
        <span className={styles["services__header-sub"]}>
          Comprehensive RV Services
        </span>
        <h2 className={styles["services__header-title"]}>
          Expert Solutions for Every Part of Your RV
        </h2>
      </div>

      <div className={styles.services__list}>
        {serviceList.map(({ title, description, icon }, index) => (
          <div className={styles["services__list-item"]} key={index}>
            <div className={styles["services__list-item-icon"]}>
              <Image src={icon} alt={title} width={24} height={24} />
            </div>
            <div className={styles["services__list-item-details"]}>
              <h4 className={styles["services__list-item-details-title"]}>
                {title}
              </h4>
              <p className={styles["services__list-item-details-description"]}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const serviceList = [
  {
    title: "Engine Check",
    description:
      "We run quick, expert diagnostics to keep your RV engine running smoothly.",
    icon: engine,
  },
  {
    title: "Electrical Fixes",
    description:
      "Resolving all electrical issues, so your RV systems work perfectly on the road.",
    icon: electricity,
  },
  {
    title: "Roof Fixes",
    description:
      "We repair leaks and prevent water damage, keeping your RV dry and protected.",
    icon: roofing,
  },
  {
    title: "Interior Upgrades",
    description:
      "Upgrade your RV’s interior for a more comfortable and stylish travel experience.",
    icon: design,
  },
  {
    title: "Tire Change",
    description:
      "Fast, reliable tire replacement to ensure a safe ride on every trip.",
    icon: tire,
  },
  {
    title: "Roadside Help",
    description:
      "24/7 assistance for breakdowns, tire issues, and more—just a call away.",
    icon: last24Hours,
  },
];
