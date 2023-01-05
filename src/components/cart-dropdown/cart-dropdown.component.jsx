import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.select";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropDown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
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
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    );
};

export default CartDropDown;

