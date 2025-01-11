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
          <div>
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

      {/* Монетка 1 */}
      <motion.div
        className={styles.coin}
        style={{ top: '5vh', right: '33vw' }}
        initial={{ scale: 0.9, rotate: 45, translateY: '0%' }}
        animate={
          isClicked
            ? { rotate: -15.45, translateY: '200%' }
            : { scale: 0.9, rotate: 45, translateY: '0%' }
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

      {/* Монетка 2 */}
      <motion.div
        className={styles.coin}
        style={{ top: '5vh', right: '33vw' }}
        initial={{ scale: 1, rotate: 0, x: 0 }}
        animate={
          isClicked
            ? { scale: 1.2, rotate: -180, x: 100 }
            : { scale: 1, rotate: 0, x: 0 }
        }
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <Image
          src={'/images/coin.webp'}
          width={200}
          height={200}
          alt={'Magnus coin'}
        />
      </motion.div>

      {/* Монетка 3 */}
      <motion.div
        className={styles.coin}
        style={{ bottom: '10%', right: '15%' }}
        initial={{ scale: 1, rotate: 0, y: 0 }}
        animate={
          isClicked
            ? { scale: 0.8, rotate: 720, y: -100 }
            : { scale: 1, rotate: 0, y: 0 }
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
    </section>
  );
};
