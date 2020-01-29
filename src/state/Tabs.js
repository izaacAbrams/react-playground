import React from 'react';

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    }
    handleButtonClick(i) {
        this.setState({currentTabIndex: i})
    }
    renderButtons() {
        return this.props.tabs.map((tab, i) => (
            <button key={i} onClick={() => this.handleButtonClick(i)}>
                {tab.name}
            </button>
        ))
        }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render() {
        return (
        <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
        </div>
        )
    }
}

export default Tabs;