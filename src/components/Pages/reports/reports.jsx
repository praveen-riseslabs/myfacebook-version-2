import React from 'react'; 
export function Reports(){

    return(
      <div className="container"style={{ border: '1px solid black', padding: '50px' }}>
            <h3 style={{color: "red"}}className='text-center'>My Health Record</h3>
            <div className='row'>
                <input type='button' className='btn btn-primary'></input>
            </div>
            <form >
            <div className='container-fluid'>
                 <div className='reports'>
                     <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Name:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='enter the name' className='form-control' name='desc'/>
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="dob" className='col-5'>Date of birth:</label>
                                    <div className='col-7'>
                                        <input type='datetime-local' placeholder='DD-MM-YYYY' className='form-control' name='desc' />
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Mediacal plan:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='xyz' className='form-control' name='desc'/> 
                                    </div> 
                            </div>
                            
                        </div>
                        <div className='col-6'>
                        <div className='form-group'>
                                <label for="report" className='col-5'>Phone:</label>
                                    <div className='col-7'>
                                        <input type='tel' id="phone" name="phone" placeholder="Enter the number"  className='form-control' />
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Emergency contact no:</label>
                                    <div className='col-7'>
                                        <input type='text' placeholder='**********' className='form-control' name='desc'/>
                                    </div> 
                            </div>
                            <div className='form-group'>
                                <label for="report" className='col-5'>Address:</label>
                                    <div className='col-7'>
                                        <textarea placeholder='Address......' className='form-control' name='desc' />
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </form>
            <div className='row'>
                <input type='button' className='btn btn-primary mt-2'></input>
            </div>

            <table className='table table-striped'>
      <thead>
        <tr>
            <th colSpan={9} className='text-center'><h3>Medical Vists</h3></th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Attending Physician</th>
          <th>Diagnosis</th>
          <th>Tests Results</th>
          <th>Prescribed Action</th>
          <th>Prescribed Medication</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(14)].map((_, index) => (
          <tr key={index}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type='submit' className='btn btn-info'>SAVE</button>
        <button type='refresh' className='btn btn-info'>cancel</button>
    </div>
        </div>
    )
}
 export default Reports;


// import React from 'react';

// export function Report(){
//     return(
//       <div style={{ border: '1px solid black', padding: '50px' }}>
//             <h3 style={{color: "red"}}className='text-center'>My Health Record</h3>
//             <div className='row'>
//                 <input type='button' className='btn btn-primary'></input>
//             </div>
//             <form >
//             <div className='container-fluid'>
//                  <div className='reports'>
//                      <div className='row'>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Name:</label>
//                                     <div className='col-7'>
//                                         <input type='text' placeholder='enter the name' className='form-control' name='desc'/>
//                                     </div> 
//                             </div>
//                             <div className='form-group'>
//                                 <label for="dob" className='col-5'>Date of birth:</label>
//                                     <div className='col-7'>
//                                         <input type='datetime-local' placeholder='DD-MM-YYYY' className='form-control' name='desc' />
//                                     </div> 
//                             </div>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Mediacal plan:</label>
//                                     <div className='col-7'>
//                                         <input type='text' placeholder='xyz' className='form-control' name='desc'/> 
//                                     </div> 
//                             </div>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Medical plan no:</label>
//                                     <div className='col-7'>
//                                         <input type='text' placeholder='12345' className='form-control' name='desc'/>
//                                     </div> 
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Emergency contact no:</label>
//                                     <div className='col-7'>
//                                         <input type='text' placeholder='**********' className='form-control' name='desc'/>
//                                     </div> 
//                             </div>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Address:</label>
//                                     <div className='col-7'>
//                                         <textarea placeholder='Address......' className='form-control' name='desc' />
//                                     </div> 
//                             </div>
//                            <div className='form-group'>
//                                 <label for="report" className='col-5'>Phone:</label>
//                                     <div className='col-7'>
//                                         <input type='tel' id="phone" name="phone" placeholder="Enter the number"  className='form-control' />
//                                     </div> 
//                             </div>
//                             <div className='form-group'>
//                                 <label for="report" className='col-5'>Alternate no:</label>
//                                     <div className='col-7'>
//                                         <input type='number' placeholder='Enter the Altnumber' className='form-control' name='altno' />
//                                     </div> 
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </div>
//             </form>
//             <div className='row'>
//                 <input type='button' className='btn btn-primary mt-2'></input>
//             </div>

//             <table className='table table-striped'>
//       <thead>
//         <tr>
//             <th colSpan={9} className='text-center'><h3>Medical Vists</h3></th>
//         </tr>
//         <tr>
//           <th>Date</th>
//           <th>Description</th>
//           <th>Attending Physician</th>
//           <th>Diagnosis</th>
//           <th>Tests Results</th>
//           <th>Prescribed Action</th>
//           <th>Prescribed Medication</th>
//           <th>Notes</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//       </tbody>
//     </table>

//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <button type='submit' className='btn btn-info'>SAVE</button>
//         <button type='refresh' className='btn btn-info'>cancel</button>
//     </div>
//         </div>
//     )
// }
// export default Report;