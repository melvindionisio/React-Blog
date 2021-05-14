import { useRef } from "react";

const Create = () => {
	
	const form = useRef(null);

	const handleInputReset = () => {
		setTimeout(()=>{
			form.current.reset();
		}, 1000)
	}
	return (
		<div className="create">
			<h2>Add a new Blog</h2>
			<form ref={form} action="http://localhost:8000/blogs"  method="Post">
				<div className="wrapper">
					<div className="input-wrapper">
						<label htmlFor="title">Blog title</label>
						<input className="input" name="title" id="title" type="text"/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="author">Blog author</label>
						<input className="input" name="author" id="author" type="text"/>
					</div>

					<div className="input-wrapper">
						<label htmlFor="body">Blog body</label>
						<textarea className="input" rows="4" id="body" name="body" type="text">
						</textarea>
					</div>
					<input onClick={handleInputReset} type="submit" className="btn post-btn" value="Post"/>
				</div>
				
			</form>
		</div>
	);
}

export default Create;