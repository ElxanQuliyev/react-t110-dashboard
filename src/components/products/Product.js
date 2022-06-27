import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  { useSelector,useDispatch } from "react-redux";
import { courseDelete } from "../../Redux/Actions/CourseActions";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch()
  const deleteHandler=(id)=>{
    let result = window.confirm("Are you sure?")
    if(result){
     dispatch(courseDelete(id))
    }
  }
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.photoUrl} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {product.courseName}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <Link
                to={`/product/${product.courseId}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deleteHandler(product.courseId)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
