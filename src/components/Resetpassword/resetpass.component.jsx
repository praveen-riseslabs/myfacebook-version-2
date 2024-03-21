import axios from "axios";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom'
import './resetpass.component.scss'

export function Resetpassword(){
    const Navigate=useNavigate();

    const { register, formState: { errors }} = useForm();

    const[otp,setOtp]=useState();
    const[password,setPassword]=useState();
    const[confirmpasword,setConfirmpassword]=useState();
    const { toast } = require('react-toastify');
  require('react-toastify/dist/ReactToastify.css');

    function saveData(){
        const obj={
            otp: otp,
            password: password,
            confirmpasword: confirmpasword
        }
        axios({
            method:"POST",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password ",
            data:obj
        }).then(()=>{
            toast.success("successfully changed password")
        })
        Navigate('/login')
    }
    return(
      <div className='reset'>
      <div class="container-fluid ">
          <div class="row justify-content-center ">
              <div class="col-md-6">
                  <div class="card mt-5 p-5">
                      <div class="card-body ">
                          <h3 class="card-title text-right">My Facebook 2</h3>
                          <h6 class="card-text text-right">Hello! Let's get started</h6>
                          <p class="card-text text-right">Resetpassword to continue.</p>
                              <div class="form-group mt-4">
                                  <input type="number" class="form-control" id="otp" placeholder="OTP" {...register('otp',{ required: 'OTP is required'})}
                                  error={Boolean(errors.otp)}
                                  helperText={errors.otp?.message} onChange={e=>setOtp(e.target.value)}></input>
                              </div> 
                              <div class="form-group mt-4">
                                  <input type="password" class="form-control" id="password" placeholder="Password" {...register('password',{ required: 'Password is required'})}
                                  error={Boolean(errors.password)}
                                  helperText={errors.password?.message} onChange={e=>setPassword(e.target.value)}></input>
                              </div> 
                              <div class="form-group mt-4">
                                  <input type="password" class="form-control" id="confirmpassword" placeholder="ConfirmPassword" {...register('Confirmpassword',{ required: 'Email is required'})}
                                  error={Boolean(errors.confirmpassword)}
                                  helperText={errors.confirmpassword?.message} onChange={e=>setConfirmpassword(e.target.value)}></input>
                              </div>                   
                              <div class="d-grid gap-2 mt-3">
                                   <button type="button" class="btn btn-primary btn-block"value="submit" onClick={()=>saveData()} >Submit</button>
                              </div>
                              <div className="mt-3">
                              <Link to="/login">Login?</Link>

                              </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
   
    )
}

































