import axios from "axios";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import './forgotpass.component.scss'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Forgotpassword() {

    const Navigate = useNavigate();

    const [email, setEmail] = useState();

    const { register, formState: { errors } } = useForm();


    function saveData() {
        const obj = {
            email: email
        }
        axios({
            method: "POST",
            url: "http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password ",
            data: obj
        }).then(() => {
            toast.success("check your email");
        })

        Navigate('/resetpass')

    }

    return (
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

    )
}

































