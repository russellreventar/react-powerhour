import React, {Component} from 'react';
import LanguageButton from './LanguageButton';

/**-----------3-----------
  DEMO:     Context
  SECTION:  Context with update
  
  - Pass functions with context to allow updates to state from consumers
*/

const LanguageContext = React.createContext();

class ContextWithUpdate extends Component {

  state = { language: 'en' }

  toggleLanguage = () => {
    this.setState(state => ({
      language: state.language === 'en' ? 'fr' : 'en'
    }))
  }

  render() {
    return (
      <LanguageContext.Provider value={{
        language: this.state.language,
        toggleLanguage: this.toggleLanguage
      }}>
        <Page/>
      </LanguageContext.Provider>
    )
  }
}

const Page = () => (
  <LanguageContext.Consumer>
    {
      ({language}) =>
        <div className="page">
          {language}
          <Header/>
        </div>
    }
  </LanguageContext.Consumer>
)

const Header = () => (
  <div className="header">
    <User/>
  </div>
)

const User = () =>
  <LanguageContext.Consumer>
    {
      ({language, toggleLanguage}) =>
        <div className="user">
          <LanguageButton onClick={toggleLanguage}/>
          {language}
        </div>
    }
  </LanguageContext.Consumer>

export default ContextWithUpdate;