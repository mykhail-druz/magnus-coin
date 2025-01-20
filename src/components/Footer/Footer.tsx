'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './Footer.module.scss';
import Link from 'next/link';
import XBig from '@/icons/XBig.svg';
import TelegramBig from '@/icons/TelegramBig.svg';

export const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsLaptop(width > 768 && width <= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start'],
  });

  const imageStart = isMobile ? -10 : isLaptop ? -7 : -10;
  const imageEnd = isMobile ? -20 : isLaptop ? -12 : -15;

  const imageTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${imageStart}%`, `${imageEnd}%`]
  );

  const bottomStart = isMobile ? 30 : isLaptop ? 28 : 32;
  const bottomEnd = isMobile ? 60 : isLaptop ? 55 : 60;
  const capyBottom = useTransform(
    scrollYProgress,
    [0, 1],
    [`${bottomStart}%`, `${bottomEnd}%`]
  );

  const xStart = isMobile ? -5 : isLaptop ? -7 : -10;
  const xEnd = isMobile ? 150 : isLaptop ? 200 : 250;
  const capyX = useTransform(
    scrollYProgress,
    [0, 1],
    [`${xStart}%`, `${xEnd}%`]
  );

  return (
    <footer className={styles.section} ref={sectionRef}>
      <motion.div
        className={styles.image}
        style={{
          y: imageTranslate,
          willChange: 'transform',
        }}
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
        style={{
          bottom: capyBottom,
          x: capyX,
          rotate: -15,
          willChange: 'transform',
        }}
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
