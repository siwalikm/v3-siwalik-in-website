import React from 'react';
import { TinyLetter } from 'react-tinyletter';
import styles from './newsletter.module.scss';

const emailDisclaimerStyle = {
  fontSize: '.8rem',
  color: 'var(--color-highlight)',
};

const NewsletterContainer = ({ year }) => (
  <div className={`${styles['tinyletter']}`}>
    <h3 className={styles['tinyletter__title']}> Subscribe to my Newsletter</h3>
    <p>
      Every few weeks<span style={emailDisclaimerStyle}>*</span> I write about
      tech, personal growth and other things I wish I knew a year ago.No
      spams.Unsubscribe at <i>any</i> time.
      <div style={emailDisclaimerStyle}>
        *well, its officially in my {year} goals to publish more, so 🤞
      </div>
    </p>
    <TinyLetter list="siwalik" className={styles['tinyletter__input']}>
      <input type="email" placeholder="eg. richard@piedpiper.com" />
      <input type="submit" value="Subscribe" />
    </TinyLetter>
  </div>
);

export default NewsletterContainer;
