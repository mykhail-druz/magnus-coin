import React from 'react';
import Image from 'next/image';

import styles from './MeetMagnusFrame.module.scss';
import { CallToActionButton } from '@/components';

export const MeetMagnusFrame: React.FC = () => {
  return (
    <section id={'meet'} className={styles.section}>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>
          Meet Real <span className="text-primaryAccentText">$magnus</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src="/images/meet_magnus.webp"
              width={420}
              height={560}
              alt="Meet Real $magnus"
            />
          </div>
          <div className={styles.descBlock}>
            <h3 className={styles.descTitle}>Magnus the Capybara</h3>
            <p className={styles.descText}>
              Magnus is a 7-month-old capybara pet who lives in Bangkok,
              Thailand. He has a café and a climbing gym business. He loves to
              take a shower twice a day. He is the oldest boy out of 6 brothers
              and sisters!
            </p>
            <div>
              <h4 className={styles.descSubtitle}>Personality:</h4>
              <p className={styles.descText}>
                He loves being the center of attention and is happiest when he’s
                close to someone. Big on snuggles and endless belly rubs, Magnus
                just can’t get enough love!
              </p>
            </div>
            <div>
              <h4 className={styles.descSubtitle}>Favourite treat:</h4>
              <p className={styles.descText}>🍎 (but in moderation!)</p>
            </div>
            <div>
              <CallToActionButton
                title={'Watch Magnus’ Streaming'}
                href={'https://capytube.xyz'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
