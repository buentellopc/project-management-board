import { useEffect, useState } from "react";

const useFetch = (
  url: string
): [
  boolean,
  {
    id: number;
    title: string;
    body: string;
    lane: number;
  }[]
] => {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      body: string;
      lane: number;
    }[]
  >(
    {} as {
      id: number;
      title: string;
      body: string;
      lane: number;
    }[]
  );

  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return [loading, data];
};

export { useFetch };
