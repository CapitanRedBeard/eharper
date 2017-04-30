/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PageList.css';
import SidebarBio from '../SidebarBio/SidebarBio';
import Link from '../Link';
import _ from 'underscore';

class PageList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  renderItems(items) {
    return _.map(items, (item, index) => {
        console.log("Item: ", item)
        const {title, subtitle} = item;
        return (
          <div key={`item${index}`} className={s.itemContainer} >
            <Link to='/'>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </Link>
          </div>
        )
    })

  }

  render() {
    const { items } = this.props;
    console.log("Props: ", items);

    return (
      <div className={s.root}>
        <SidebarBio />
        <div className={s.container}>
          <h1>Talks</h1>
          {this.renderItems(items)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PageList);
