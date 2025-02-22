import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedNews = () => {
    const {id}=useParams();
    const [newsData,setNewsData]=useState([])
    console.log("newsData",newsData);
    console.log("newsData",newsData);
    const {image_url,details,thumbnail_url,title}=newsData
    // const {image_url,details,thumbnail_url,title}=newsData
    console.log(details);


    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res=>res.json())
        .then(data=>setNewsData(data.data[0]))
    },[id])
    return (
        <div className="mb-8">
             <img src={thumbnail_url} className="w-full max-h-[500px] mb-5 rounded-none!important" alt={title} />  
             <h3 className="font-bold text-[25px] mb-2 w-3/4">{title}</h3>
             <p className="text-[16px] text-[#706F6F]">{details}</p>
        </div>
    );
};

export default DetailedNews;