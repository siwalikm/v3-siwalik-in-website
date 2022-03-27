import React from 'react';
import { TinyLetter } from 'react-tinyletter';
import styles from './newsletter.module.scss';

const NewsletterContainer = () => (
  <div className={`${styles['tinyletter']}`}>
    <h3 className={styles['tinyletter__title']}> Subscribe to my Newsletter</h3>
    <p>
      Every two weeks I write about tech, personal growth and other things I
      wish I knew a year ago.No spams. Unsubscribe at <i>any</i> time.
    </p>
    <TinyLetter list="siwalik" className={styles['tinyletter__input']}>
      <input type="email" placeholder="eg. richard@piedpiper.com" />
      <input type="submit" value="Subscribe" />
    </TinyLetter>
  </div>
);

export default NewsletterContainer;