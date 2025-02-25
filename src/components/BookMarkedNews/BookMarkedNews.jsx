import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NewsDetails from "../../pages/NewsDetails";

const BookMarkedNews = () => {
    const {bookMarkedNews}=useContext(AuthContext);

    console.log("bookMarkedNews=>",bookMarkedNews);
    return (
        <div className="w-full mx-auto p-4 border-2 border-teal-600">
            <h2 className="text-center font-semibold">Total Bookmarked News:{bookMarkedNews.length}</h2>
        
        {
            bookMarkedNews.map(news=> <NewsDetails key={news._id} news={news}></NewsDetails>)
        }
        </div>
    );
};

export default BookMarkedNews;