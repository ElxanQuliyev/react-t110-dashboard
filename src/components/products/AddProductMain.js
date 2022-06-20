import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import { listInstructors } from "../../Redux/Actions/InstructorActions";
import Loading from "../LoadingError/Loading";
import Toast from "../LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProductMain = () => {
  const [courseName,setCourseName]=useState("")
  const [description, setDescription] = useState("")
  const [summary, setSummary] = useState("")
  const [price,setPrice]=useState(0);
  const [discount, setDiscount] = useState(null)
  const [isFeatured,setIsFeatured]=useState(false)
  const [trailer, setTrailer] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [instructorId, setInstructorId] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  //Orxan Mellim sağlığınıza duaçıyız
  const {categories} = useSelector(state=>state.categoryList)
  const {instructors} = useSelector(state=>state.instructorList)

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(listCategories())
    dispatch(listInstructors())
  },[dispatch])
  const submitHandler= (e)=>{
    e.preventDefault();
    // dispatch(addCourse(courseName))
  }
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Add product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {/* {error && <Message variant="alert-danger">{error}</Message>} */}
                  {/* {loading && <Loading />} */}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Course Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      value={courseName}
                      onChange={e=>setCourseName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_instructors" className="form-label">
                      Instructors
                    </label>
                    <select id="product_instructors" 
                       onChange={e=>setInstructorId(e.target.value)}
                       className="form-control" defaultValue="-">
                      <option disabled value="-">select Instructors...</option>
                      {instructors?.map(instructor=>(
                        <option key={instructor.id} 
                          value={instructor.id}>{instructor.fullName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_categories" className="form-label">
                      Categories
                    </label>
                    <select id="product_categories" 
                       onChange={e=>setCategoryId(e.target.value)}
                       className="form-control" defaultValue="-">
                     <option option disabled value="-">select categories...</option>
                      {categories?.map(category=>(
                        <option key={category.categoryId} 
                          value={category.categoryId}>{category.categoryName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_trailer" className="form-label">
                      Trailer Url
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_trailer"
                      required
                      value={trailer}
                      onChange={e=>setTrailer(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_summary" className="form-label">
                      Summary
                    </label>
                    <textarea
                      type="text"
                      rows={5}
                      placeholder="Type here"
                      className="form-control"
                      id="product_summary"
                      value={summary}
                      onChange={e=>setSummary(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_discount" className="form-label">
                      Discount
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_discount"
                      value={discount}
                      onChange={(e)=>setDiscount(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_featured" className="form-label">
                      Is Featured?
                    </label>
                    <input
                      type="checkbox"
                      id="product_price"
                      value={isFeatured}
                      onChange={(e)=>
                        {setIsFeatured(e.target.checked ? true : false)}}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      value={description}
                      onChange={e=>setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={photoUrl}
                      onChange={(e)=>setPhotoUrl(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
