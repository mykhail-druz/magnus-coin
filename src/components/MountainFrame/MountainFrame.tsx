'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './MountainFrame.module.scss';

import Flag from '@/icons/Flag.svg';
import Magnus from '@/icons/Magnus.svg';
import { NextButton } from '@/components';

export const MountainFrame: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

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
              ? {
                  scale: 1.2,
                  translateY: -250,
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
            <Flag />
          </div>
        </motion.div>

        {/* Capybara */}
        <motion.div
          className={styles.capybaraWrapper}
          animate={
            isClicked
              ? {
                  x: [0, 350],
                  y: [0, -550],
                  rotate: [0, -15],
                }
              : {}
          }
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <Magnus />
        </motion.div>
        {/* Text and button */}
        <motion.div
          className={styles.descriptionWrapper}
          animate={
            isClicked
              ? {
                  y: 250,
                }
              : {}
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.p className={styles.descriptionText}>
            Meet <span className="text-secondaryAccent">$magnus,</span>
            <br /> the Climbing Capybara.
          </motion.p>
          <NextButton isClicked={isClicked} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
