import { useState, useEffect } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import Statistics from './components/Statistics';
import Table from './components/Table';

const ACCESS_KEY = import.meta.env.MY_ACCESS_KEY;

function App() {
  const [list, setList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  const [inputs, setInputs] = useState({
    name:"",
    brewery_type:""
  });

  useEffect(() => {
    const fetchAllSongData = async() => {
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=70`);
      const json = await response.json();
      setList(json);
      console.log(json);
    }
    fetchAllSongData().catch(console.error);
  }, []);

  const Searching = () => {
    if (inputs.name !== "" && inputs.brewery_type !== ""){
      const filteredData = list.filter((item) => item.name.toLowerCase().includes(inputs.name.toLowerCase()));
      const filteredData_2 = filteredData.filter((item) => item.brewery_type.toLowerCase().includes(inputs.brewery_type.toLowerCase()));
      setFilteredResults(filteredData_2)
      console.log("1st if statement is working")
    }else{
      if(inputs.name !== ""){
        const filteredData = list.filter((item) => item.name.toLowerCase().includes(inputs.name.toLowerCase()));
        setFilteredResults(filteredData)
        console.log("2nd if statement is working")
      }
      if(inputs.brewery_type !== ""){
        const filteredData = list.filter((item) => item.brewery_type.toLowerCase().includes(inputs.brewery_type.toLowerCase()));
        setFilteredResults(filteredData)
        console.log("3rd if statement is working")
      }
      if(inputs.name == "" && inputs.brewery_type == ""){
        alert("Enter the name of the brewery or the type to search!!")
        console.log("else statement is working")
      }      
    }
  }

  // const searchItems = searchValue => {
  //   setSearchInput(searchValue);
  //   if (searchValue !== "") {
  //     const filteredData = list.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(list);
  //   }
  // };

  // const selectItems = searchValue => {
  //   setSearchInput(searchValue);
  //   if (searchValue !== "") {
  //     const filteredData = list.filter((item) => item.brewery_type.toLowerCase().includes(searchValue.toLowerCase()));
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(list);
  //   }
  // };

  return (
    <div className='whole-page'>
      <SideNav />
      <div className='data'>
        <Statistics 
        items={list}
        filtered={filteredResults}
        />
        <div className='inputs'>
          <div className='nameFilter'>
            <input
            type='text'
            name='name'
            placeholder='Search name....'
            onChange={(e) => 
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]:e.target.value.trim(),
              }))
              }
            />
          </div>
          <div className='typeFilter'>
            <label htmlFor='filter'>Brewery type</label>
            <select id='filter' name="brewery_type" onChange={(e) => setInputs((prevState) => ({...prevState,[e.target.name]:e.target.value.trim(),}))}>
              <option value="">Select a brewery type</option>
              <option value="micro">Micro</option>
              <option value="nano">Nano</option>
              <option value="regional">Regional</option>
              <option value="brewpub">Brewpub</option>
              <option value="large">Large</option>
              <option value="planning">Planning</option>
              <option value="bar">Bar</option>
              <option value="contract">Contract</option>
              <option value="proprietor">Proprietor</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className='search'>
            <button className='search'onClick={Searching}>Search</button>
          </div>
        </div>
        {/* <ul>
          {searchInput.length > 0
            ? filteredResults.map((brew) => 
            <li key={brew.id}>{brew.name}</li>)
          :
          list && list.map((brew)=> {
            console.log(`Name is ${brew.name}`);
            return <li key={brew.id}>{brew.name}</li>
          })}
        </ul> */}
        {filteredResults.length === 0 ? <h2>List of all the breweries</h2>:<h2>List of Searched Breweries</h2>}
        <Table data={filteredResults.length > 0 ? filteredResults:list} />
      </div>
    </div>
  )
};
 
export default App;

