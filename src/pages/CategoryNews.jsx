import { useLoaderData } from "react-router-dom";
import NewsDetails from "./NewsDetails";

const CategoryNews = () => {
  const data= useLoaderData();
//   data is object of array of object
//   console.log( data);
  const newsArray=data.data;
  //   console.log(typeof newsArray,newsArray);
  //   console.log(typeof data);
  // console.log("NewsArray=> ",newsArray.length)
  if(!newsArray.length) return <p className="text-center text-red-500 text-2xl ">No data in {` Category ${newsArray}`}</p> 
  return (
    <div className="m-2 p-2 space-y-4 ">
      {/* <h2>Category News</h2> */}
      {/* loop over news array*/}
      {
        newsArray.map((news,idx)=><NewsDetails key={idx}
        newsUrl={`https://openapi.programming-hero.com/api/news/${idx}`}
        news={news}></NewsDetails>)
      }
    </div>
  );
};

export default CategoryNews;
