import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return ( <
        div className = "blog-list" >
        <h2 > { title } < /h2> 
        { blogs.map((blog) => ( 
          <div className = "blog-preview" key = { blog.id } >
            {/* redirecting to the routes for blog id */}
            <Link to={`/blogs/${blog.id}`}>
                <div>
                    <h2 > { blog.title } < /h2> 
                    <p style={{color: "gray"}}> Written by {blog.author}</p> 
                </div>
            </Link>
             
          </div >
        ))
    }

    {
        blogs.length === 0 && ( <
            p style = {
                {
                    color: "gray",
                    minHeight: "200px",
                    textAlign: "center",
                    verticalAlign: "center",
                    padding: "2rem 0",
                }
            } >
            No post yet. <
            /p>
        )
    } <
    /div>
);
};

export default BlogList;