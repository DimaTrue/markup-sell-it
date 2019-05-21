import { logOut } from './user';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LOG_OUT } from '../action-types/user';


Enzyme.configure({ adapter: new Adapter() });


describe ('user', () => {

it('should return an action', () => {
  const expectedAction = {
    type: LOG_OUT,
  }
  expect(logOut()).toEqual(expectedAction)
}); 

});