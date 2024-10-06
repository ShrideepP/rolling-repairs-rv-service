"use client";

import sarahP from "@/assets/images/sarah-p.jpg";
import johnD from "@/assets/images/john-d.jpg";
import emmaL from "@/assets/images/emma-l.jpg";

import useEmblaCarousel from "embla-carousel-react";

import styles from "@/styles/components/testimonials.module.scss";

import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonials__header}>
        <span className={styles["testimonials__header-sub"]}>
          What Our Customers Say
        </span>
        <h2 className={styles["testimonials__header-title"]}>
          Trusted by RV Owners
        </h2>
      </div>

      <div ref={emblaRef} className={styles.testimonials__carousel}>
        <div className={styles["testimonials__carousel-wrapper"]}>
          {testimonialList.map(({ text, avatar, altText, author }, _) => (
            <div key={_} className={styles["testimonials__carousel-slide"]}>
              <Quote className={styles["quote-icon"]} />
              <p>{text}</p>
              <div className={styles["testimonials__person"]}>
                <div className={styles["testimonial-image"]}>
                  <Image alt={altText} src={avatar} fill />
                </div>
                <h6>{author}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonialList = [
  {
    text: "Rolling Repairs saved our trip! The team was quick, professional, and got us back on the road in no time.",
    avatar: sarahP,
    altText:
      "A girl in a floral dress and sunglasses stands on a bridge, basking in the sun.",
    author: "— Sarah P., Colorado",
  },
  {
    text: "The service was top-notch, and the technicians really know their stuff. I wouldn’t trust anyone else with my RV.",
    avatar: johnD,
    altText: "A confident bald man with a beard stands before a vibrant wall.",
    author: "— John D., Arizona",
  },
  {
    text: "I had an electrical issue on the road, and their emergency service was a lifesaver. Highly recommend!",
    avatar: emmaL,
    altText:
      "A woman in a dress stands by a van, creating a stylish outdoor scene.",
    author: "— Emma L., Nevada",
  },
];
