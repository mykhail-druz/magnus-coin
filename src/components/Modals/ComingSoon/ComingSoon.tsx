import React from 'react';
import styles from './ComingSoon.module.scss';

interface ComingSoonProps {
  onClose: () => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ onClose }) => {
  return (
    <div className={styles.modalWrapper} onClick={onClose}>
      <div className={styles.modalBlock} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Coming Soon!</h2>
        <p className={styles.modalText}>
          Stay tuned for updates about $magnus.
        </p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
