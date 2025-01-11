'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './RocketFrame.module.scss';
import Image from 'next/image';
import Magnus from '@/icons/Magnus.svg';

export const RocketFrame: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

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
                  y: 350,
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/rocket.png"
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
          initial={{ x: 0, y: 0, rotate: -90 }}
          animate={
            isClicked
              ? {
                  x: [0, 0],
                  y: [0, -350],
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Magnus />
        </motion.div>
      </motion.div>
    </section>
  );
};
