import React from 'react';
import { Link } from 'gatsby';
import styles from './PrevNextPostNavigation.module.scss';

const PrevNextPostNavigation = ({ nextPost, prevPost }) => (
  <div className={styles['navLink']}>
    <h4 className={styles['navLink__mobile-title']}>Other recent posts</h4>
    {prevPost && (
      <Link className={styles['navLink__prev']} to={prevPost.node.fields.slug}>
        {prevPost.node.frontmatter.title}
      </Link>
    )}

    {nextPost && (
      <Link className={styles['navLink__next']} to={nextPost.node.fields.slug}>
        {nextPost.node.frontmatter.title}
      </Link>
    )}
  </div>
);

export default PrevNextPostNavigation;
