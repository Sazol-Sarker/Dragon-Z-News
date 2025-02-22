import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsDetails = ({ news }) => {
  const {
    _id,
    author,
    category_id,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = news;
  // console.log(news);
  const { img, name, published_date } = author;
  // if rating start n\has any relation with rating, try here
  // const {number}=rating;
  // const starToBlink=Math.ceil(number);

  // processing post description {details} , showing 60% word content, so that READ MORE button makes sense

  const words = details.split(" ");
  const splitIdx = Math.ceil(words.length * 0.75);
  const processedDetails = words.slice(0, splitIdx).join(" ");
  // console.log("processedDetails=> ",processedDetails);

  return (
    <div className="mb-7 rounded-md border-2 border-slate-300">
      {/* <h2>News Cateogy id: {category_id}</h2> */}
      
      <div className="author-container px-5 flex items-center justify-between bg-gray-100">
        <div className="author-info flex items-center justify-center gap-2 ">
          <img
            src={img}
            className="w-10 h-10 rounded-[1.4rem]  "
            alt="author"
          />
          <div className="mb-4">
            <h2 className="text-[16px] font-semibold">{name}</h2>
            <p className="text-[#706F6F]  text-[14px]">
              {published_date?published_date.split(" ")[0]:`Null`}
            </p>
          </div>
        </div>
        <div className="bookmark-link flex gap-2 text-2xl pr-5 text-[#706F6F]">
          {/* functions remain to add */}
          <CiBookmark />
          <IoShareSocialOutline />
        </div>
      </div>
      <div className="news-body px-5">
        <h2 className="text-[20px] my-2 font-bold">{title}</h2>
        <img
          src={image_url}
          className="w-max h-max mt-5 mb-6"
          alt="news image"
        />
        {/* <p>{details}</p> */}
        <p className="text-[#706F6F] text-md">{processedDetails + "..."}</p>
        {/* button */}
        <Link className="text-[16px] font-semibold text-[#FF8C47]" to={`/news/${_id}`}>
          Read more
          {/* <button className="btn text-[#FF8C47]">Read more</button> */}
        </Link>

        <div className="divider"></div>

        {/* rating watch count div */}
        <div className="rating-watch-count-div flex items-center justify-between">
          {/* Considering rating can be set by reader */}
          <div className="rating-div flex gap-2  mb-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#FF8C47]"
                defaultChecked
                />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#FF8C47]"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#FF8C47]"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#FF8C47]"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#FF8C47]"
              />
            </div>
            <p className="text-[#706F6F]"> {rating.number}</p>
          </div>
          <div className="view flex gap-2 items-center pb-5 text-[#706F6F]">
            <FaEye className="" />
            <p className="pr-5  ">{total_view}</p>
          </div>
        </div>
      </div>

   

    </div>
  );
};

export default NewsDetails;
