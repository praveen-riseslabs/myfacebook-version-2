import {Link} from 'react-router-dom';
import './login.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export function Login(){

    const [email, setEmail]=useState();
    const [password, setPassword]= useState();
    
    const { register, formState: { errors } } = useForm();

    function saveData(){
        const data={
            email:email,
            password:password
        }
        axios({
            method:"POST",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
            data:data,
        }).then((res)=>{
            if(res.status==200){
                alert("login successfull")
            localStorage.setItem("userinfo",JSON.stringify(res.data));
            }else{
                alert("login failed")
            }

        })


    //   axios({
    //     method:'POST',
    //     url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
    //     data:data
    //   }).then(()=>{
    //     alert("login successful.....")
    // })
    }


    return(
      <>
      <div className='login'>
      <div class="container-fluid ">
          <div class="row justify-content-center ">
              <div class="col-md-6">
                  <div class="card mt-5 p-5 d-flex ">
                      <div class="card-body ">
                          <h4 class="card-title text-right">My Facebook 2</h4>
                          <h6 class="card-text text-right">Hello! Let's get started</h6>
                          <p class="card-text text-right">Sign to continue.</p>
                          <form>

                              <div class="form-group mt-4">
                                  <input type="email" class="form-control" id="email" placeholder="email" {...register('email', { required: 'Email is required' })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}  onChange={e=>setEmail(e.target.value)}></input>
                              </div>

                              <div class="form-group mt-4">
                                  <div class="input-group">
                                      <input type="password" class="form-control" id="password" placeholder="Password" {...register('password', { required: 'Password is required' })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message} onChange={e=>setPassword(e.target.value)}></input>
                                      {/* <div class="input-group-append">
                                          <span class="input-group-text">
                                              <i class="fa fa-eye"></i>
                                          </span></div> */}
                                  </div>
                              </div>
                              
                              <div class="d-grid gap-2 mt-3">
                                   <button type="button" class="btn btn-danger btn-block" onClick={()=>saveData()} >SIGN IN</button>
                              </div>

                              <div class="row">
                              <div class="form-group form-check p-5 mt-3 col-6">
                                  <input type="checkbox" class="form-check-input" id="rememberMe"></input>
                                  <label class="form-check-label" for="rememberMe">Keep me signed in</label>
                              </div>
                                <div class="text-right mt-3  p-5  col-6">
                                  <Link to="/forgotpass">Forgot password?</Link>
                                </div>
                              
                              </div>
                              
                              <div class="text-center ">
                                  Don't have an account? <Link to="/signup">Create one</Link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
      </>
    )
  }