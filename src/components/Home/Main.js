import React from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";

const Main = () => {
  return (
    <>
      <section className="content-main">
        {/* <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        <TopTotal orders={orders} products={products} />

        <div className="row">
          <SaleStatistics />
          <ProductsStatistics />
        </div>

        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div> */}
      </section>
    </>
  );
};

export default Main;
