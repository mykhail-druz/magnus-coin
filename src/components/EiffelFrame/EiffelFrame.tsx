'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './EiffelFrame.module.scss';

export const EiffelFrame: React.FC = () => {
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
    <section className={styles.section} onClick={handleSectionClick}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          animate={
            isClicked
              ? {
                  y: 150,
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/eiffel.webp"
              alt="Eiffel tower"
              fill
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>
        <motion.div
          className={styles.capybaraWrapper}
          initial={{
            x: isMobile ? -50 : isLaptop ? 10 : 0,
            y: isMobile ? -50 : isLaptop ? -20 : 0,
            rotate: isMobile ? -50 : isLaptop ? -75 : -70,
          }}
          animate={
            isClicked
              ? {
                  x: isMobile ? [0, 65] : isLaptop ? [0, 40] : [0, 65],
                  y: isMobile ? [0, -250] : isLaptop ? [0, -300] : [0, -400],
                  rotate: isMobile
                    ? [-60, -75]
                    : isLaptop
                      ? [-65, -75]
                      : [-70, -75],
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/magnus.png"
            width={103}
            height={103}
            alt="Magnus"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
