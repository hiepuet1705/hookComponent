import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import moment from 'moment'
const Covid = () => {
    const [dataCovid,setDataCovid] = useState([]);
    useEffect(() => {
        async function FetchData() {
          const res = await axios.get('https://covid-api.com/api/reports?date=2020-03-14')
          let data = res && res.data ? res.data.data : [];
    
          data = data.filter((item,index)=>{return item.region.name == "US"})
          setDataCovid(data)
        }
        FetchData();
      }, [])
    return(
        <>
         <table id="customers">
          {console.log(dataCovid)}
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
            {dataCovid && dataCovid.length>0 && 
            dataCovid.map((item,index) => {
              return( <tr key={index}>
      
                 <td>{item.region.province}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
              </tr>)
            })}
         
         
          </tbody>
          
        </table>
        </>
    )
}
export default Covid;