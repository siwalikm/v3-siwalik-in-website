import React from 'react';
import styles from './youtube-subscribe.module.scss';

const YoutubeSubscribe = () => (
  <div className={`${styles['youtube-subscribe']}`}>
    {/* <h3 className={styles['youtube-subscribe__title']}>Watch me on YouTube</h3> */}
      <a href='https://www.youtube.com/@siwalikm?sub_confirmation=1' target='_blank' rel='noopener noreferrer'>
        <input type="button" value="Watch Me on YouTube"/>
      </a>
  </div>
);

export default YoutubeSubscribe;
