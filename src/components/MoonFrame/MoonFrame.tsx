'use client';
import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';

import styles from './MoonFrame.module.scss';
import Magnus from '@/icons/Magnus.svg';

export const MoonFrame: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Initial positions and rotation for the capybara
  const startX = 0;
  const startY = 0;
  const startRotate = -30;

  // Motion values for animation
  const x = useMotionValue(startX);
  const y = useMotionValue(startY);
  const rotate = useMotionValue(startRotate);

  const handleSectionClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    // Animation settings
    const duration = 2.5; // Animation duration in seconds
    const points = 120; // Number of animation steps for smoothness

    // Final positions and arc height for the trajectory
    const finalX = 1250;
    const finalY = 0;
    const arcHeight = 300;

    // Arrays to store values for x, y, and rotation during animation
    const xValues: number[] = [];
    const yValues: number[] = [];
    const rotateValues: number[] = [];

    for (let i = 0; i <= points; i++) {
      const t = i / points; // Progress from 0 to 1

      // Linear movement along x-axis
      const newX = 0 + (finalX - 0) * t;

      // Arc movement along y-axis
      const newY = 0 + (finalY - 0) * t;
      const arcOffset = -arcHeight * Math.sin(Math.PI * t); // Arc offset based on sine
      const totalY = newY + arcOffset;

      xValues.push(newX);
      yValues.push(totalY);

      // Smooth rotation from start to final angle
      rotateValues.push(startRotate + t * 85);
    }

    // Stepwise animation execution
    let currentStep = 0;
    const interval = setInterval(
      () => {
        if (currentStep > points) {
          clearInterval(interval);
          return;
        }
        x.set(xValues[currentStep]);
        y.set(yValues[currentStep]);
        rotate.set(rotateValues[currentStep]);
        currentStep++;
      },
      (duration * 1000) / points
    );
  };

  return (
    <section className={styles.section} onClick={handleSectionClick}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          animate={isClicked ? { y: 300, scale: 1.1 } : {}}
          initial={{ y: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/moon.webp"
              alt="Moon"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Capybara animation */}
          <motion.div
            className={styles.capybaraWrapper}
            style={{ x, y, rotate }}
          >
            <Magnus />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
