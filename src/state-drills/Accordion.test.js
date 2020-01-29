import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

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

describe('Accordion Component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty li when n sections supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sessions active by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    
    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only opens recent section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})