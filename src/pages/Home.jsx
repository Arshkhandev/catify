import React, { useEffect, useState } from 'react'
import Spinner from "../componets/Spinner"
import Product from "../componets/Product"

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);



    async function fetchProductData (){
      setLoading(true);

      try{
       const res = await fetch(API_URL);
       const data = await res.json();
       setPosts(data);
      }
      catch(error){
        console.log("error is occuring bro");
        setPosts([]);
      }
      setLoading(false);
    }

    useEffect(() => {
      fetchProductData();
    },[]);



  return (    
  <div className="min-h-screen bg-gray-100 p-6">
  {
    loading ? (<Spinner/>) : (
      posts.length === 0 ? (
        <h1 className="text-center text-xl text-gray-600 mt-10">No products available</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {
            posts.map((post) => (
              <Product key={post.id} post={post}/>
            ))
          }
        </div>
      )
    )
  }
</div>

  )
}

export default Home;