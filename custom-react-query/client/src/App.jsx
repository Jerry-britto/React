import { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";

function App() {
  // without custom react query
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false); // handling 1st case which is error from api
  const [loading, setLoading] = useState(false); // handling 2nd case which is delay from api
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController(); // for race condition
    (async () => {
      try {
        setLoading(true); // initally before calling loading occurs
        setError(false); // initally before calling no error occurs
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false); // no loading occurs if the data is received
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled ", error.message);
          return;
        }
        setError(true);
        setLoading(false); // no loading occurs if any error occurs
      }

      // this code runs when the component is unmounted or when it's work is completed
      // it was used for sending the requests in sequence
      // this is for handling raise condition which is used to get the result of the latest request

      // if we don't want to send multiple request to api due to getting character of every search input we make use of the concept of debouncing
      return () => {
        controller.abort();
      };
    })(); //iffe
  }, [search]);

  // with custom react query
  // const [products, error, loading] = customReactQuery("/api/products");

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   // if there is a change in the state the entire component renders
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>hello</h1>
      {loading && <h1>Loading ...</h1>}
      {error && <h2>Soemthing went wrong</h2>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of Products is {products.length}</h2>
    </>
  );
}

export default App;

const customReactQuery = (urlpath) => {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false); // handling 1st case which is error from api
  // const [loading, setLoading] = useState(false); // handling 2nd case which is delay from api
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true); // initally before calling loading occurs
  //       setError(false); // initally before calling no error occurs
  //       const response = await axios.get(urlpath);
  //       console.log(response.data);
  //       setProducts(response.data);
  //       setLoading(false); // no loading occurs if the data is received
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false); // no loading occurs if any error occurs
  //     }
  //   })(); //iffe
  // }, []);
  // return [products, error, loading];
};
