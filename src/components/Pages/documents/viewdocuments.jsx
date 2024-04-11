import { useState,useEffect } from "react";




export function GetDocuments(){
    const [documents,setDocuments]=useState([]);

    const DocumentsData=()=>{
        //axios get method
    }
    useEffect(() => {

        DocumentsData();
    
      }, [])
      return(
        <div>
            <table className="table table-primary table-striped table-hover">
                <thead>
                    <tr>
                    <td> Title</td>
                    <td> Name</td>
                    <td> File</td>
                    <td> Description</td>
                    </tr>
                </thead>
                <tbody>
                {documents && documents.map((row) => (
            <tr key={row.empId}
              sx={{ '&:last-child td , &:last-child th': { border: 0 } }}>
             <td>{row.title}</td>
             <td>{row.name}</td>
             <td>{row.file}</td>
             <td>{row.description}</td>
            </tr>
          ))}
                </tbody>
            </table>
        </div>
      )
    
}