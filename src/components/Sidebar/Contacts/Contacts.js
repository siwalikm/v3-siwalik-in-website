// @flow strict
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name, key) =>
        (!contacts[name] ? null : (
          <a
            className={styles['contacts__list-item-link']}
            href={getContactHref(name, contacts[name])}
            rel="noopener noreferrer"
            target="_blank"
            title={name}
            key={key}
          >
            <li className={styles['contacts__list-item']} key={name}>
              <Icon name={name} icon={getIcon(name)} />
            </li>
          </a>
        )),)}
    </ul>
  </div>
);

export default Contacts;
