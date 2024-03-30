import React from "react";

const Table = ({data}) => {
    return(
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brewery_type</th>
                        <th>State_province</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(brew => (
                        <tr key={brew.id}>
                            <td>{brew.name}</td>
                            <td>{brew.brewery_type}</td>
                            <td>{brew.state_province}</td>
                            <td>{brew.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Table;
