import React from 'react';
import { TinyLetter } from 'react-tinyletter';
import styles from './newsletter.module.scss';

const NewsletterContainer = () => (
  <div className={`${styles['tinyletter']}`}>
    <h3 className={styles['tinyletter__title']}>Subscribe to Newsletter</h3>
    <p>
      Sign up to get an email whenever I write a post. No spams. Unsubscribe at{' '}
      <b>any</b> time.
    </p>
    <TinyLetter list="siwalik" className={styles['tinyletter__input']}>
      <input type="email" placeholder="eg. jane@gmail.com" />
      <input type="submit" value="Subscribe" />
    </TinyLetter>
  </div>
);

export default NewsletterContainer;
