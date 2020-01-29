import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        activeSection: null,
    }

    handleButtonClick = (index) => {
        this.setState({
            activeSection: index
        })
    }   
    
    renderLi(section, i, activeSection) {
        return (
            <li className="Accordion__item" key={i}>
                <button 
                    type="button"
                    onClick={() => this.handleButtonClick(i)}
                >
                    {section.title}
                </button>
                {(activeSection === i) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSection } = this.state
        const { sections } = this.props
        return (
            <ul className="Accordion">
                {sections.map((section, i) =>
                this.renderLi(section, i, activeSection)
                )}
            </ul>
        )
    }
}

export default Accordion;