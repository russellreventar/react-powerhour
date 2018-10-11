import React, {Component} from 'react';
import LanguageButton from './LanguageButton';

/**-----------3-----------
  DEMO:     Context
  SECTION:  Context with update
  
  - Pass functions with context to allow updates to state from consumers
*/

class ContextWithUpdate extends Component {

  state = { language: 'en' }

  toggleLanguage = () => {
    this.setState(state => ({
      language: state.language === 'en' ? 'fr' : 'en'
    }))
  }

  render() {
    return (
      <>
        <LanguageButton onClick={this.toggleLanguage}/>
        <Page language={this.state.language}/>
      </>
    )
  }
}

const Page = ({language}) => (
  <div className="page">
    <Header language={language}/>
  </div>
)

const Header = ({language}) => (
  <div className="header">
    <User language={language}/>
  </div>
)

const User = ({language}) => (
  <div className="user">
    {language}
  </div>
)

export default ContextWithUpdate;