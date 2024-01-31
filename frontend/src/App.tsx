import { BrowserRouter,Routes,Route } from "react-router-dom"
import { lazy, Suspense} from 'react';

const Dashboard = lazy(()=>import("./pages/Dashboard"));
const Products = lazy(()=>import("./pages/Products"));
const Customer = lazy(()=>import("./pages/Customer"));
const Transactions = lazy(()=>import("./pages/Transactions"));
const Bar = lazy(() => import("./components/charts/Bar"));
const Pie = lazy(() => import("./components/charts/Pie"));
const Line = lazy(() => import("./components/charts/Line"));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/barchart" element={<Bar />} />
          <Route path="/admin/piechart" element={<Pie />} />
          <Route path="/admin/linechart" element={<Line />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App