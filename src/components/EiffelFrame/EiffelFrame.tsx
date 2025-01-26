'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './EiffelFrame.module.scss';

export const EiffelFrame: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const xCapybara = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [30, 50] : isLaptop ? [10, 40] : [10, 65]
  );
  const yCapybara = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -200] : isLaptop ? [0, -300] : [0, -400]
  );
  const rotateCapybara = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-50, -75] : isLaptop ? [-65, -75] : [-70, -75]
  );

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
    <motion.section id={'eiffel'} className={styles.section} ref={sectionRef}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          style={{
            y: yImage,
          }}
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
