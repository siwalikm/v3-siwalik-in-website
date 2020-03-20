// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { TinyLetter } from 'react-tinyletter';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Copyright from '../Copyright';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { copyright } = useSiteMetadata();

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}

        <div className="tinyLetter__container">
          <h3 className="tinyLetter__container__title">
            {' '}
            Subscribe to my Newsletter
          </h3>
          <p>
            Every few weeks I write about tech, personal growth and other things
            I wish I knew a year ago. No spams. Unsubscribe at <i>any</i> time.
          </p>
          <TinyLetter list="siwalik">
            <input type="email" placeholder="Your Email Address" />
            <input type="submit" value="Subscribe" />
          </TinyLetter>
        </div>

        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />

        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Post;
