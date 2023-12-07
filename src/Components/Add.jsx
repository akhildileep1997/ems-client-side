import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
  //for navigation
  const navigate = useNavigate()

  //for input values
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

const handleAdd=async(e)=>{
  const body ={
    id,
    name,
    age,
    designation,
    salary
  }
  const response = await axios.post('http://localhost:8000/addEmployee',body)
  .then((response)=>{
    console.log(response);
    console.log(id,name,age,designation,salary);
    alert(response.data.message)
    navigate('/')
  })
  .catch((error)=>{
    alert("employee id already exist")
  })

}
 
  return (
    <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="container">
        <h3 className='text-center m-5'>Add Employee</h3>
        <div style={{padding:'30px',border:'2px solid orange'}} className="form w-50">
      <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)}  label='Name' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAge(e.target.value)}  label='Age' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setDesignation(e.target.value)}  label='Designation' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setSalary(e.target.value)}  label='Salary' id='formControlLg' type='text' size='lg' />
      <div style={{display:'flex',justifyContent:"space-evenly"}} className='mt-3'>
      <Link to={'/'}>      
      <MDBBtn  color='warning'> Back To Home</MDBBtn>
      </Link>
      <MDBBtn onClick={(e)=>handleAdd(e)} color='success'> Add Employee</MDBBtn>
      </div>
      
  
        </div>
        </div>
    </>
  )
}

export default Add