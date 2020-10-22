import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Products = lazy(() =>
  import('./features/products/Products')
    .then(({ Products }) => ({ default: Products })),
);
const ProductId = lazy(() =>
  import('./features/productId/ProductId')
    .then(({ ProductId }) => ({ default: ProductId })),
);

function App() {
  return (
    <Router>
      <div className="w-full max-w-screen-lg mx-auto py-4 px-4 xl:px-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex justify-center items-center">
              Loading...
            </div>
          }
        >
          <Route exact path="/" component={ Products } />
          <Route path="/:id" component={ ProductId } />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
