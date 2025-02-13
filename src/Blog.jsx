import { FaBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
const Blog = ({blog,handleMarkRead,handleAddBlog}) => {
    const {author,author_img,cover
        ,id,posted_date,reading_time,title,hashtags}=blog;
    return (
        <div>
            <img className="w-full mx-auto" src={cover} alt={cover}/>
            <div className="author flex items-center justify-between p-2">
                <div className="authorWrapper flex align-middle">
                    <img className="w-[60px] h-[60px] rounded-b-full" src={author_img} alt="" />
                    <div className="authorName ml-3">
                        <h3 className="text-2xl ">{author}</h3>
                        <p className="text-zinc-400">{posted_date}</p>
                    </div>
                </div>
                <div className="readingTime flex items-center">
                    <span className="text-2xl">{reading_time} min read</span>
                    <FaBookmark onClick={()=>handleAddBlog(blog)} className="text-2xl cursor-pointer" />
                </div>
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="hashTag py-2xl">
                    {
                        hashtags.map((hash,idx)=><span key={idx} className="text-base font-bold "># {hash} </span>)
                    }
            </div>
            <div className="markRead">
                <button onClick={()=>handleMarkRead(reading_time,id)} className="text-blue-400 font-bold border-b-1 my-2 cursor-pointer">Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleMarkRead:PropTypes.func.isRequired,
    handleAddBlog:PropTypes.func.isRequired
}
export default Blog;