import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer,CartItemContainer,EmptyMessageContainer} from './cart-dropdown.styles';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';


const CartDropdown = ({ cartItems,history,dispatch }) => (
  <CartDropDownContainer>
    <CartItemContainer>
      {
      cartItems.length?
      (cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
        )
      :
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemContainer>
    <CustomButton onClick = {()=>{
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
