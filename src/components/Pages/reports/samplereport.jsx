import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from 'react-hook-form';
export function SampleReports(){

    const Navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [medicalplan, setMedicalplan] = useState('');
    const [phone, setPhone] = useState('');
    const [emergency, setEmergency] = useState('');
    const [address, setAddress] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const [attendphysician,setAttendphysician]=useState('');
    const [diagnosis,setDiagnosis]=useState('');
    const [testresult, setTestresult]=useState('');
    const [prescribedaction,setPrescribedaction]=useState('');
    const [prescribedmedication,setPrescribedmedication] = useState('');
    const [notes,setNotes] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
     
    function saveData(){
        const data={
            name:name,
            dob:dob,
            medicalplan:medicalplan,
            phone:phone,
            emergency:emergency,
            address:address,
            date: date,
            description: description,
            attendphysician:attendphysician,
            diagnosis:diagnosis,
            testresult:testresult,
            prescribedaction:prescribedaction,
            prescribedmedication:prescribedmedication,
            notes:notes
        }

        let token = JSON.parse(localStorage.getItem("userinfo")).token;
        axios({
            method:"Post",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/addEmpDetails",
            data:data,
            headers: {
                'Authorization': ' Bearer ' + token
              }
        
        }).then(()=>{
            alert("Employee data saved successfully.....")
        })
        Navigate('/employeedetails')
     };

    return(
       <div className="container"style={{ border: '1px solid black', padding: '50px' }}>
            <h3 style={{color: "red"}}className='text-center'>My Health Record</h3>
            
            <form onClick={handleSubmit(saveData)}>
            <div className='row'>
                <input type='button' className='btn btn-primary'></input>
            </div>
            
            <div className='container-fluid'>
                 <div className='reports'>
                     <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Name:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='enter the name' className='form-control'
                                         {...register('name', { required: 'Name is required' })} value={name} 
                                          onChange={e => setName(e.target.value)} /> {errors.name && 
                                          <div className="invalid-feedback">{errors.name.message}</div>}
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="dob" className='col-5'>Date of birth:</label>
                                    <div className='col-7'>
                                        <input type='date' placeholder='DD-MM-YYYY' className='form-control' 
                                         {...register('dob', { required: 'Date of birth is required' })} value={dob} 
                                          onChange={e => setDob(e.target.value)} /> {errors.dob && 
                                          <div className="invalid-feedback">{errors.dob.message}</div>}
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Mediacal plan:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='xyz' className='form-control' 
                                        {...register('medicalplan', { required: 'Medicalplan is required' })} value={medicalplan} 
                                        onChange={e => setMedicalplan(e.target.value)} /> {errors.medicalplan && 
                                        <div className="invalid-feedback">{errors.medicalplan.message}</div>}
                                    </div> 
                            </div>
                            
                        </div>
                        <div className='col-6'>
                        <div className='form-group'>
                                <label for="report" className='col-5'>Phone:</label>
                                    <div className='col-7'>
                                        <input type='tel' id="phone" name="phone" placeholder="Enter the number"  className='form-control' 
                                        {...register('phone', { required: 'Phone is required' })} value={phone} 
                                        onChange={e => setPhone(e.target.value)} /> {errors.phone && 
                                        <div className="invalid-feedback">{errors.phone.message}</div>}
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Emergency contact no:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='**********' className='form-control' 
                                        {...register('emergency', { required: 'Emergency is required' })} value={emergency} 
                                        onChange={e => setEmergency(e.target.value)} /> {errors.emergency && 
                                        <div className="invalid-feedback">{errors.emergency.message}</div>}
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Address:</label>
                                    <div className='col-7'>
                                        <textarea placeholder='Address......' className='form-control' name='desc' 
                                        {...register('address', { required: 'Address is required' })} value={address} 
                                        onChange={e => setAddress(e.target.value)} /> {errors.address && 
                                        <div className="invalid-feedback">{errors.address.message}</div>}
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
            <div className='row'>
                <input type='button' className='btn btn-primary mt-2'></input>
            </div>
            
            <h3 className="col-12 text-center mb-3 ">Medical Visits</h3>
            <div >
            
            <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Date</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="date" className="form-control" 
                        {...register('date', { required: 'Date is required' })} value={date} 
                        onChange={e => setDate(e.target.value)} /> {errors.date && 
                        <div className="invalid-feedback">{errors.date.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Description</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control" 
                         {...register('description', { required: 'Description is required' })} value={description} 
                          onChange={e => setDescription(e.target.value)} /> {errors.description && 
                          <div className="invalid-feedback">{errors.description.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Attending Physician</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control" {...register('attendingphysician', { required: 'Attending Physician is required' })} value={attendphysician} 
                                          onChange={e => setAttendphysician(e.target.value)} /> {errors.attendphysician && 
                                          <div className="invalid-feedback">{errors.attendphysician.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Diagnosis</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="email" className="form-control" {...register('diagnosis', { required: 'Diagnosis is required' })} value={diagnosis} 
                                          onChange={e => setDiagnosis(e.target.value)} /> {errors.diagnosis && 
                                          <div className="invalid-feedback">{errors.diagnosis.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">TestResults</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control"  {...register('testresults', { required: 'TestResults is required' })} value={testresult} 
                                          onChange={e => setTestresult(e.target.value)} /> {errors.testresult && 
                                          <div className="invalid-feedback">{errors.testresult.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Prescribed Action</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control"  {...register('prescribedaction', { required: 'PrescribedAction is required' })} value={prescribedaction} 
                                          onChange={e => setPrescribedaction(e.target.value)} /> {errors.prescribedaction && 
                                          <div className="invalid-feedback">{errors.prescribedaction.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Prescribed Medication</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control"  {...register('prescribedmedication', { required: 'Prescribedmedication is required' })} value={prescribedmedication} 
                                          onChange={e => setPrescribedmedication(e.target.value)} /> {errors.prescribedmedication && 
                                          <div className="invalid-feedback">{errors.prescribedmedication.message}</div>}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-2">
                        <label htmlFor="form-label">Notes</label>
                    </div>
                    <div className="col-10 mb-3">
                        <input type="text" className="form-control" {...register('notes', { required: 'Notes is required' })} value={notes} 
                                          onChange={e => setNotes(e.target.value)} /> {errors.notes && 
                                          <div className="invalid-feedback">{errors.notes.message}</div>}
                    </div>
                </div>

                <div className=" text-center">
                    <button type="button" className="btn btn-primary " value="Submit" > Save </button>

                    </div>
            </div>
            </form>
        </div>
                
    )
}
