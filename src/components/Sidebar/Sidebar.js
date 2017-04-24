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
import emmettSrc from './emmett-small.jpg';
import githubSrc from './github.svg';
import linkedinSrc from './linkedin.svg';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.imageWrapper}>
            <img src={emmettSrc} alt="Emmett Harper" />
          </div>
          <div className={s.info}>
            <h3 className={s.name}>Emmett Harper</h3>
            <p className={s.description}>I build web and mobile apps. Catch me at the beach with my bulldog Gus</p>
            <p className={s.location}>San Diego, CA</p>
          </div>
          <div className={s.socials}>
            <a href='https://github.com/CapitanRedBeard'>
              <img src={githubSrc} alt="github - CapitanRedBeard, https://github.com/CapitanRedBeard"/>
            </a>
            <a href='https://www.linkedin.com/in/emmettharper/'>
              <img src={linkedinSrc} alt="linkedin - Emmett Harper, https://www.linkedin.com/in/emmettharper/"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
