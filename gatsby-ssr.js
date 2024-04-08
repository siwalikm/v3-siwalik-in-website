'use strict';

const React = require('react');

module.exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
            <script
                key="./gatsby/on-render-body.js"
                src="./gatsby/on-render-body.js"
            />,
            <script src="https://gistcdn.githack.com/siwalikm/5bc4f2bf54781fdeb8f45e9131f48882/raw/e760b7f5a3475d878a6b9b1597a42ebd695fa267/archived_website_footer.js"/>,
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QVQPTXC6Q4"></script>,
            <script
                dangerouslySetInnerHTML={{
                  __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QVQPTXC6Q4');
                    `,
                }}
            />,
  ]);
};