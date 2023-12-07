import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';




function View() {

  // for params
  const {id}= useParams()
  console.log(id);

  //for holding data
  const[emp,setEmp] = useState([])

  const getAnEmp = async() =>{
   const response = await axios.get('http://localhost:8000/getAnEmployee/'+id)
  //  console.log(response.data.employee);
   setEmp(response.data.employee)
  }
  console.log(emp);

  useEffect(()=>{
    getAnEmp()
  },[])

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:'120px',marginBottom:'120px',minHeight:'30vh',border:'2px solid orange',width:'50%',padding:'50px',borderRadius:'30px'}} className="main">
        <div className="image">
          <img width='300' src="https://www.pngall.com/wp-content/uploads/8/Verification.png" alt="" />
        </div>
        <div style={{width:'500px',marginLeft:'50px',marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center'}} className="details">
        <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title> <h1>
        Name : {emp.name}
        </h1>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> <h5>Designation : {emp.designation}</h5> </Card.Subtitle>
        <Card.Text>
       id: {emp.id} <br />
       Age : {emp.age} <br />
       salary : {emp.salary} <br />
       <Link to={'/'}> <button  style={{padding:'5px',backgroundColor:'orange',color:'white', borderRadius:'10px', marginTop:'20px'}}> Back to Home</button>
</Link>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
  )
}

export default View