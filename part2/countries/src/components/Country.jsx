import Display from "./Display"
import { useState,useEffect } from "react"
const Country = ({ countries, search }) => {
  const [selectedCountry,setCountry]=useState(null)
  const filteredCountries = countries.filter(con => 
     con.name.common.toLowerCase().includes(search.toLowerCase()))
  const handleClick=(country)=>{
    setCountry(country)
    //console.log('submit clicked for ',selectedCountry)
  }
  //everytime search is started, it is changed, hence display becomes null too.
  useEffect(() => {
  setCountry(null)
    }, [search])  
  if(search=== ''){
    return null
  }   
  if (filteredCountries.length>10){
    return <p>too many {filteredCountries.length} to display</p>
  }
  else{
    return(
      <>
      {filteredCountries.map(con=>
      <p key={con.cca3}>{con.name.common} 
      <button onClick={()=>handleClick(con)}>show</button></p>
    )}
    {selectedCountry && (
      <Display country={selectedCountry}/>
    )}
      </>
    ) 
  }   
}

export default Country