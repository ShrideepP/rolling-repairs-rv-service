import styles from "@/styles/components/faq.module.scss";

import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.faq__header}>
        <span className={styles["faq__header-sub"]}>
          Got Questions? We’ve Got Answers
        </span>
        <h2 className={styles["faq__header-title"]}>
          Your Common Questions, Answered
        </h2>
      </div>

      <div className={styles.faq__list}>
        {faqs.map(({ id, question, answer }, index) => (
          <div key={id} className={styles.faq__item}>
            <input
              className={styles.faq__input}
              defaultChecked={!index}
              type="radio"
              name="faq"
              id={id}
            />

            <label htmlFor={id} className={styles.faq__question}>
              <h6>{question}</h6>
              <ChevronDown />
            </label>

            <div className={styles.faq__answer}>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    id: "1",
    question: "Where do you offer emergency roadside assistance?",
    answer:
      "We offer 24/7 emergency roadside assistance within a 100-mile radius of Boulder, Colorado. If you're unsure if you're in our service area, give us a call!",
  },
  {
    id: "2",
    question: "How soon can I get an appointment?",
    answer:
      "We aim to schedule appointments within 24 to 48 hours for non-emergency services. For emergencies, our team is available around the clock.",
  },
  {
    id: "3",
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free estimates for all repairs and services. Simply book online or give us a call to get started.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and cash. Unfortunately, we do not accept checks at this time.",
  },
  {
    id: "5",
    question: "Do your repairs come with a warranty?",
    answer:
      "Yes, we offer a 1-year warranty on all parts and labor. If any issues arise, we’ll fix them free of charge within the warranty period.",
  },
];
