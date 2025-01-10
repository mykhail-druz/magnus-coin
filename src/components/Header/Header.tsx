import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import X from '@/icons/X.svg';
import Telegram from '@/icons/Telegram.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          $magnus
        </Link>

        <nav className={styles.navContainer}>
          <Link href="/" className={styles.socialBlock}>
            <X /> <p>Follow us</p>
          </Link>
          <Link href="/" className={styles.socialBlock}>
            <Telegram /> <p>Telegram</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};
