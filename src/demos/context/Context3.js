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
      <LanguageContext.Provider value={this.state.language}>
        <LanguageButton onClick={this.toggleLanguage}/>
        <Page/>
      </LanguageContext.Provider>
    )
  }
}

const Page = () => (
  <div className="page">
    <Header/>
  </div>
)

const Header = () => (
  <div className="header">
    <User/>
  </div>
)

const User = () => (
  <LanguageContext.Consumer>
    {
      (language) =>
        <div className="user">
          {language}
        </div>
      }
  </LanguageContext.Consumer>
)


export default ContextWithUpdate;