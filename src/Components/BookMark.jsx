import { PiTimerFill } from "react-icons/pi";
import BookList from "./BookList";
import PropTypes from "prop-types";


const BookMark = ({addBlog,markRead}) => {


    
    return (
        <div className="w-1/3 bg-gray-200 px-2">
            <span className="flex items-center text-xl font-bold text-blue-600"> <PiTimerFill className="text-red-600 text-2xl" /> Reading Time: {markRead}</span>
            <h1 className="text-2xl font-bold">Bookmarked Blogs: {addBlog.length}</h1>
            <div>
                {
                    addBlog.map((blog,idx)=><BookList key={idx} blog={blog}></BookList>)
                }
            </div>
        </div>
    );
};
BookMark.propTypes={
    addBlog:PropTypes.array.isRequired,
    markRead:PropTypes.func.isRequired
}
export default BookMark;