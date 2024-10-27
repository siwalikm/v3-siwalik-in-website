'use strict';

const year = new Date().getUTCFullYear();

module.exports = {
  url: 'https://v3.siwalik.in',
  year,
  pathPrefix: '/',
  title: 'Siwalik Mukherjee - Software Engineer and Designer',
  subtitle: 'Software Engineer and Designer',
  // copyright: '© All rights reserved.',
  copyright: `© ${year} Siwalik Mukherjee <br> This is V3 of my personal site. <a target="_blank" rel="noopener noreferrer" href="https://v2.siwalik.in/">V2</a> • <a href="https://v1.siwalik.in/" target="_blank" rel="noopener noreferrer">V1</a>`,
  // disqusShortname: 'siwalik-in',
  disqusShortname: '',
  postsPerPage: 10,
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/',
    },
    {
      label: 'About me',
      path: '/pages/about',
    },
    {
      label: 'Projects',
      path: '/pages/projects',
    },
  ],
  author: {
    name: 'Siwalik Mukherjee',
    photo: '/photo.jpg',
    bio:
      'Thoughtful software engineer at heart and artist by hobby. I write about my learnings in tech and things I wish I knew a year back.',
    contacts: {
      twitter: 'siwalikm',
      dribbble: 'siwalikm',
      email: '',
      facebook: '',
      telegram: '',
      github: 'siwalikm',
      rss: '',
      vkontakte: '',
      linkedin: 'siwalikm',
      instagram: 'siwalikm',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      // youtube: '@siwalikm',
      soundcloud: '',
      medium: '',
    }
  }
};
