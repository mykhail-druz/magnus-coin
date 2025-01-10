import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './NextButton.module.scss';

import ArrowDown from '@/icons/ArrowDown.svg';

interface NextButtonProps {
  isClicked: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({ isClicked }) => {
  return (
    <motion.div className={styles.buttonBlock}>
      {isClicked && (
        <motion.div
          className={styles.desktopOnly}
          initial={{ x: 50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          style={{ pointerEvents: 'auto' }}
        >
          <Link href="/" passHref>
            <p>Next</p>
          </Link>
        </motion.div>
      )}
      <Link href="/" className={styles.mobileOnly}>
        <ArrowDown />
      </Link>
    </motion.div>
  );
};
