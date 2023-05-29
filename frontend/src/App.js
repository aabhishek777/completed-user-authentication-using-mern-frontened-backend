import React, { useEffect } from 'react'
import RoutingComponents from './RoutingComponents'
import { load } from './redux/action';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  console.log(localStorage.getItem("token"));

  const getInfo = async () => {
    const token = localStorage.getItem("token");
    const data = await load(token);
    if (data?.data.token) {
      dispatch({ type: "load", payload: data?.data })
    }
  }


  useEffect(() => {
    getInfo();
  }, [])




  return (
    <RoutingComponents />
  )
}

export default App