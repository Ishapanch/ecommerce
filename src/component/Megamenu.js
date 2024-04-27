import React from 'react'
import './Megamenu.css'
import {
    MDBContainer,
    MDBCol,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
  } from 'mdb-react-ui-kit';
export default function Megamenu() {

  const menulist = [
    "New",
    "Furniture",
    "Outdoor",
    "Decors & Mirrors",
    "Lightening",
    "Rugs",
    "Pillows & Throws",
    "Bedding & Bath",
    "Tabletop & Bar",
    "Gifts" ,
    "Sale",
  ];

  return (
    <MDBNavbar expand='lg' className='bg-hover'>
    <MDBContainer >
      <MDBNavbarNav className='me-auto ps-lg-0 justify-content-center' style={{ paddingLeft: '0.15rem' }}>

      {menulist.map((menu) => (
        <MDBNavbarItem key={menu}>
          <MDBNavbarLink active aria-current='page' href='#' type={menu}>
          {menu}
          </MDBNavbarLink>
        </MDBNavbarItem>

      ))}
       

      </MDBNavbarNav>
    </MDBContainer>
  </MDBNavbar>
  )
}
