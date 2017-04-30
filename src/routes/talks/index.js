

import React from 'react';
import Layout from '../../components/Layout';
import PageList from '../../components/PageList';

const localdir = './_talks/'
const mdFiles = [
  'talk1.md',
  'talk2.md'
]
export default {

  path: '/talks',

  async action() {

    const promises = mdFiles.map((file) => {
      return require.ensure([], require => require(`${localdir}${file}`), 'talks')
    });

    // fs.readdir( localdir, ( err, files ) => {
    //   console.log("files", files);
    // });
    return await Promise.all(promises).then(items => {
      console.log(items);
      return {
        title: 'Talks',
        chunk: 'talks',
        component: <Layout><PageList items={items} /></Layout>,
      };
    }).catch(reason => {
      console.warn(reason)
    });
  }
};
