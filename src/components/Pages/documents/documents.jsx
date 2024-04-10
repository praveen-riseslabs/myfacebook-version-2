
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import '../documents/documents.scss';

export function Documents() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {

    const data = {
      title: title,
      name: name,
      file: file,
      description: description,
    }
    alert(JSON.stringify(data));
    navigate("/viewdocuments"); 
  }

  return (
    <div className='container mt-5'>
      <div className='row card1'>
        <div className='col-sm-6 card-body1' >
          <h3 className="card-title1">Upload Documents</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group row'>
              <label className='col-sm-3'>Title :</label>
              <div className='col-sm-9'>
                <input type='text' className='form-control ' id='title' placeholder='Give title to document'></input>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3'>Name :</label>
              <div className='col-sm-9'>
                <input type='text' className='form-control ' id='name' placeholder='Give name of person'></input>
              </div>
            </div>
            <div className='form-group row'>
              <label type="fileInput" className='col-sm-3'>Choose File :</label>
              <div className='col-sm-9'>
                <input type="file" className="form-control-file" id="fileInput" />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3'>Description :</label>
              <div className='col-sm-9'>
                <textarea rows='3' className='form-control ' id='title' placeholder='Give somedescription about document'></textarea>
              </div>
            </div>
            <div className='p-9'>
              <label className='col-sm-3'></label>
              <button type="submit" className="btn btn-primary ">Save</button>
              <button type="reset" className="btn btn-secondary ms-3">Cancel</button>
              </div>
    </form>
      </div >
    </div >
    </div >
  );
}