'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './TokenomicsFrame.module.scss';

import { Card } from '@/components';

export const TokenomicsFrame: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

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
        style={{ top: '0vh', right: '32vw' }}
        initial={{ scale: 0.9, rotate: 35, translateY: '0%', zIndex: 3 }}
        animate={
          isClicked
            ? { rotate: -15.45, translateY: '225%', zIndex: 2 }
            : { scale: 0.9, rotate: 35, translateY: '0%', zIndex: 3 }
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
        style={{ top: '25vh', right: '15vw' }}
        initial={{ scale: 1.5, rotate: -5, translateY: '0%' }}
        animate={
          isClicked
            ? { rotate: -35, translateY: '125%', translateX: '50%' }
            : { scale: 1.5, rotate: -5, translateY: '0%' }
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
        style={{ top: '43vh', right: '18vw' }}
        initial={{ scale: 1.4, rotate: 15, translateY: 0 }}
        animate={
          isClicked
            ? { scale: 1.4, rotate: 45, translateY: '-245%' }
            : { scale: 1.4, rotate: 15, translateY: 0 }
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
        initial={{ scale: 1, rotate: 20, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: 1.2, rotate: -15, translateY: '100%' }
            : { scale: 1, rotate: 20, translateY: '0%' }
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
        style={{ top: '30vh', left: '5vw', filter: 'blur(7px)' }}
        initial={{ scale: 0.9, rotate: -10, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: 1, rotate: 10, translateY: '100%' }
            : { scale: 0.9, rotate: -10, translateY: '0%' }
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
        initial={{ scale: 1, rotate: 15, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: 1.1, rotate: 0, translateY: '100%' }
            : { scale: 1, rotate: 15, translateY: '0%' }
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
        style={{
          top: '10vh',
          right: '5vw',
          filter: 'blur(7px)',
        }}
        initial={{ scale: 1, rotate: 15, translateY: '0%' }}
        animate={
          isClicked
            ? { scale: 1.1, rotate: -10, translateY: '100%' }
            : { scale: 1, rotate: 15, translateY: '0%' }
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
