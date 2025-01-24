'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

import X from '@/icons/X.svg';
import Telegram from '@/icons/Telegram.svg';
import { ComingSoon } from '@/components';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            $magnus
          </Link>

          <nav className={styles.navContainer}>
            <button onClick={openModal} className={styles.socialBlock}>
              <X /> <p>Follow us</p>
            </button>
            <button onClick={openModal} className={styles.socialBlock}>
              <Telegram /> <p>Telegram</p>
            </button>
          </nav>
        </div>
      </header>

      {isModalOpen && <ComingSoon onClose={closeModal} />}
    </>
  );
};
