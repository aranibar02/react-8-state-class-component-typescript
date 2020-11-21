export default function cartReducer(cart:any, action:any) {
    switch (action.type) {
      case "empty":
        return [];
      case "updateQuantity": {
        const { quantity, sku } = action;
        return quantity === 0
          ? cart.filter((i:any) => i.sku !== sku)
          : cart.map((i:any) => (i.sku === sku ? { ...i, quantity } : i));
      }
      case "add":
        const { id, sku } = action;
        console.log(cart);
        const itemInCart = cart.find((i:any) => i.sku === sku);
        if (itemInCart) {
          // Return new array with the matching item replaced
          return cart.map((i:any) =>
            i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          // Return new array with the new item appended
          return [...cart, { id, sku, quantity: 1 }];
        }
      default:
        throw new Error("Unhandled action " + action.type);
    }
  }
  