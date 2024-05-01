import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import './App.css'

function App() {

  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // //fetching the products from the backend
  // useEffect(() => {
  //   //fetching the products from the backend
  //   (async () => {
  //     try {
  //       setError(false);
  //       setLoading(true);
  //       const res = await axios.get('/api/products')
  //       console.log(res);
  //       setProducts(res.data)
  //       setLoading(false)
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }

  //   })()

  // }, [])
  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }






  //another process
  // const [products, error, loading] = ReactqueryFunc('/api/products');
  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>

      <h1> API IN REACT</h1>
      <h2>Number of products are: {products.length}</h2>


    </>
  )
}

export default App






// const ReactqueryFunc = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);



//   //fetching the products from the backend
//   useEffect(() => {

//     //fetching the products from the backend
//      ;(async () => {

//       try {
//         setError(false);
//         setLoading(true);
//         const res = await axios.get(urlPath)
//         console.log(res);
//         setProducts(res.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }

//     })();

//   }, [])

//   return [products, error, loading];

// }

