import React from 'react';
import Layout from '../../components/Layout';
import PageList from '../../components/PageList';
import Page from '../../components/Page';

const localdir = './_talks/'
const mdFiles = [
  'react-native-animations.md',
  'talk2.md'
]
export default {

  path: '/talks',

  async action() {

    const promises = mdFiles.map((file) => {
      return require.ensure([], require => require(`${localdir}${file}`), 'talks')
    });

    fetch('/talks')
    // fetch('/talks').then((response) => console.log("response: ", response));

    return await Promise.all(promises).then(items => {
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

export const talk = {

  path: '/talks/:talkId',

  async action({params}) {

    const data = await require.ensure([], require => require(`${localdir}${params.talkId}.md`), 'talks');

    return {
      title: data.title,
      chunk: 'Talk',
      component: <Layout><Page {...data} /></Layout>,
    };

  }
};
