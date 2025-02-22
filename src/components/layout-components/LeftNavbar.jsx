import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  // states
  const [categories, setCategories] = useState([]);
  //   console.log(categories);
  // functions
  // fetch news category data from api
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setCategories(data?.data?.news_category);
      });
  }, []);

  return (
    <div className="text-[20px]">
      <h2 className="font-semibold  text-[#403F3F] mb-5">
        All Category ({categories.length})
      </h2>
      <div className="flex flex-col gap-2">
        {categories.map((category, idx) => (
          <NavLink
            key={category.category_id}
            to={`/category/${category.category_id}`}
            className={`btn pl-5 py-4 pr-12 rounded-lg border-2 border-transparent  bg-transparent w-full 
              `}
          >
            {category.category_name}
            {/* <button>{category.category_name}</button> */}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
