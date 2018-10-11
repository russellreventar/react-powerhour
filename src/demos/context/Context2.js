import React, {Component} from 'react';
import LanguageButton from './LanguageButton';

/**-----------3-----------
  DEMO:     Context
  SECTION:  With Context
  
  - language prop is only passed to consumer
  - Nodes down the path will still re-render
*/

const LanguageContext = React.createContext();


class WithContext extends Component {

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
        <Page language={this.state.language}/>
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
    {(language) => (
      <div className="user">
        {language}
      </div>
    )}
  </LanguageContext.Consumer>
)

export default WithContext;