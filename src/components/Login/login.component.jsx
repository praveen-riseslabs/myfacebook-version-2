import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
    const Navigate = useNavigate();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const saveData = (data) => {
        axios.post("http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login", data)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Login successful");
                    localStorage.setItem("userinfo", JSON.stringify(res.data));
                    Navigate('/forgotpass');
                } else {
                    toast.error("Login failed");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("An error occurred. Please try again later.");
            });
    };

    return (
        <div className='login'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5 p-5 d-flex">
                            <div className="card-body">
                                <h4 className="card-title text-right">My Facebook 2</h4>
                                <h6 className="card-text text-right">Hello! Let's get started</h6>
                                <p className="card-text text-right">Sign in to continue.</p>
                                <form onSubmit={handleSubmit(saveData)}>
                                    <div className="form-group mt-4">
                                        <input type="email" className={`form-control ${errors.email ? 'is-invalid':''}`} id="email" placeholder="Email"
                                            {...register('email', { required: 'Email is required' })}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)} />
                                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                    </div>

                                    <div className="form-group mt-4">
                                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password"
                                            {...register('password', { required: 'Password is required' })}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)} />
                                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                    </div>

                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-danger btn-block">SIGN IN</button>
                                    </div>

                                    <div className="row">
                                        <div className="form-group form-check p-5 mt-3 col-6">
                                            <input type="checkbox" className="form-check-input" id="rememberMe"></input>
                                            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
                                        </div>
                                        <div className="text-right mt-3  p-5  col-6">
                                            <Link to="/forgotpass">Forgot password?</Link>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        Don't have an account? <Link to="/signup">Create one</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          navigate('/home'); // Redirect to home page if token is present
        }
      }, [navigate]);

    const saveData = (data) => {
        axios.post("http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login", data)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Login successful");
                    localStorage.setItem("userinfo", JSON.stringify(res.data));
                      navigate('/home');
                } else {
                    toast.error("Login failed");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("An error occurred. Please try again later.");
            });
    };
   
      

    return (
        <div className='login'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5 p-5 d-flex">
                            <div className="card-body">
                                <h4 className="card-title text-right">My Facebook 2</h4>
                                <h6 className="card-text text-right">Hello! Let's get started</h6>
                                <p className="card-text text-right">Sign in to continue.</p>
                                <form onSubmit={handleSubmit(saveData)}>
                                    <div className="form-group mt-4">
                                        <input type="email" className={`form-control ${errors.email ? 'is-invalid':''}`} id="email" placeholder="Email"
                                            {...register('email', { required: 'Email is required' })}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)} />
                                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                    </div>

                                    <div className="form-group mt-4">
                                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password"
                                            {...register('password', { required: 'Password is required' })}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)} />
                                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                    </div>


// import { Link, useNavigate } from 'react-router-dom';
// import './login.scss';
// //import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function Login() {

//   const Navigate = useNavigate();

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const saveData = (data) => {
//     axios({
//       method: "POST",
//       url: "http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
//       data: data,
//     }).then((res) => {
//       if (res.status == 200) {
//         toast.success("Login successful");
//         localStorage.setItem("userinfo", JSON.stringify(res.data));
//       } else {
//         toast.error("Login failed");
//       }
//       Navigate('/forgotpass');
//     });
//   }

//   return (
//     <>
//       <div className='login'>
//         <div className="container-fluid ">
//           <div className="row justify-content-center ">
//             <div className="col-md-6">
//               <div className="card mt-5 p-5 d-flex ">
//                 <div className="card-body ">
//                   <h4 className="card-title text-right">My Facebook 2</h4>
//                   <h6 className="card-text text-right">Hello! Let's get started</h6>
//                   <p className="card-text text-right">Sign in to continue.</p>
//                   <form onSubmit={handleSubmit(saveData)}>
//                     <div className="form-group mt-4">
//                       <input type="email" className="form-control" id="email" placeholder="Email"  {...register('email', { required: 'Email is required' })} />
//                       {errors.email && <span className="error">{errors.email.message}</span>}
//                     </div>

//                     <div className="form-group mt-4">
//                         <input type="password" className="form-control" id="password" placeholder="Password"  {...register('password', { required: 'Password is required' })} />
//                         {errors.password && <span className="error">{errors.password.message}</span>}
                      
//                     </div>

//                     <div className="d-grid gap-2 mt-3">
//                       <button type="submit" className="btn btn-danger btn-block">SIGN IN</button>
//                     </div>

//                     <div className="row">
//                       <div className="form-group form-check p-5 mt-3 col-6">
//                         <input type="checkbox" className="form-check-input" id="rememberMe" />
//                         <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
//                       </div>
//                       <div className="text-right mt-3  p-5  col-6">
//                         <Link to="/forgotpass">Forgot password?</Link>
//                       </div>
//                     </div>

//                     <div className="text-center">
//                       Don't have an account? <Link to="/signup">Create one</Link>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // import {Link, useNavigate} from 'react-router-dom';
// // import './login.scss';
// // import { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // export function Login(){
    
// //     const Navigate = useNavigate();
// //     const [email, setEmail]=useState();
// //     const [password, setPassword]= useState();
    
// //     const { register, formState: { errors } } = useForm();

// //     // const onSubmit = ()=>{
// //     //     const data={
// //     //         email:email,
// //     //         password:password
// //     //     }
// //     //     axios({
// //     //         method:"POST",
// //     //         url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
// //     //         data:data,
// //     //     }).then((res)=>{
// //     //         if(res.status==200){
// //     //             alert("login successfull")
// //     //         localStorage.setItem("userinfo",JSON.stringify(res.data));
// //     //         }else{
// //     //             alert("login failed")
// //     //         }

// //     //     })
// //     // }

// //     function saveData(){
// //         const data={
// //             email:email,
// //             password:password
// //         }
// //         axios({
// //             method:"POST",
// //             url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
// //             data:data,
// //         }).then((res)=>{
// //             if(res.status==200){
// //                 toast.success("login successfull")
// //             localStorage.setItem("userinfo",JSON.stringify(res.data));
// //             }else{
// //                 toast.success("login failed")
// //             }
// //             Navigate('/forgotpass')
// //         })
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-danger btn-block">SIGN IN</button>
                                    </div>

                                    <div className="row">
                                        <div className="form-group form-check p-5 mt-3 col-6">
                                            <input type="checkbox" className="form-check-input" id="rememberMe"></input>
                                            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
                                        </div>
                                        <div className="text-right mt-3  p-5  col-6">
                                            <Link to="/forgotpass">Forgot password?</Link>
                                        </div>
                                    </div>

// //     //   axios({
// //     //     method:'POST',
// //     //     url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
// //     //     data:data
// //     //   }).then(()=>{
// //     //     toast.success("login successful.....")
// //     // })
// //     }
// //     return(
// //       <>
// //       <div className='login'>
// //       <div class="container-fluid ">
// //           <div class="row justify-content-center ">
// //               <div class="col-md-6">
// //                   <div class="card mt-5 p-5 d-flex ">
// //                       <div class="card-body ">
// //                           <h4 class="card-title text-right">My Facebook 2</h4>
// //                           <h6 class="card-text text-right">Hello! Let's get started</h6>
// //                           <p class="card-text text-right">Sign to continue.</p>
// //                           {/* <form onSubmit={handleSubmit(onSubmit)}> */}
// //                           <form>
// //                               <div class="form-group mt-4">
// //                                   <input type="email" class="form-control" id="email" placeholder="email" {...register('email', { required: 'Email is required' })}
// //                         error={Boolean(errors.email)}
// //                         helperText={errors.email?.message}  onChange={e=>setEmail(e.target.value)}></input>
// //                               </div>

// //                               <div class="form-group mt-4">
// //                                   <div class="input-group">
// //                                       <input type="password" class="form-control" id="password" placeholder="Password" {...register('password', { required: 'Password is required' })}
// //                         error={Boolean(errors.password)}
// //                         helperText={errors.password?.message} onChange={e=>setPassword(e.target.value)}></input>
// //                                   </div>
// //                               </div>

// //                               <div class="d-grid gap-2 mt-3">
// //                                    <button type="button" class="btn btn-danger btn-block" onClick={()=>saveData()} >SIGN IN</button>
// //                                    {/* <button type="button" class="btn btn-danger btn-block"  >LOGIN</button> */}
// //                               </div>

// //                               <div class="row">
// //                               <div class="form-group form-check p-5 mt-3 col-6">
// //                                   <input type="checkbox" class="form-check-input" id="rememberMe"></input>
// //                                   <label class="form-check-label" for="rememberMe">Keep me signed in</label>
// //                               </div>
// //                                 <div class="text-right mt-3  p-5  col-6">
// //                                   <Link to="/forgotpass">Forgot password?</Link>
// //                                 </div>
                              
// //                               </div>
                              
// //                               <div class="text-center ">
// //                                   Don't have an account? <Link to="/signup">Create one</Link>
// //                               </div>
// //                           </form>
// //                       </div>
// //                   </div>
// //               </div>
// //           </div>
// //       </div>
// //       </div>
// //       </>
// //     )
// //   }


                                    <div className="text-center">
                                        Don't have an account? <Link to="/signup">Create one</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
