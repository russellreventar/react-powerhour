import React, {Component} from 'react';

const LanguageContext = React.createContext();

class Context2 extends Component {

  state = { lang: 'en'}

  toggleLanguage = () => {
    this.setState(state => ({
      lang: state.lang === 'en' ? 'fr' : 'en'
    }))
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state.lang}>
        <button className='btn-primary' onClick={this.toggleLanguage}>
          Toggle
        </button>
        <Page/>
      </LanguageContext.Provider>
    )
  }
}

const Page = () =>
  <main>
    <Header/>
  </main>

const Header = () =>
  <header>
    <User/>
  </header>

const User = () =>
  <LanguageContext.Consumer>
    {(lang) => 
      <div>
        {lang}
      </div>
    }
  </LanguageContext.Consumer>

export default Context2;