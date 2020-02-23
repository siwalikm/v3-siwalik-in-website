// @flow strict
import React from 'react';
// import { TinyLetter } from 'react-tinyletter';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        {/* <div className="tinyLetter__container">
          <h3 className="tinyLetter__container__title">
            {' '}
            Subscribe to my Newsletter
          </h3>
          <p>
            Every 2 weeks I write you a letter about tech, personal growth and
            other things I wish I knew a year ago. No spams. Unsubscribe at{' '}
            <i>any</i> time.
          </p>
          <TinyLetter list="siwalik">
            <input type="email" placeholder="Your Email Address" />
            <input type="submit" value="Subscribe" />
          </TinyLetter>
        </div> */}
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
