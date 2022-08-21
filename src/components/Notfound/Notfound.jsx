import React from 'react';
import notFound from '../../images/wp404error.jpg'

export default function Notfound() {
  return (
    <>
    <div className='text-center'>
      <img src={notFound} alt="" />
    </div>
    </>
  )
}
