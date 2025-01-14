'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './MountainFrame.module.scss';
import { NextButton } from '@/components';

export const MountainFrame: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSectionClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <motion.section className={styles.section} onClick={handleSectionClick}>
      {/* Image wrapper */}
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          animate={
            isClicked
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

          {/* Flag inside imageMotion */}
          <div className={styles.flagWrapper}>
            <Image src="/images/flag.png" width={103} height={103} alt="Flag" />
          </div>
        </motion.div>

        {/* Capybara */}
        <motion.div
          className={styles.capybaraWrapper}
          animate={
            isClicked
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
            isClicked
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
          <NextButton isClicked={isClicked} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
