'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';

import styles from './MoonFrame.module.scss';

export const MoonFrame: React.FC = () => {
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
    const points = 200; // Number of animation steps for smoothness

    // Final positions and arc height for the trajectory
    const finalX = isMobile ? 200 : isLaptop ? 810 : 1250;
    const finalY = isMobile ? 0 : isLaptop ? 0 : 0;
    const arcHeight = isMobile ? 50 : isLaptop ? 170 : 290;

    // Arrays to store values for x, y, and rotation during animation
    const xValues: number[] = [];
    const yValues: number[] = [];
    const rotateValues: number[] = [];

    for (let i = 0; i <= points; i++) {
      const t = i / points; // Progress from 0 to 1

      // Linear movement along x-axis
      const newX = finalX * t;

      // Arc movement along y-axis
      const newY = finalY * t;
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
          animate={
            isClicked
              ? {
                  y: isMobile ? 0 : isLaptop ? 200 : 300,
                  scale: isMobile ? 1 : isLaptop ? 1.05 : 1.1,
                }
              : { scale: isMobile ? 1 : 1 }
          }
          initial={{ y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
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
            initial={{
              top: isMobile ? '20%' : isLaptop ? '18%' : '17%',
              left: isMobile ? '-100%' : isLaptop ? '14%' : '14.5%',
            }}
            style={{ x, y, rotate }}
          >
            <Image
              src="/images/magnus.png"
              width={103}
              height={103}
              alt="Magnus"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
