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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import AnimatedText from '../AnimatedText';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Navigation />
        {
          // <div className={s.container}>
          //   <Link className={s.brand} to="/">
          //     <span className={s.brandTxt}>Home</span>
          //   </Link>
          //   <div className={s.banner}>
          //     <h1 className={s.bannerTitle}>Emmett</h1>
          //     <p className={s.bannerDesc}>Complex web apps made easy</p>
          //   </div>
          // </div>
        }
        <div className={s.container}>
          <AnimatedText text="Beardo" />
          <h2 className={s.subtitle}>keep make the internet weird</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
