import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import cx from 'classnames';
import Demo from './components/Demo';
import openImage from './assets/white-right-arrow.svg';
import closeImage from './assets/left-arrow.svg';
import {DEMOS_ORDER, DEMOS} from './constants';
import './styles/App.scss';

const POWERHOUR_TITLE = 'React 16 - Whats New';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Header/>
        <Main/>
      </div>
    );
  }
}

class Sidebar extends Component {

  state = {isOpen: false};

  toggle = (toggle) => () => {
    this.setState({isOpen: toggle});
  }

  render() {
    return (
      <div className='sidebar'>
        <div className={cx('sidebar-panel', {'sidebar-panel--open': this.state.isOpen})}>
          <div className='sidebar-header'>
            Demos
            <img className='icon icon-click' onClick={this.toggle(false)} alt='open' src={closeImage}/>
          </div>
          <ul>
            {DEMOS_ORDER.map((id, index) =>
              <li key={id} style={{opacity: DEMOS[id].extra ? 0.4 : 1}}>
                <Link onClick={this.toggle(false)} to={DEMOS[id].route}>
                  {index + 1}) {DEMOS[id].title}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <img className='icon icon-click icon-open' onClick={this.toggle(true)} alt='open' src={openImage}/>
      </div>
    )
  }
}

const Header = () =>
  <header>
    <div className='title'>{POWERHOUR_TITLE}</div>
  </header>

const Main = () =>
  <main>
    <Switch>
      {DEMOS_ORDER.map((id, index) =>
        <Route exact key={id} path={DEMOS[id].route} render={() =>
          <Demo demo={DEMOS[id]} number={index + 1}/>
        }/>
      )}
      <Redirect exact path='/' to='/fragment'/>
    </Switch>
  </main>

export default App;
