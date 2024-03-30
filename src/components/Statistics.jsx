import React from "react";

const Statistics = ({items, filtered}) => {
    let maxCount = 0;
    let modeCountry = null;
      // Function to find the mode of an array
    function mode(arr) {
        return arr.reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
        }, {});
    }
      
      // Extract countries from the list
    //const states = items.map(brewery => brewery.state_province);
    if(filtered.length>0){
        const states = filtered.map(brew => brew.state_province);
        // Calculate the mode of the countries
        const stateCounts = mode(states);

        // Find the country with the highest count
        // let maxCount = 0;
        // let modeCountry = null;
        for (const state in stateCounts) {
            if (stateCounts[state] > maxCount) {
            maxCount = stateCounts[state];
            modeCountry = state;
            }
        } 
    }else{
        const states = items.map(brew => brew.state_province);
        // Calculate the mode of the countries
        const stateCounts = mode(states);

        // Find the country with the highest count

        for (const state in stateCounts) {
            if (stateCounts[state] > maxCount) {
            maxCount = stateCounts[state];
            modeCountry = state;
            }
        } 
    }

      
    // console.log(`The country with the most breweries is: ${modeCountry} (${maxCount} breweries)`);
    // console.log(filtered);
      

    return (
        <div className="statistics">
            <div className=" card total">
                <h3>Total number of breweries</h3>
                <p>{items.length}</p>
            </div>
            <div className="card mode">
                <h3>State with most breweries</h3>
                <p>{modeCountry}</p>
            </div>
            <div className="card searched">
                <h3>Total breweries searched</h3>
                <p>{filtered.length}</p>
            </div>
        </div>
    )

};

export default Statistics;
