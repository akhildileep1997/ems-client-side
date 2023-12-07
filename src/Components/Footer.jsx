import React from 'react'
import {
    MDBFooter,
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter className='bg-warning text-white'>
      <div className='text-center p-3' >
        © 2023 Copyright:
        <a className='text-white' href='/'>
          EmployeeManagementSystem.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer