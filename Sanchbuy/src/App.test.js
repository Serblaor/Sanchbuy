import { render, fireEvent } from '@testing-library/react';
import Cart from './components/Cart';

describe('Cart component', () => {
  test('shows error message when user is not logged in and tries to buy a product', () => {
    // Mock the useSelector function to return a user object that is not logged in
    jest.mock('react-redux', () => ({
      useSelector: jest.fn().mockImplementation(() => ({
        cartItems: [],
        user: null,
      })),
      useDispatch: jest.fn(),
    }));

    // Render the component
    const { getByText } = render(<Cart />);

    // Find the "Comprar" button and click it
    const comprarButton = getByText('Comprar');
    fireEvent.click(comprarButton);

    // Verify that the error message is displayed
    const errorMessage = getByText('Debes estar logueado para comprar productos');
    expect(errorMessage).toBeInTheDocument();
  });
});
