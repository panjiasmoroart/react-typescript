import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export default function Cart({ cartItems, addToCart, removeFromCart }: Props) {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0
    );
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}

      <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}
