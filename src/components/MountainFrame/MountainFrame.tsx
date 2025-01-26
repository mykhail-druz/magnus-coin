'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './MountainFrame.module.scss';
import { NextButton } from '@/components';

export const MountainFrame: React.FC = () => {
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center center', 'end start'],
  });

  const finalMobileImageX = '-25%';
  const finalLaptopImageScale = 1.1;
  const finalLaptopImageY = -150;
  const finalDesktopImageY = -250;

  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', finalMobileImageX]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, finalLaptopImageScale]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLaptop ? finalLaptopImageY : finalDesktopImageY]
  );

  const capyMobileX = 15;
  const capyMobileY = -200;
  const capyLaptopX = 300;
  const capyLaptopY = -350;
  const capyDesktopX = 350;
  const capyDesktopY = -450;

  const capyX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? capyMobileX : isLaptop ? capyLaptopX : capyDesktopX]
  );
  const capyY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? capyMobileY : isLaptop ? capyLaptopY : capyDesktopY]
  );
  const capyRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const finalMobileTextY = 350;
  const finalLaptopTextY = 200;
  const finalDesktopTextY = 550;

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      isMobile
        ? finalMobileTextY
        : isLaptop
          ? finalLaptopTextY
          : finalDesktopTextY,
    ]
  );

  const buttonX = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const buttonOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section className={styles.section} ref={sectionRef}>
      <motion.div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageMotion}
          style={{
            willChange: 'transform',

            x: isMobile ? imageX : 0,
            scale: isMobile ? 1 : imageScale,
            y: isMobile ? 0 : imageY,
          }}
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

          <div className={styles.flagWrapper}>
            <Image src="/images/flag.png" width={61} height={81} alt="Flag" />
          </div>
        </motion.div>

        <motion.div
          className={styles.capybaraWrapper}
          style={{
            willChange: 'transform',
            x: capyX,
            y: capyY,
            rotate: capyRotate,
          }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <Image
            src="/images/magnus.png"
            width={103}
            height={103}
            alt="Magnus"
          />
        </motion.div>

        <motion.div
          className={styles.descriptionWrapper}
          style={{
            willChange: 'transform',
            y: textY,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.h1 className={styles.descriptionText}>
            Meet <span className="text-secondaryAccent">$magnus</span>,
            <br /> the Climbing Capybara.
          </motion.h1>
          <NextButton x={buttonX} opacity={buttonOpacity} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
