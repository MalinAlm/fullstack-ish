import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <>{data.length > 0 ? <img src={data[0].image} /> : <p>Loading...</p>}</>
  );
}

export default Home;
