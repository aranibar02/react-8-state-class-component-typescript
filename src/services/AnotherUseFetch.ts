import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export default function AnotherUseFetch(url:string) {
  const [data, setData] = useState({name:'',description:'',price:1,image:'',category:''});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
          
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading };
}
