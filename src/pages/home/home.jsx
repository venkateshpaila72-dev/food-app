import React from 'react'
import './home.css'
import Header1 from '../../components/header/header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import ExploreMenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/appdownload/AppDownload'
const Home = () => {
  const [category,setCategory]=React.useState("All");
  return (
    <div>
      <Header1/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
