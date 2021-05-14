import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

	return (
		<div className="blog-details">
			{ error && <div className="error">{ error } </div> }
         	{ isPending &&  <div className="loading" >Loading...</div>}

			{ blog && (
				<article>
					<h2>{ blog.title } </h2>
					<p style={{color:"gray"}}>Written by { blog.author }</p>
					<div className="body">{ blog.body } </div>
				</article>
			)}
		</div>
	)
}

export default BlogDetails