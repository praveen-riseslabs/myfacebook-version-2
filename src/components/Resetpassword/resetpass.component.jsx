import axios from "axios";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './resetpass.component.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Resetpassword() {
    const Navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const saveData = (data) => {
        axios({
            method: "POST",
            url: "http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password",
            data: data
        }).then(() => {
            toast.success("Successfully changed password");
            Navigate('/login');
        }).catch(error => {
            console.error('Error:', error);
            toast.error("An error occurred. Please try again later.");
        });
    }

    return (
        <div className='reset'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5 p-5">
                            <div className="card-body">
                                <h3 className="card-title text-right">My Facebook 2</h3>
                                <h6 className="card-text text-right">Hello! Let's get started</h6>
                                <p className="card-text text-right">Reset password to continue.</p>
                                <form onSubmit={handleSubmit(saveData)}>
                                    <div className="form-group mt-4">
                                        <input type="number" className={`form-control ${errors.otp ? 'is-invalid' : ''}`} id="otp" placeholder="OTP"
                                            {...register('otp', { required: 'OTP is required' })}
                                            value={otp}
                                            onChange={e => setOtp(e.target.value)} />
                                        {errors.otp && <div className="invalid-feedback">{errors.otp.message}</div>}
                                    </div>
                                    <div className="form-group mt-4">
                                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password"
                                            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)} />
                                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                    </div>
                                    <div className="form-group mt-4">
                                        <input type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" placeholder="Confirm Password"
                                            {...register('confirmPassword', { required: 'Confirm Password is required', validate: value => value === password || 'Passwords do not match' })}
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)} />
                                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
      )
}