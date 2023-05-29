

import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Home = () => {


  const user = useSelector(state => state?.user)
  console.log(user.user.name);


  return (
    <div>
      <h1>Welcome ,
        <div>{user.user?.name}</div>
      </h1>
    </div>
  )
}

export default Home