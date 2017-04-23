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
import s from './AnimatedText.css';
import Link from '../Link';

class AnimatedText extends React.Component {
  render() {
    const text = this.props.text || "test";
    return (
      <div className={s.root}>
        {text}
      </div>
    );
  }
}

export default withStyles(s)(AnimatedText);
