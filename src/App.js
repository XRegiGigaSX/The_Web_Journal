import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import NewsItem from "./components/NewsItem.jsx"
import Carousel from "./components/Carousel.jsx"
import Loading from "./components/Loading.jsx"
import Footer from "./components/Footer.jsx"
import Clock, { DateFormat } from "./components/Clock.jsx"
import "./App.css"
// import sampleData from "./sample-output.json"

// const bodyParser = require("body-parser")

// Your API key 1 is: 8c523c6f3f5f4c23b93eb4e7136556a9

// Your API key 2 is: 2dbcef631b474aa4bf3858f29350e842

export default function App() {

  const [query, setQuery] = useState("india")

  const [queryDraft, setQueryDraft] = useState("")

  const [category, setCategory] = useState("general")


  // const [loading, setLoading] = useState(0)

  const url = 'https://newsapi.org/v2/top-headlines?' +
    'q=' + [query] + '&' +
    'from=' + 
    [DateFormat()] + 
    '&sortBy=popularity&language=en&category=' + [category] +
    '&apiKey=8c523c6f3f5f4c23b93eb4e7136556a9';

  console.log(url);

  const [darkt, setDarkt] = useState(true);
  
  // const [res, setRes] = useState({});
  
  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(1)

  function handleQuery(event) {
    if (event.target.value === ""){
      setQuery("india")
    }else{
      setQueryDraft(event.target.value)
    }
    // console.log(event.target)
  }

  function handleSubmit(e){
    e.preventDefault();
    setData([])
    setQuery(queryDraft)
    setQueryDraft("")
  }

  // function loading(e){
  //   e.preventDefault();
  //   setData([])
  // }

  function handleCategory(e){
    e.preventDefault();
    setData([])
    setCategory(e.target.value)
  }
  
  let dark = {
    backgroundColor: "#000000",
    color: "#ffffff",
    transition: "0.5s",
  }

  let light = {
    backgroundColor: "#ffffff",
    color: "#000000",
    transition: "0.5s"
  }

  function setTheme() {
    setDarkt(darkt ? false : true)
  }

  // .then(res => setRes(res))
  // .then(() => setLoading(1))
  // .then(() => setLoading(0))

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res.articles))
    .catch((error) => {
      console.log("Error", error);
    });
  }, [url])

  return (
    <div className="App" style={darkt ? dark : light}>
      <Navbar 
        setTheme={setTheme}
        handleChange={handleQuery}
        clock={<Clock />}
        handleSubmit={handleSubmit}
        // query={query} 
      />
      <Carousel 
        handleCategory={handleCategory}
      />

      {(!data.length)?<Loading />:
      <div className="album py-5">
      <div className="container marketing"> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((item, index) => {
            return (
              <NewsItem
                key={index}
                id={index}
                title={item.title}
                imgURL={(item.urlToImage)?(item.urlToImage):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHZLOXKcFWpThDMatjtJe8e-wpZcVx9OGbg&usqp=CAU"}
                desc={item.description}
                oc={item.url}
                source={item.source.name}
                time={item.publishedAt}
              />)
          })}
        </div>
      </div>
      </div>}
    <Footer
    darkt={darkt}
    dark={dark}
    light={light} 
    />  
    </div>
  )
}


