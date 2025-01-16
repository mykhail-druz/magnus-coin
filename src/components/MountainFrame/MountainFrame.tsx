'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './MountainFrame.module.scss';
import { NextButton } from '@/components';

export const MountainFrame: React.FC = () => {
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
    <motion.section className={styles.section} ref={sectionRef}>
      {/* Image wrapper */}
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          animate={
            isVisible
              ? isMobile
                ? { translateX: '-25%' }
                : {
                    scale: 1.1,
                    translateY: isLaptop ? -150 : -250,
                  }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/mountains.webp"
              alt="Mountains"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Flag */}
          <div className={styles.flagWrapper}>
            <Image src="/images/flag.png" width={103} height={103} alt="Flag" />
          </div>
        </motion.div>

        {/* Capybara */}
        <motion.div
          className={styles.capybaraWrapper}
          animate={
            isVisible
              ? {
                  x: isMobile ? [0, 15] : isLaptop ? [0, 300] : [0, 350],
                  y: isMobile ? [0, -200] : isLaptop ? [0, -350] : [0, -485],
                  rotate: [0, -15],
                }
              : {}
          }
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <Image
            src="/images/magnus.png"
            width={103}
            height={103}
            alt="Magnus"
          />
        </motion.div>

        {/* Text and button */}
        <motion.div
          className={styles.descriptionWrapper}
          animate={
            isVisible
              ? {
                  y: isMobile ? 350 : isLaptop ? 200 : 250,
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.h1 className={styles.descriptionText}>
            Meet <span className="text-secondaryAccent">$magnus,</span>
            <br /> the Climbing Capybara.
          </motion.h1>
          <NextButton isClicked={isVisible} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
