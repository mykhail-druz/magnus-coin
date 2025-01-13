'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './Footer.module.scss';
import Link from 'next/link';
import XBig from '@/icons/XBig.svg';
import TelegramBig from '@/icons/TelegramBig.svg';

export const Footer: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSectionClick = () => {
    setIsClicked(true);
  };

  return (
    <footer className={styles.section} onClick={handleSectionClick}>
      <motion.div
        className={styles.image}
        initial={{ translateY: '-10%' }}
        animate={isClicked ? { translateY: '-15%' } : { translateY: '-10%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src="/images/footer.webp"
          fill
          style={{ objectFit: 'cover' }}
          alt="Mountains"
        />
      </motion.div>

      <motion.div
        className={styles.capybara}
        initial={{ bottom: '32%', translateX: '-10%', rotate: -15 }}
        animate={
          isClicked
            ? { bottom: '62%', translateX: '250%' }
            : { bottom: '32%', translateX: '-10%', rotate: -15 }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src="/images/magnus.png"
          width={103}
          height={103}
          alt="Capybara Magnus"
        />
      </motion.div>
      <div className={styles.descWrapper}>
        <div className={styles.descContainer}>
          <h3 className={styles.descTitle}>Keep on Climbing</h3>
          <p className={styles.descText}>© Capylabs 2024 </p>
        </div>
        <div className={styles.socialContainer}>
          <Link href="/" className={styles.socialBlock}>
            <XBig /> <p className={styles.socialText}>Follow us</p>
          </Link>
          <Link href="/" className={styles.socialBlock}>
            <TelegramBig /> <p className={styles.socialText}>Telegram</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
