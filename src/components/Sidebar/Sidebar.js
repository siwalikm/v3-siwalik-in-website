// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import Copyright from '../Copyright';
import NewsletterContainer from '../Newsletter';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu, copyright } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <NewsletterContainer />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
