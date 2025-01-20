'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './MoonFrame.module.scss';

export const MoonFrame: React.FC = () => {
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const finalX = isMobile ? 390 : isLaptop ? 810 : 1250;
  const finalY = isMobile ? -10 : 0;
  const arcHeight = isMobile ? 30 : isLaptop ? 170 : 290;
  const finalRotate = isMobile ? 50 : 85;

  const x = useTransform(scrollYProgress, (t) => finalX * t);
  const y = useTransform(scrollYProgress, (t) => {
    const linearY = finalY * t;
    const arcOffset = -arcHeight * Math.sin(Math.PI * t);
    return linearY + arcOffset;
  });
  const rotate = useTransform(scrollYProgress, (t) => -30 + t * finalRotate);

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 0 : isLaptop ? 200 : 300]
  );
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isMobile ? 1 : isLaptop ? 1.05 : 1.1]
  );

  return (
    <section className={styles.section} ref={sectionRef}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          style={{
            y: backgroundY,
            scale: backgroundScale,
          }}
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

          <motion.div
            className={styles.capybaraWrapper}
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
