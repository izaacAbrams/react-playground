import React, { Component } from 'react';
import './App.css';
// import Messages from './Messages.js';
// import TheDate from './state/TheDate.js';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter /> */}
        {/* <Tabs tabs={tabsProp} /> */}
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;