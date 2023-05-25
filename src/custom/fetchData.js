import { useEffect,useState } from "react";
import axios from "axios";
const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false); 

    useEffect(() => {
        try {
        async function FetchData() {
        
            const res = await axios.get(url)
            let data = res && res.data ? res.data.data : [];
    
            data = data.filter((item, index) => { return item.region.name == "US" })
            setData(data);
            setIsLoading( );
            setIsError(false);
           
        
        }
        FetchData();
      } catch (error) {
        setIsError(true);
        console.log('error name: ', error.name)
        console.log('error message: ', error.message)
      }
       
      }, [])
      return {
        data,isError,isLoading
      }
}
export default useFetch