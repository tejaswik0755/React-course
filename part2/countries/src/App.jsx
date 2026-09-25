import { useState, useEffect } from "react";
import Country from './components/Country'
import countryService from './services/countries'
const App=()=>{

  const [search, setSearch]= useState('')
  const [countries, setCountries]= useState([])
  const baseUrl='https://studies.cs.helsinki.fi/restcountries/api/all'
  useEffect(()=>{
    countryService
    .getAll(baseUrl)
    .then(res=>{
      console.log('countries received');
      setCountries(res)})
  },[])
  const handleSearch=(event)=>{
    setSearch(event.target.value)
    
  }
return (<>

<p>find countries</p>
<input value={search} onChange={handleSearch}/>
<Country countries={countries} search={search}/>

</>)
}
export default App