import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryAdd } from "../../Redux/Actions/CategoryActions";

const CreateCategory = () => {
  const {categories}=useSelector(state=>state.categoryList);
  const dispatch=useDispatch();
  // const [parentId,setParentId]=useState(null);
   const formRef=useRef();
  const categorySubmitHandler=(e)=>{
    e.preventDefault();
    var data=new FormData(formRef.current);
    // const json = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})));
    // const convertData=new URLSearchParams(Array.from(new FormData(formRef.current))).toString()

    dispatch(categoryAdd(data))
  }
  return (
    <div className="col-md-12 col-lg-4">
      <form ref={formRef} onSubmit={categorySubmitHandler}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Parent Category</label>
          <select name="parentCategoryId" className="form-control" 
          // onChange={e=>setParentId(Number(e.target.value))}
          >
            <option value={null}>None</option>
            {categories?.map(cate=>(
              <option
               value={cate.categoryId}
                key={cate.categoryId}
                >
                  {cate.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></textarea>
        </div> */}
         <div className="mb-4">
         <label htmlFor="isFeatured" className="form-label">Is Featured</label>
          <input type="checkbox" id="isFeatured" name="isFeatured"  />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
