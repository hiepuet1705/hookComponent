import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import moment from 'moment'
import useFetch from "../custom/fetchData";
const Covid = () => {
  // const [dataCovid, setDataCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const {data,isLoading,isError} = useFetch('https://covid-api.com/api/reports?date=2020-03-15')


  return (
    <>
      <table id="customers">
        {console.log(data)}
        <thead>
          <tr>

            <th >Province</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Death</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {!isError && !isLoading && data && data.length > 0 &&
            data.map((item, index) => {
              return (<tr key={index}>

                <td>{item.region.province}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
              </tr>)
            })}

          {isLoading === true && <tr>
            <td colSpan='5' style={{ textAlign: 'center' }} >Loading.....</td>
          </tr>}

          {isError === true && <tr>
            <td colSpan='5' style={{ textAlign: 'center' }} >Somethings went wrong.....</td>
          </tr>}

        </tbody>

      </table>
    </>
  )
}
export default Covid;