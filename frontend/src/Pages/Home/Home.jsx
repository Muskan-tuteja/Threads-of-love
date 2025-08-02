import React,{useState}from 'react'
import  './Home.css'
import Header from '../../components/Header/Header'
import Collection from '../../components/Collection/Collection'
import RakhiDisplay from '../../components/RakhiDisplay/RakhiDisplay'


const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Collection category={category} setCategory={setCategory}/>
      <RakhiDisplay category={category}/> 
    
    </div>
  )
}

export default Home
