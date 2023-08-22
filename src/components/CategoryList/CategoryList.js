import React, { useState } from 'react';
import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const [selectedCategory, setSelectedCategory] = useState(activeCat);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setActiveCat(cat);
  };

  const cats = categories.map((cat) => (
    <li
      key={cat}
      className={`${cat === selectedCategory ? styles.active : ''}`}
      onClick={() => handleCategoryClick(cat)}
    >
      {cat}
    </li>
  ));

  return (
    <ul className={styles.CategoryList}>
      {cats}
    </ul>
  );
}
