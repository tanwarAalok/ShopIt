import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

    return (
      <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
              ))) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )
          }
  
        </CartItems>
        <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    );
};

export default CartDropDown;

