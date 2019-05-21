import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe ('renders', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Router ', () => {
  const component = shallow(<App />);
  expect(component.find(Router)).toHaveLength(1);
}); 

it('match snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
})

});
