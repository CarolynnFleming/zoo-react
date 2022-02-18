import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('render openzoobutton/', () => { 
  
  render(<App />); 
  
  const openZooButton = screen.getByText(/Open Zoo/i);
  expect(openZooButton).toBeInTheDocument();
  fireEvent.click(openZooButton);
  
});

test('', async () => {
  render(<App />);

  const animalButton = screen.getByText(/Add Whale/i);
  expect(animalButton).toBeInTheDocument();
  fireEvent.click(animalButton);
  

});

  