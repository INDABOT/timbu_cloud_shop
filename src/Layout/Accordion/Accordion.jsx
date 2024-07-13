import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionData = [
    {
      title: "Key Ingredients",
      content:
        "Details aChamomile, Peppermint, Lavender, Rose Petals, Hibiscus, Lemon Balm, Ginger, Raspberry Leaf, Licorice Root, Fennel, Dandelion Root, Red Clover, Echinacea, Nettle, Ashwagandhabout key ingredients.",
    },
    {
      title: "How to use",
      content:
        "Boil fresh, filtered water and pour it over 1 teaspoon of herbal tea per cup (8 oz). Steep for 5-7 minutes, then strain. Optionally, sweeten with honey or add lemon. Enjoy 1-3 cups daily for optimal benefits.",
    },
    {
      title: "Allergy Information",
      content:
        "This herbal tea is crafted with natural ingredients. However, if you have allergies to any herbs, please check the ingredient list carefully. Some ingredients, such as chamomile or licorice root, may cause reactions in individuals with specific allergies. If you are pregnant, nursing, or have any health conditions, consult your healthcare provider before use. Discontinue use immediately if any adverse reactions occur.",
    },
  ];

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.Atitle}>{item.title}</span>
            <span className={styles.plus}>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
