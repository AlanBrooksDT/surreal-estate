import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';

test('renders surreal estate on screen', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/View Properties/);
  expect(linkElement).toBeInTheDocument();
});
