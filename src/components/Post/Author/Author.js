// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  date: string,
  postSlug: string,
};

const Author = ({ date, postSlug }: Props) => {
  const { author } = useSiteMetadata();
  const postURL = `https://github.com/siwalikm/diary/blob/master/content${postSlug}.md`;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const dateString = formattedDate ? `on ${formattedDate}` : '';

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        Published {dateString} by{' '}
        <a
          // className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong>
        </a>
        . You can{' '}
        <a
          // className={styles['author__bio-twitter']}
          href={postURL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>edit this page</strong>
        </a>{' '}
        here.
      </p>
    </div>
  );
};

export default Author;
