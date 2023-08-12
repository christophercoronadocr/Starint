import React from 'react'

const ServiceMenuList = ({children}) => {
  return (
    <>
        <ul className="divide-y divide-slate-100">
            {children}
        </ul> 
    </>
  )
}

export default ServiceMenuList
