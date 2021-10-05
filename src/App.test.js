import { render, screen } from '@testing-library/react';
import App from './App';
import {HashRouter} from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App/></HashRouter>, div)
  ReactDOM.unmountComponentAtNode(div);
});