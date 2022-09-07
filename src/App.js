import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import { useCity } from "./context";

function App() {
  const { loading } = useCity();
  if (loading) {
    return (
      <>
        <div className="pt-20">
          <div className="loading"></div>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto">
      {/* <Navbar getTotalAmount={getTotalAmount} /> */}
      <Navbar />
      <div className="flex mt-8">
        <div className="w-8/12">
          {/* <Catalog
            products={state.products}
            handleAddToCart={handleAddToCart}
          /> */}
          <Catalog />
        </div>
        <div className="bg-white w-4/12">
          {/* <Cart
            cart={state.cart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            getTotalPrice={getTotalPrice}
          /> */}
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
