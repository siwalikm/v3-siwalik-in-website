// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    {copyright}
    {/* dangerouslySetInnerHTML={ __html: { ...copyright } } */}
  </div>
);

export default Copyright;
