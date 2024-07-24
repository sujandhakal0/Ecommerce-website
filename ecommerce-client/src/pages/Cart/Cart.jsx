import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItems } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((reduxStore) => reduxStore.cart.value);

  // Function to handle removing an item from the cart
  const handleRemoveItem = (productId) => {
    dispatch(removeCartItems(productId)); // Dispatch action to remove item
  };

  const isEmptyCart = cartItems?.length === 0;

  return (
    <div className="w-full flex justify-center">
      <div className="container bg-[#ffffff]">
        {/* Conditional rendering based on cart items existence */}
        {cartItems?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Loop through cart items */}
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="flex gap-3">
                <div className="bg-white shadow-lg w-[360px] h-[301px]">
                  <div className="flex justify-center">
                    <img
                      className="h-[229px] w-[223px]"
                      src={cartItem?.images?.[0]} // Use optional chaining
                      alt={cartItem?.title} // Use optional chaining
                      onError={(event) => {
                        event.target.src = "[placeholder image URL]"; // Set a placeholder image on error
                      }}
                    />
                  </div>
                  <div className="flex justify-between pt-1 px-2 text-base text-[#151875] mt-6">
                    <p className="border-b-2 border-[#eeeffb]">
                      {cartItem?.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="">${cartItem.price}</p>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => handleRemoveItem(cartItem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-10">
            <h2 className="text-[24px] font-bold text-[#151875] mb-4">
              Your cart is empty
            </h2>
            <p className="text-[#7E88C2]">
              Start adding products to your cart to checkout!
            </p>
          </div>
        )}

        {/* Conditionally render checkout button based on cart items */}
        {!isEmptyCart && (
          <div className="flex justify-end mt-10">
            <button className="bg-primary-light text-white text-base px-8 py-2 rounded hover:bg-[#FB4997]">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
