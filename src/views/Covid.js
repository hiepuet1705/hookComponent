import React from "react";

import useFetch from "../custom/fetchData";
const Covid = () => {
  // const [dataCovid, setDataCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const { data, isLoading, isError } = useFetch('https://covid-api.com/api/reports?date=2020-03-15')

    let dataCovid = [];
     dataCovid = data.data;

  return (
    <div style={{ backgroundColor: '#282c34', color: 'white', marginTop: '0px' }}>
      <table id="customers">

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
          {!isError && !isLoading && dataCovid && dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
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
    </div>
  )
}
export default Covid;