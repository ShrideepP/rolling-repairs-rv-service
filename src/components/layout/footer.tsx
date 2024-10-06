import styles from "@/styles/components/layout/footer.module.scss";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <div />

        <div className={styles["footer__links-group"]}>
          <a href="#services" className={styles["footer__links-group-link"]}>
            Services
          </a>
          <a
            href="#why-choose-us"
            className={styles["footer__links-group-link"]}
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className={styles["footer__links-group-link"]}
          >
            Testimonials
          </a>
          <a href="#about-us" className={styles["footer__links-group-link"]}>
            About Us
          </a>
          <a href="#faq" className={styles["footer__links-group-link"]}>
            FAQ
          </a>
        </div>
      </div>

      <div className={styles.footer__legal}>
        <p className={styles["footer__legal-text"]}>
          © 2024 Rolling Repairs RV Service. All rights reserved.
        </p>

        <div className={styles["footer__legal-group"]}>
          <Link href="/" className={styles["footer__legal-group-link"]}>
            Privacy Policy
          </Link>
          <Link href="/" className={styles["footer__legal-group-link"]}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
