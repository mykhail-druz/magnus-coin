'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';

import styles from './MoonFrame.module.scss';

export const MoonFrame: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Motion values for animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(-30);

  useEffect(() => {
    if (!isVisible) return;

    const duration = isMobile ? 1.5 : 2.5;
    const points = 200;

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
  }, [isVisible, isMobile, isLaptop, x, y, rotate]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          animate={
            isVisible
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
          {/* Capybara */}
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
