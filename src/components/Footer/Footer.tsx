'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './Footer.module.scss';
import Link from 'next/link';
import XBig from '@/icons/XBig.svg';
import TelegramBig from '@/icons/TelegramBig.svg';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsLaptop(width > 768 && width <= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.8,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <footer className={styles.section} ref={sectionRef}>
      <motion.div
        className={styles.image}
        initial={{
          translateY: isMobile ? '-5%' : isLaptop ? '-7%' : '-10%',
        }}
        animate={
          isVisible
            ? { translateY: isMobile ? '-20%' : isLaptop ? '-12%' : '-15%' }
            : {}
        }
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
        initial={{
          bottom: isMobile ? '30%' : isLaptop ? '28%' : '32%',
          translateX: isMobile ? '-5%' : isLaptop ? '-7%' : '-10%',
          rotate: -15,
        }}
        animate={
          isVisible
            ? {
                bottom: isMobile ? '60%' : isLaptop ? '55%' : '62%',
                translateX: isMobile ? '150%' : isLaptop ? '200%' : '250%',
              }
            : {}
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
