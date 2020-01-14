import React from 'react';
import HomeScreen from '../homeScreen';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
// import { FlatList } from 'react-native';
import {mount} from 'jest-enzyme';

jest.mock('react-native-gesture-handler', () => {});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  movieList: [],
  movieDetails: [],
};
const store = mockStore(initialState);

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
});

