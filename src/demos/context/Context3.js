import React, {Component} from 'react';

const LanguageContext = React.createContext();

class Context3 extends Component {

  state = { lang: 'en'}

  toggleLang = () => {
    this.setState(state => ({
      lang: state.lang === 'en' ? 'fr' : 'en'
    }))
  }

  render() {
    return (
      <LanguageContext.Provider value={{
        lang: this.state.lang,
        toggleLang: this.toggleLang
      }}>
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
    {({lang, toggleLang}) => 
      <div>
        <button className='btn-primary' onClick={toggleLang}>
          Toggle
        </button>
        {lang}
      </div>
    }
  </LanguageContext.Consumer>

export default Context3;