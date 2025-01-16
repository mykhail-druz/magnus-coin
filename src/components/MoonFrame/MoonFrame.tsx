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

  // Motion values for animation
  const x = useMotionValue(0); // Default X position
  const y = useMotionValue(0);
  const rotate = useMotionValue(-30);

  const handleSectionClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    const duration = 2.5; // Animation duration in seconds
    const points = 200; // Number of animation steps for smoothness

    const finalX = isMobile ? 390 : isLaptop ? 810 : 1250;
    const finalY = isMobile ? -10 : 0;
    const arcHeight = isMobile ? 30 : isLaptop ? 170 : 290;

    const finalRotate = isMobile ? 50 : 85;

    const xValues: number[] = [];
    const yValues: number[] = [];
    const rotateValues: number[] = [];

    for (let i = 0; i <= points; i++) {
      const t = i / points;

      const newX = finalX * t;
      const newY = finalY * t;
      const arcOffset = -arcHeight * Math.sin(Math.PI * t);
      const totalY = newY + arcOffset;

      xValues.push(newX);
      yValues.push(totalY);
      rotateValues.push(-30 + t * finalRotate);
    }

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
              : { scale: 1 }
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
              x: 0,
              y: 0,
              rotate: -30,
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
