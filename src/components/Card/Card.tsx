import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  title: React.ReactNode;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
