/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const URLSearchParamsMock = {
  get: jest.fn(),
};

global.URLSearchParams = URLSearchParamsMock;
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
