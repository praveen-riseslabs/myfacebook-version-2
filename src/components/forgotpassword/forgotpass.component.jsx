import axios from "axios";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import './forgotpass.component.scss'

export function Forgotpassword() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const saveData = () =>{
        

        axios({
            method: "POST",
            url: "http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password",
            data: { email: email }
        }).then(() => {
            alert("Check your email");
            Navigate('/resetpass');
        }).catch(error => {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        });
    }

    return (
        <div className='forgot'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5 p-5">
                            <div className="card-body">
                                <h3 className="card-title text-right">My Facebook 2</h3>
                                <h6 className="card-text text-right">Hello! Let's get started</h6>
                                <p className="card-text text-right">Forgot password to continue.</p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mt-4">
                                        <input type="email"
                                               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                               placeholder="Email"
                                               {...register('email', {
                                                   required: 'Email is required',
                                                   pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                       message: 'Invalid email address'
                                                   }
                                               })}
                                               onChange={e => setEmail(e.target.value)}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                    </div>
                    
                    
                                        <div className='forgot '>
                                            <div class="container-fluid ">
                                                <div class="row justify-content-center ">
                                                    <div class="col-md-6">
                                                        <div class="card mt-5 p-5">
                                                            <div class="card-body ">
                                                                <h3 class="card-title text-right">My Facebook 2</h3>
                                                                <h6 class="card-text text-right">Hello! Let's get started</h6>
                                                                <p class="card-text text-right">Forgotpassword to continue.</p>
                                                                <div>
                                                                    <div class="form-group mt-4">
                                                                        <input type="email" class="form-control" placeholder="Email"  {...register('email', { required: 'Email is required' })}
                                                                            error={Boolean(errors.email)}
                                                                            helperText={errors.email?.message} onChange={e => setEmail(e.target.value)}></input>
                                                                    </div>
                                                                    <div class="d-grid gap-2 mt-3">
                                                                        <button type="button" className="btn btn-primary btn-block" value="submit" onClick={() => saveData()}>Submit</button>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                        





// import axios from "axios";
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom'
// import './forgotpass.component.scss'
// import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export function Forgotpassword() {
//     const Navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         axios.post("http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password", data)
//             .then(() => {
//                 toast.success("Check your email");
//                 Navigate('/resetpass');
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 toast.error("An error occurred. Please try again later.");
//             });
//     };

//     return (
//         <div className='forgot'>
//             <div className="container-fluid">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="card mt-5 p-5">
//                             <div className="card-body">
//                                 <h3 className="card-title text-right">My Facebook 2</h3>
//                                 <h6 className="card-text text-right">Hello! Let's get started</h6>
//                                 <p className="card-text text-right">Forgot password to continue.</p>
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     <div className="form-group mt-4">
//                                         <input type="email"
//                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                                                placeholder="Email"
//                                                {...register('email', {
//                                                    required: 'Email is required',
//                                                    pattern: {
//                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                                        message: 'Invalid email address'
//                                                    }
//                                                })}
//                                         />
//                                         {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//                                     </div>
//                                     <div className="d-grid gap-2 mt-3">
//                                         <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

































