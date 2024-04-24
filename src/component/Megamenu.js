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
      <MDBNavbarNav className='me-auto ps-lg-0' style={{ paddingLeft: '0.15rem' }}>

      {menulist.map((menu) => (
        <MDBNavbarItem key={menu}>
          <MDBNavbarLink active aria-current='page' href='#' type={menu}>
          {menu}
          </MDBNavbarLink>
        </MDBNavbarItem>

      ))}
       

        <MDBNavbarItem className='position-static megamenu'>
          <MDBDropdown>
            <MDBDropdownToggle tag='a' className='nav-link'>
              Mega menu
            </MDBDropdownToggle>
            <MDBDropdownMenu
              className='mt-0 w-100 justify-content-center megamenu-new'
              style={{
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
              }}
            >
              <MDBContainer >
                <MDBRow className='my-4'>
                  <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                    <MDBListGroup flush>
                      <MDBListGroupItem tag='a' href='#' action>
                        Lorem ipsum
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Dolor sit
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Amet consectetur
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Cras justo odio
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Adipisicing elit
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCol>
                  <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                    <MDBListGroup flush>
                      <MDBListGroupItem tag='a' href='#' action>
                        Explicabo voluptas
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Perspiciatis quo
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Cras justo odio
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Laudantium maiores
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Provident dolor
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCol>
                  <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                    <MDBListGroup flush>
                      <MDBListGroupItem tag='a' href='#' action>
                        Iste quaerato
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Cras justo odio
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Est iure
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Praesentium
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Laboriosam
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCol>
                  <MDBCol md='6' lg='3'>
                    <MDBListGroup flush>
                      <MDBListGroupItem tag='a' href='#' action>
                        Cras justo odio
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Saepe
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Vel alias
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Sunt doloribus
                      </MDBListGroupItem>
                      <MDBListGroupItem tag='a' href='#' action>
                        Cum dolores
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBContainer>
  </MDBNavbar>
  )
}
