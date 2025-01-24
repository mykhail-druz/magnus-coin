'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './AboutMagnusFrame.module.scss';
import { CallToActionButton, ComingSoon } from '@/components';

export const AboutMagnusFrame: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const step4Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.section} ref={sectionRef}>
        <div className={styles.mainContainer}>
          <div className={styles.image}>
            <Image
              src="/images/about_magnus.webp"
              width={456}
              height={287}
              alt="About $magnus"
            />
          </div>

          <div className={styles.descBlock}>
            <motion.h2
              className={styles.descTitle}
              style={{ opacity: step1Opacity }}
            >
              $magnus
            </motion.h2>

            <motion.p
              className={styles.descText}
              style={{ opacity: step2Opacity }}
            >
              Adopted to be nothing more than a chill land mammal, magnus has
              proven to be gifted in{' '}
              <span className="text-primaryAccentText">#theclimb</span>. Follow
              him in his journey as he seeks higher highs. There is no
              structure, event, or market that can keep him from mooning.
            </motion.p>

            <motion.p
              className={styles.descText}
              style={{ opacity: step3Opacity }}
            >
              Launching soon in Jan 2025!
            </motion.p>

            <motion.div style={{ opacity: step4Opacity }}>
              <CallToActionButton
                title="Follow $magnus"
                onClick={handleOpenModal}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {isModalOpen && <ComingSoon onClose={handleCloseModal} />}
    </>
  );
};
