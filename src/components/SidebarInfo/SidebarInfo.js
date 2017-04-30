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
import s from './SidebarInfo.css';
import Link from '../Link';
import _ from 'underscore';

class SidebarInfo extends React.Component {
  render() {
    const {sidebar} = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {
              _.map(sidebar, (item, i) => {
              return (
                <div key={`sidebarItems${i}`}>
                  <h3>{item.title}</h3>
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarInfo);
