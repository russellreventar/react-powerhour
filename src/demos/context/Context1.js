import React, {Component} from 'react';
import LanguageButton from './LanguageButton';

/**-----------1-----------
  DEMO:     Context
  SECTION:  No Context
  
  - language prop is drilled down and passed through every component to User
  - This causes all props in the tree to render
*/

class NoContext extends Component {

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

export default NoContext;