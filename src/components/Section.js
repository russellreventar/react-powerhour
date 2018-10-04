import React, {Component} from 'react';
import collapseImg from '../assets/right-arrow.svg';
import expandImg from '../assets/down-arrow.svg';

class Section extends Component {

  constructor(props) {
    super(props);
    
    const cachedCollapse = JSON.parse(localStorage.getItem(props.id));
    this.state = {
      collapse: cachedCollapse !== null ? cachedCollapse : true
    };
  };

  toggleCollapse = () => {
    this.setState({collapse: !this.state.collapse}, () => {
      localStorage.setItem(this.props.id, this.state.collapse);
    });
  };

  render() {
    const {collapse} = this.state;
    const {demo, section, demoNumber, sectionNumber} = this.props;
    return (
      <div className={`section ${demo.id}_${sectionNumber}`}>
        <div className='section__header'>
          <h3 onClick={this.toggleCollapse}>
            <img
              className='icon icon-click'
              alt='open'
              src={collapse ? collapseImg : expandImg}
            />
            <span className='section-number'>{demoNumber}.{sectionNumber})</span> {section.title}
          </h3>
          {section.description ? <p className='description'>{section.description}</p> : null}
        </div>
        {!collapse ?
          <section>
            {section.render()}
          </section>
        :null}
      </div>
    )
  }
}

export default Section;