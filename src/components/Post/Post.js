// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Copyright from '../Copyright';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';
import NewsletterContainer from '../Newsletter';

type Props = {
  post: Node,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { copyright, year } = useSiteMetadata();

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Author date={date} postSlug={slug} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}

        <NewsletterContainer year={year} />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />

        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Post;
