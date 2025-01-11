'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './AboutMagnusFrame.module.scss';
import { CallToActionButton } from '@/components';

export const AboutMagnusFrame: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleSectionClick = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <section className={styles.section} onClick={handleSectionClick}>
      <div className={styles.mainContainer}>
        {/* Изображение */}
        <div className={styles.image}>
          <Image
            src="/images/about_magnus.webp"
            width={456}
            height={287}
            alt="About $magnus"
          />
        </div>

        <div className={styles.descBlock}>
          {step >= 1 && (
            <motion.h2
              className={styles.descTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              $magnus
            </motion.h2>
          )}

          {step >= 2 && (
            <motion.p
              className={styles.descText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              Adopted to be nothing more than a chill land mammal, magnus has
              proven to be gifted in{' '}
              <span className="text-primaryAccentText">#theclimb</span>. follow
              him in his journey as he seeks higher highs. there is no
              structure, event, or market that can keep him from mooning.
            </motion.p>
          )}

          {step >= 2 && (
            <motion.p
              className={styles.descText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            >
              Launching soon in Jan 2025!
            </motion.p>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <CallToActionButton title={'Follow $magnus'} href={'/'} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
