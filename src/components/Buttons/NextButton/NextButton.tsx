import React from 'react';
import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';

import styles from './NextButton.module.scss';

import ArrowDown from '@/icons/ArrowDown.svg';

interface NextButtonProps {
  x: MotionValue<string>;
  opacity: MotionValue<number>;
}

export const NextButton: React.FC<NextButtonProps> = ({ x, opacity }) => {
  return (
    <motion.div className={styles.buttonBlock} style={{ x, opacity }}>
      <div className={styles.desktopOnly}>
        <Link href="/#eiffel" passHref>
          <p>Next</p>
        </Link>
      </div>

      <Link href="/#eiffel" className={styles.mobileOnly} passHref>
        <ArrowDown />
      </Link>
    </motion.div>
  );
};
