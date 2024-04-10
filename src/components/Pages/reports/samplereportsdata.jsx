import axios from "axios";
import { useEffect, useState } from "react";

export function SampleReportsData(){

    const [Reports, setReports]=useState([])

    const headers=["Date","Description"," Attending Physician","Diagonosis","Test Results","Prescribed Action","Prescribed Medication","Notes"]
   
    function apiData(){
        let token = JSON.parse(localStorage.getItem("userinfo")).token;
        axios({
            method:"GET",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/getEmployeeDetails",
            headers: {
                'Authorization': ' Bearer ' + token
              }
        }).then((response)=>{
            setReports(response.data)
        })
    }
    useEffect(()=>{
        apiData();
    },[])
    return(
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {
                            headers.map((item)=>{
                            return(
                                <th>
                                {item}
                            </th>
                            )})
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Reports.map((item)=>{
                        return(
                            <tr>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td>{item.attendingphysician}</td>
                            <td>{item.diagnosis}</td>
                            <td>{item.testresults}</td>
                            <td>{item.prescribedaction}</td>
                            <td>{item.prescribedmedication}</td>
                            <td>{item.notes}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}