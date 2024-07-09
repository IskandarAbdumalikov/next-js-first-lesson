'use client'

import { useParams } from 'next/navigation'
import React from 'react'


const SinglePage = () => {
    let {id}= useParams()
    console.log(id);
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage