import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import PaginateItems from "./components/common/PaginateItems";
import { useGetProductsQuery } from "./slices/productApi";

const App = () => {
  // const { items: products, status } = useSelector((state) => state.products);
  const {data: products = [], isLoading, isSuccess, isError} = useGetProductsQuery();

  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه برنامه نویسی</title>
      </Helmet>

      <div className="mx-auto max-w-6xl">
        <Header />
        <PaginateItems productsPerPage={6} products={products} isLoading={isLoading} isSuccess={isSuccess} isError={isError} />
      </div>
    </MainLayout>
  );
};

export default App;
