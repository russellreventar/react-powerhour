import React, {Component} from 'react';

class Context1 extends Component {

  state = { lang: 'en'}

  toggleLanguage = () => {
    this.setState(state => ({
      lang: state.lang === 'en' ? 'fr' : 'en'
    }))
  }

  render() {
    return (
      <>
        <button className='btn-primary' onClick={this.toggleLanguage}>
          Toggle
        </button>
        <Page lang={this.state.lang}/>
      </>
    )
  }
}

const Page = ({lang}) =>
  <main>
    <Header lang={lang}/>
  </main>

const Header = ({lang}) =>
  <header>
    <User lang={lang}/>
  </header>

const User = ({lang}) =>
  <div>
    {lang}
  </div>

export default Context1;