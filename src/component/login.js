/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser,showUser, deleteUser, updateUser } from "../features/action";
const Login = () => {
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const handleChange = (e) => {
    console.log("e", e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("formdata", { ...formData, [name]: value });
  };
  const deleteData = async (id) => {
    console.log("delete", id);
    dispatch(deleteUser(id))
  };
  const updateData = (data) => {
    setIsUpdate(true);
    console.log("update data", data.id);
    setFormData({
      email: data.email,
      name: data.name,
      phone: data.phone,
    });
    // dispatch(updateUser(data.id))
    // deleteData(data.id)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdate(false);
    const existingUser = users.find(user => user.email === formData.email)
    console.log('existingUser', existingUser)
    if (existingUser){
      console.log('formValue', formData)
      dispatch(updateUser({userId:existingUser.id, userData:formData}))
      setFormData({email:'',name:'',phone:''})
    }
    else{
      dispatch(createUser(formData));
      setFormData({email:'',name:'',phone:''})
    }
  };
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="display-5 fw-bold text-center">Sign up</h2>
                <p className="text-center m-0">
                  Enter the details{" "}
                  {/* <a href="#!" class="link-primary text-decoration-none">
                    Sign in
                  </a> */}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row gy-5 justify-content-center">
                <div className="col-12 col-lg-10">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control border-0 border-bottom rounded-0"
                            name="email"
                            id="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control border-0 border-bottom rounded-0"
                            name="name"
                            id="name"
                            placeholder="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control border-0 border-bottom rounded-0"
                            name="phone"
                            id="phone"
                            placeholder="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Phone</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className={`${
                              isUpdate ? "btn btn-success" : "btn btn-primary"
                            }`}
                            type="submit"
                          >
                            {isUpdate ? "Update data" : "sign up"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">email</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.email}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <div className="btn" style={{ marginTop: 4 }}>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteData(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: 18 }}
                    onClick={() => updateData(data)}
                  >
                    Update
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Login;
