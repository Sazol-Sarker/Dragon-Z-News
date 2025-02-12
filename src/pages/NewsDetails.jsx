import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const NewsDetails = ({ news }) => {
  const {
    author,
    category_id,
    details,
    image_url,
    published_date,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = news;
  console.log(news);
  const { img, name } = author;

  return (
    <div className="space-y-5 border-2 border-slate-300">
      {/* <h2>News Cateogy id: {category_id}</h2> */}
      <div className="author-container flex gap-2 border-2 border-blue-300 bg-gray-100">
        <img src={img} className="w-5 rounded-lg" alt="author" />
        <div>
          <h2>{name}</h2>
          <p>{published_date}</p>
        </div>
      </div>
      <div className="news-body">
        <h2 className="text-2xl">{title}</h2>
        <img src={image_url} className="max-w-xl" alt="news image" />
        <p>{details}</p>
        {/* button */}
        <Link to="">
        <button className="btn">Read more</button>
        </Link>

        <div className="divider"></div>

        {/* rating watch count div */}
        <div className="rating-watch-count-div flex justify-between">
            <div className="rating-div flex gap-2">
                <p>Rating {rating.number}</p>
                 <p>{rating.badge}</p>
            </div>
            <div className="view flex gap-2 items-center">
            <FaEye />
            <p>{total_view}</p></div>
        </div>

      </div>
    </div>
  );
};

export default NewsDetails;
