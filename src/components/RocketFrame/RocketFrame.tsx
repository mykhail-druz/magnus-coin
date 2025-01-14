'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './RocketFrame.module.scss';

export const RocketFrame: React.FC = () => {
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
                  y: isMobile ? 200 : isLaptop ? 300 : 350,
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/rocket.webp"
              alt="Rocket"
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
            x: isMobile ? 0 : isLaptop ? -10 : 0,
            y: isMobile ? -50 : isLaptop ? -30 : 0,
            rotate: -90,
          }}
          animate={
            isClicked
              ? {
                  x: isMobile ? [0, 0] : isLaptop ? [0, 0] : [0, 0],
                  y: isMobile ? [0, -400] : isLaptop ? [0, -250] : [0, -350],
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
