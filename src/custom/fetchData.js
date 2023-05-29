import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    
      async function FetchData() {
        try {
        const res = await axios.get(url, {
          cancelToken: ourRequest.token,
        })
       
        let data = res && res.data ? res.data: [];
        
        setData(data);
        setIsLoading(false);
        setIsError(false);

      } catch (error) {
        setIsError(true);
        console.log('error name: ', error.name)
        console.log('error message: ', error.message)
      }
      }
      setTimeout(() => {
        
          FetchData();

       
      }, 500)
    
    return () => {
      ourRequest.cancel("unmounted");
    }

  }, [url])
  return {
    data, isError, isLoading
  }
}
export default useFetch