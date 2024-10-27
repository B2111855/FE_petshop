import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import FooterComponent from '../footer/FooterComponent'

<>
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@700&display=swap"
    rel="stylesheet"
  />
  {/* Icon Font Stylesheet */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
</>

function DefaultComponent({children}) {
  return (
    <div>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
    </div>
  )
}

export default DefaultComponent