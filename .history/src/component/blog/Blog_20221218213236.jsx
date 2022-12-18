import "./Blog.css";

function Blog() {
  return (
    <div className="about">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h2>Blog</h2>
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis itaque sequi excepturi dolor, ducimus cupiditate
              aliquid enim ea veritatis adipisci iste minus illum cum fugiat,
              magnam nulla in amet libero!
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2012/12/blogging.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
