import React, { useRef, useEffect } from 'react';
// import { Script } from 'gatsby';
import styles from './Page.module.scss';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <>
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
    {/* <Script src="https://gistcdn.githack.com/siwalikm/5bc4f2bf54781fdeb8f45e9131f48882/raw/e760b7f5a3475d878a6b9b1597a42ebd695fa267/archived_website_footer.js"/> */}
        {title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>{children}</div>
      </div>
    </div>
    </>
  );
};

export default Page;
