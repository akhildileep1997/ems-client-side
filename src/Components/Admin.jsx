import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Admin.css'
import axios from 'axios'


function Admin() {
  const [allEmployee, setAllEmployee] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/get-employees')
    console.log(response.data.employee); // array of data
    setAllEmployee(response.data.employee)
  }
  const deleteEmp = async (_id) => {
    console.log(_id);
    const response = await axios.delete('http://localhost:8000/deleteEmployee/' + _id)
    .then((response)=>{
      console.log(response);
      alert(response.data.message)
      fetchData() // calling the data again
    })
    .catch((error)=>{
      alert("cannot find employee")
    })

  }
  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>
      <div className="container">
        <h3 className='m-5 text-center'>Employee Management System</h3>
        <p style={{ textAlign: 'justify' }}>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>

        {/* will navigate to add page */}
        <Link to={'/add'}>
          <button className='my-5 bton'> Add <i className="fa-solid fa-user-plus"></i></button>
        </Link>

        <div className="table mb-5">
          <MDBTable small>
            <MDBTableHead >
              <tr >
                <th className='fs-5' scope='col'>No</th>
                <th className='fs-5' scope='col'>Name</th>
                <th className='fs-5' scope='col'>Age</th>
                <th className='fs-5' scope='col'>Designation</th>
                <th className='fs-5' scope='col'>Salary</th>
                <th className='text-center fs-5' scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                allEmployee?.map((item) => (
                  <tr>
                    <th scope='row'>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                      <div className='d-flex justify-content-around'>
                       <Link to={'edit/'+item.id}>
                       <button className='btn'>
                          <i className='fa-solid fa-pen text-success'></i>
                        </button>
                       </Link>
                       <Link to={'view/'+item.id}>
                       <button className='btn'>
                        <i className="fa-solid fa-eye text-info"></i>
                        </button></Link>
                        <button onClick={() => deleteEmp(item._id)} className='btn'>
                          <i className='fa-solid fa-trash text-danger '></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </>

  )
}

export default Admin