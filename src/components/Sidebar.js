import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import openImage from './../assets/white-right-arrow.svg';

class Sidebar extends Component {

  state = {isOpen: true};

  toggle = (toggle) => () => {
    this.setState({isOpen: toggle});
  }

  render() {
    return (
      <>
        <div className={cx('sidebar', {'sidebar--open': this.state.isOpen})}>
          <button onClick={this.toggle(false)}>Close</button>
          <ul>
            <li>
              <Link onClick={this.toggle(false)} to='/fragments'>1) Fragments</Link>
            </li>
          </ul>
        </div>
        <img alt='open' src={openImage}/>
        <button onClick={this.toggle(true)}>Open</button>        
      </>
    )
  }
}

export default Sidebar;
