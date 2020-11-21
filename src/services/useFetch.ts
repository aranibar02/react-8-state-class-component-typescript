import { useState, useEffect, ReactElement } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

interface ISku {
  sku: string,
  size: Number,
};

interface IProduct {
  id: Number,
  name: string,
  description: string,
  price: Number,
  image: string,
  category: string,
  skus: Array<ISku>,
};




export default function useFetch(url:string) {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const products = Array<any>();
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          products.push(json);
          console.log(products);
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


type FetchProps = {
  url: string,
  children(data: Array<{}>, loading: boolean, error: string): ReactElement;
}

export const Fetch: React.FC<FetchProps> = ({ url, children }) => {
  const { data, loading, error } = useFetch(url);
  return children(data, loading, error);
}

