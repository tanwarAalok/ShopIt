import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.select";

const CartDropDown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

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

