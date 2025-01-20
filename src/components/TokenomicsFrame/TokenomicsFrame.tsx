'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './TokenomicsFrame.module.scss';
import { Card } from '@/components';

export const TokenomicsFrame: React.FC = () => {
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
    offset: ['start end', 'end start'],
  });

  const coin1Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.4 : 0.9, isMobile ? 0.4 : 0.9]
  );
  const coin1Rotate = useTransform(scrollYProgress, [0, 1], [35, -15.45]);
  const coin1Y = useTransform(scrollYProgress, [0, 1], ['0%', '225%']);
  const coin1Z = useTransform(scrollYProgress, [0, 1], [3, 2]);

  const coin2Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.7 : 1.5, isMobile ? 0.7 : 1.5]
  );
  const coin2Rotate = useTransform(scrollYProgress, [0, 1], [-5, -35]);
  const coin2Y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', isMobile ? '-125%' : '125%']
  );
  const coin2X = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', isMobile ? '15%' : '50%']
  );

  const coin3Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.8 : 1.4, isMobile ? 0.8 : 1.4]
  );
  const coin3Rotate = useTransform(scrollYProgress, [0, 1], [15, 45]);
  const coin3Y = useTransform(scrollYProgress, [0, 1], ['0%', '-245%']);

  const bcoin1Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1.2]
  );
  const bcoin1Rotate = useTransform(scrollYProgress, [0, 1], [20, -15]);
  const bcoin1Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const bcoin2Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.7 : 0.9, isMobile ? 0.7 : 1]
  );
  const bcoin2Rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const bcoin2Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const bcoin3Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1.1]
  );
  const bcoin3Rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const bcoin3Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const bcoin4Scale = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0.7 : 1, isMobile ? 0.7 : 1.1]
  );
  const bcoin4Rotate = useTransform(scrollYProgress, [0, 1], [15, -10]);
  const bcoin4Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className={styles.section} ref={sectionRef}>
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

      {/* Coin 1 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '0', right: '-20vw' }
            : isLaptop
              ? { top: '0vh', right: '20vw' }
              : { top: '0vh', right: '32vw' }
        }
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: coin1Scale,
            rotate: coin1Rotate,
            y: coin1Y,
            zIndex: coin1Z,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={260}
            height={260}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Coin 2 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '33vh', left: '-30vw', zIndex: 10 }
            : isLaptop
              ? { top: '25vh', right: '5vw' }
              : { top: '25vh', right: '15vw' }
        }
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: coin2Scale,
            rotate: coin2Rotate,
            y: coin2Y,
            x: coin2X,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={200}
            height={200}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Coin 3 */}
      <motion.div
        className={styles.coin}
        style={
          isMobile
            ? { top: '25vh', right: '-15vw', zIndex: 3 }
            : isLaptop
              ? { top: '50vh', right: '8vw' }
              : { top: '43vh', right: '18vw' }
        }
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: coin3Scale,
            rotate: coin3Rotate,
            y: coin3Y,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={180}
            height={180}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Blurred Coin 1 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{
          top: '-15vh',
          left: '30vw',
          filter: 'blur(7px)',
        }}
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: bcoin1Scale,
            rotate: bcoin1Rotate,
            y: bcoin1Y,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={300}
            height={300}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Blurred Coin 2 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{
          top: '60vh',
          left: '5vw',
          filter: 'blur(7px)',
        }}
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: bcoin2Scale,
            rotate: bcoin2Rotate,
            y: bcoin2Y,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={250}
            height={250}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Blurred Coin 3 */}
      <motion.div
        className={`${styles.coin} ${styles.blurredCoin}`}
        style={{
          bottom: '0vh',
          right: '50vw',
          filter: 'blur(7px)',
        }}
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: bcoin3Scale,
            rotate: bcoin3Rotate,
            y: bcoin3Y,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={200}
            height={200}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>

      {/* Blurred Coin 4 */}
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
      >
        <motion.div
          style={{
            willChange: 'transform',
            scale: bcoin4Scale,
            rotate: bcoin4Rotate,
            y: bcoin4Y,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/images/coin.webp"
            width={200}
            height={200}
            alt="Magnus coin"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
