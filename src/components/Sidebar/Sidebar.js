/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Link from '../Link';
import emmettUrl from './emmett-small.jpg';
import FontAwesome from 'react-fontawesome';


class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.imageWrapper}>
            <img src={emmettUrl} alt="Emmett Harper" />
          </div>
          <div className={s.info}>
            <h3 className={s.name}>Emmett Harper</h3>
            <p className={s.description}>I build web and mobile apps. Catch me by the beach with my bulldog Gus and some mexican food.</p>
            <h5 className={s.location}>San Diego, CA</h5>
            <FontAwesome name='square-o' stack='2x' />

          </div>
          <div className={s.socials}>
            <a href="url">
              <FontAwesome className={s.github} name='rocket'/>
            </a>
            <a href="url">
              <FontAwesome className={s.linkedin} name='rocket'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
