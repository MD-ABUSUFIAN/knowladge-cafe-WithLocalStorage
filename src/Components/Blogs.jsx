import Blog from "../Blog";
import PropTypes from "prop-types";


const Blogs = ({blogs,handleMarkRead,handleAddBlog}) => {

  
    
    return (
        <div className="w-2/3">
           <div >
         {
            blogs.map(blog=><Blog blog={blog} key={blog.id} handleAddBlog={handleAddBlog} handleMarkRead={handleMarkRead}></Blog>)
         }
           </div>
        </div>
    );
};
Blogs.propTypes={
          blogs:PropTypes.array.isRequired,
          handleMarkRead:PropTypes.func.isRequired,
          handleAddBlog:PropTypes.func.isRequired
}
export default Blogs;