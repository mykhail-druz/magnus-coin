'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './EiffelFrame.module.scss';
import Magnus from '@/icons/Magnus.svg';

export const EiffelFrame: React.FC = () => {
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
          initial={{ x: 0, y: 0, rotate: -70 }}
          animate={
            isClicked
              ? {
                  x: [0, 65],
                  y: [0, -400],
                  rotate: [-70, -75],
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
