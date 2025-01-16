'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './TokenomicsFrame.module.scss';

import { Card } from '@/components';

export const TokenomicsFrame: React.FC = () => {
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

  const handleSectionClick = () => {
    setIsClicked(true);
  };

  return (
    <section className={styles.section} onClick={handleSectionClick}>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>Tokenomics</h2>
        <div className={styles.cardsBlock}>
          <div className={styles.cardsTop}>
            <Card
              title={'$magnus'}
              description={'Named after Magnus, the chillest capybara pet.'}
            />
            <Card
              title={'1 Billion Supply'}
              description={'1 Billion $magnus tokens.'}
            />
          </div>
          <div className={styles.cardsBot}>
            <Card
              title={
                <>
                  <p>Chain</p>
                  <Image
                    src="/images/movement_tokenomics.webp"
                    width={255}
                    height={52}
                    alt="Tokenomics"
                  />
                </>
              }
              description={
                'The coin will be launched on the Movement chain for the ecosystem and its EVM compatibility.'
              }
            />
          </div>
        </div>
      </div>

      {/* 1 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '0', right: '-20vw' }
            : isLaptop
              ? { top: '0vh', right: '20vw' }
              : {
                  top: '0vh',
                  right: '32vw',
                }
        }
        initial={{
          scale: isMobile ? 0.4 : 0.9,
          rotate: 35,
          translateY: '0%',
          zIndex: 3,
        }}
        animate={
          isClicked
            ? { rotate: -15.45, translateY: '225%', zIndex: 2 }
            : {
                scale: isMobile ? 0.4 : 0.9,
                rotate: 35,
                translateY: '0%',
                zIndex: 3,
              }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={260}
          height={260}
          alt={'Magnus coin'}
        />
      </motion.div>
      {/* 2 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '33vh', left: '-30vw', zIndex: 10 }
            : isLaptop
              ? { top: '25vh', right: '5vw' }
              : {
                  top: '25vh',
                  right: '15vw',
                }
        }
        initial={{ scale: isMobile ? 0.7 : 1.5, rotate: -5, translateY: '0%' }}
        animate={
          isClicked
            ? {
                rotate: -35,
                translateY: isMobile ? '-125%' : '125%',
                translateX: isMobile ? '15%' : '50%',
              }
            : { scale: isMobile ? 0.7 : 1.5, rotate: -5, translateY: '0%' }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={200}
          height={200}
          alt={'Magnus coin'}
        />
      </motion.div>
      {/* 3 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '25vh', right: '-15vw', zIndex: 3 }
            : isLaptop
              ? { top: '50vh', right: '8vw' }
              : {
                  top: '43vh',
                  right: '18vw',
                }
        }
        initial={{ scale: isMobile ? 0.8 : 1.4, rotate: 15, translateY: 0 }}
        animate={
          isClicked
            ? { scale: isMobile ? 0.8 : 1.4, rotate: 45, translateY: '-245%' }
            : { scale: isMobile ? 0.8 : 1.4, rotate: 15, translateY: 0 }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={180}
          height={180}
          alt={'Magnus coin'}
        />
      </motion.div>

      {/* Blured coins */}
      {/* 1 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{
          top: '-15vh',
          left: '30vw',
          filter: 'blur(7px)',
        }}
        initial={{ scale: isMobile ? 0.7 : 1, rotate: 20, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: isMobile ? 0.7 : 1.2, rotate: -15, translateY: '100%' }
            : { scale: isMobile ? 0.7 : 1, rotate: 20, translateY: '0%' }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={300}
          height={300}
          alt={'Magnus coin'}
        />
      </motion.div>
      {/* 2 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{ top: '60vh', left: '5vw', filter: 'blur(7px)' }}
        initial={{ scale: isMobile ? 0.7 : 0.9, rotate: -10, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: isMobile ? 0.7 : 1, rotate: 10, translateY: '100%' }
            : { scale: isMobile ? 0.7 : 0.9, rotate: -10, translateY: '0%' }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={250}
          height={250}
          alt={'Magnus coin'}
        />
      </motion.div>
      {/* 3 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{
          bottom: '0vh',
          right: '50vw',
          filter: 'blur(7px)',
        }}
        initial={{ scale: isMobile ? 0.7 : 1, rotate: 15, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: isMobile ? 0.7 : 1.1, rotate: 0, translateY: '100%' }
            : { scale: isMobile ? 0.7 : 1, rotate: 15, translateY: '0%' }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={200}
          height={200}
          alt={'Magnus coin'}
        />
      </motion.div>
      {/* 4 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={
          isMobile
            ? {
                top: '30vh',
                right: '5vw',
                filter: 'blur(7px)',
              }
            : isLaptop
              ? {
                  top: '-5vh',
                  right: '0',
                  filter: 'blur(7px)',
                }
              : {
                  top: '10vh',
                  right: '5vw',
                  filter: 'blur(7px)',
                }
        }
        initial={{ scale: isMobile ? 0.7 : 1, rotate: 15, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: isMobile ? 0.7 : 1.1, rotate: -10, translateY: '100%' }
            : { scale: isMobile ? 0.7 : 1, rotate: 15, translateY: '0%' }
        }
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={200}
          height={200}
          alt={'Magnus coin'}
        />
      </motion.div>
    </section>
  );
};
