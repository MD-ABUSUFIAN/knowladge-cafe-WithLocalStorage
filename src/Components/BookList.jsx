import PropTypes from 'prop-types';

const BookList = ({ blog }) => {
  const { cover, title, author, posted_date } = blog;
  //    console.log(blog);

  return (
    <div className="text-base font-bold bg-blue-100 my-2 rounded-1xl p-1">
      <div className="bookListWrapper flex items-center justify-between">
        <img className="w-[60px] h-[60px] rounded-full" src={cover} alt="" />
        <h1 className='text-center'>{title.slice(0,30)}....</h1>
        <div className="author">
          <p className="text-base text-blue-500 text-center">{author}</p>
          <span className="text-sm text-fuchsia-700">{posted_date}</span>
        </div>
      </div>
    </div>
  );
};
BookList.propTypes= {
  blog: PropTypes.object.isRequired,
};
export default BookList;
