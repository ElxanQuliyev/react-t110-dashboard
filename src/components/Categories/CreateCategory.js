import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryAdd, listCategories } from "../../Redux/Actions/CategoryActions";
import { useForm } from "react-hook-form";

const CreateCategory = () => {
  const {categories} = useSelector(state=>state.categoryList);
  const dispatch=useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const categorySubmitHandler=(data)=>{
    dispatch(categoryAdd(data))
  }
  return (
    <div className="col-md-12 col-lg-4">
      <form onSubmit={handleSubmit(categorySubmitHandler)}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            {...register("name",{required:true})}
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Parent Category</label>
          <select className="form-control" 
             {...register("parentCategoryId")}
          >
            <option value={null}>None</option>
            {categories?.map(cate=>(
              <option
               value={Number(cate.categoryId)}
                key={cate.categoryId}
                >
                  {cate.name}
              </option>
            ))}
          </select>
        </div>
        
         <div className="mb-4">
         <label htmlFor="isFeatured" className="form-label">Is Featured</label>
          <input {...register("isFeatured")} type="checkbox" id="isFeatured"   />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="d-grid">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
