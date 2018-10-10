import React, {Component} from 'react';
import LanguageButton from './LanguageButton';

/**-----------3-----------
  DEMO:     Context
  SECTION:  With Context
  
  - language prop is only passed to consumer
  - Nodes down the path will still re-render
*/

class WithContext extends Component {

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

export default WithContext;