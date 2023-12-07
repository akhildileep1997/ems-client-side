import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
              <MDBNavbar className='bg-warning' >
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'white'}} href='/'>
            <img
              src='https://th.bing.com/th/id/OIP.el_va5RP_jdut0cU5T84LQAAAA?pid=ImgDet&rs=1'
              height='70'
              width='70'
              alt=''
              loading='lazy'
              className='me-3'
              style={{borderRadius:'50%',border:'4px solid white'}}
            />
            <h3>Employee-Management-System</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header