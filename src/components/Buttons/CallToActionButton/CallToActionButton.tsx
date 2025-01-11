import React from 'react';
import Link from 'next/link';

import styles from './CallToActionButton.module.scss';

interface CallToActionButtonProps {
  title: string;
  href: string;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  title,
  href,
}) => {
  return (
    <Link href={href} className={styles.btnBlock}>
      <p className={styles.btnTitle}>{title}</p>
    </Link>
  );
};
