import React, { useEffect } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import {useDispatch, useSelector} from 'react-redux';

const MainCategories = () => {
  const dispatch=useDispatch();
  const {categories}=useSelector(state=>state.categoryList);
  useEffect(()=>{
    dispatch(listCategories())
  },[dispatch])
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory />
            {/* Categories table */}
            <CategoriesTable categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
