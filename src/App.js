import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import cx from 'classnames';
import './styles/App.scss';
import Fragment from './demos/fragment';
import Context from './demos/context';
import ErrorBoundary from './demos/errorBoundary';
import Portals from './demos/portals';
import openImage from './assets/white-right-arrow.svg';
import closeImage from './assets/left-arrow.svg';

const demosOrder = [
  'fragment',
  'context',
  'errorBoundary',
  'portals'
]

const demos = {
  fragment: {
    id: 'fragment',
    title: 'Fragment',
    description: 'Group a list of children without adding extra nodes to the DOM.',
    version: '16.3.4',
    route: '/fragment',
    Component: Fragment,
  },
  context: {
    id: 'context',
    title: 'Context',
    description: 'Data moves through the component tree without having to pass props down at every level.',
    route: '/context',
    version: '16.4.3',
    Component: Context,
  },
  errorBoundary: {
    id: 'errorBoundary',
    title: 'Error Boundaries',
    description: 'Catch JavaScript errors anywhere in their child component tree',
    route: '/error-boundary',
    version: '16.4.3',
    Component: ErrorBoundary,
  },
  portals: {
    id: 'portals',
    title: 'Portals',
    description: 'Render children to any DOM node outside of parent',
    route: '/portals',
    version: '16.4.3',
    Component: Portals,
  }
};

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
            {demosOrder.map((id, index) =>
              <li key={id}>
                <Link onClick={this.toggle(false)} to={demos[id].route}>
                  {index + 1}) {demos[id].title}
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
    <div className='title'>React 16 - What's New</div>
  </header>

const Main = () =>
  <main>
    <Switch>
      {demosOrder.map((id, index) =>
        <Route exact key={id} path={demos[id].route} render={() =>
          <DemoPage id={id} index={index + 1} Component={demos[id].Component}/>
        }/>
      )}
      <Redirect exact path='/' to='/fragment'/>
    </Switch>
  </main>

const DemoPage = ({id, index, Component}) =>
  <div className={`demo-page ${id}`}>
    <div className='demo-page__header'>
      <div className='title'>
        <div className='num'>
          {index}
        </div>
        {demos[id].title}
      </div>
      <p>{demos[id].description}</p>
    </div>
    <Component demo={demos[id]} demoNumber={index}/>
  </div>

export default App;
