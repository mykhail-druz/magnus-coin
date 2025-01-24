import React from 'react';
import Link from 'next/link';

import styles from './CallToActionButton.module.scss';

interface CallToActionButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  title,
  href,
  onClick,
}) => {
  return href ? (
    <Link
      href={href}
      className={styles.btnBlock}
      target={'_blank'}
      rel="noopener noreferrer"
    >
      <p className={styles.btnTitle}>{title}</p>
    </Link>
  ) : (
    <div className={styles.btnBlock} onClick={onClick}>
      <p className={styles.btnTitle}>{title}</p>
    </div>
  );
};
