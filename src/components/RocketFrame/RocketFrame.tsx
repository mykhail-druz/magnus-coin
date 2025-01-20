'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './RocketFrame.module.scss';

export const RocketFrame: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const yCapybara = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -400] : isLaptop ? [0, -250] : [0, -350]
  );
  const xCapybara = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const rotateCapybara = useTransform(scrollYProgress, [0, 1], [-90, -90]);

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 200] : isLaptop ? [0, 300] : [0, 350]
  );

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

  return (
    <motion.section className={styles.section} ref={sectionRef}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          style={{
            y: yImage,
          }}
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
          style={{
            x: xCapybara,
            y: yCapybara,
            rotate: rotateCapybara,
          }}
        >
          <Image
            src="/images/magnus.png"
            width={103}
            height={103}
            alt="Magnus"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
