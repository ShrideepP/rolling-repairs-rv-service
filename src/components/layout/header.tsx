"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "@/styles/components/layout/header.module.scss";

import { Facebook, Instagram, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  const toggleMenu = () => setMenu(!menu);

  return (
    <header className={styles.main__header}>
      <div className={styles.utility__bar}>
        <div>
          <a href="tel:+15559876543">
            Phone: <span>(555) 987-6543</span>
          </a>

          <hr />

          <a href="mailto:info@rollingrepairsrv.com">
            Email: <span>info@rollingrepairsrv.com</span>
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </a>

          <Button onClick={() => router.push("/book-appointment")}>
            Schedule Service
          </Button>
        </div>
      </div>

      <nav
        className={`${styles.navigation__menu} ${
          menu ? styles.expand : styles.collapse
        }`}
      >
        <div />

        <button type="button" onClick={toggleMenu}>
          {menu ? <X /> : <Menu />}
        </button>

        <div>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#why-choose-us" onClick={toggleMenu}>
            Why Choose Us
          </a>
          <a href="#testimonials" onClick={toggleMenu}>
            Testimonials
          </a>
          <a href="#about-us" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#faq" onClick={toggleMenu}>
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}
