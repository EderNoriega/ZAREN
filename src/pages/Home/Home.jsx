import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import RopaDisplay from '../../components/RopaDisplay/RopaDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Discount from '../../components/Discount/Discount'
import Chat from '../../components/Chat/Chat'

const Home = () => {

const [category,setCategory] = useState("All")

  return (
    <div>
    <Header/>
    <Discount/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <RopaDisplay category={category}/>
    <AppDownload/>
    <Chat/>
    </div>
  )
}

export default Home