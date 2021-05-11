import { useState} from 'react';
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{title: "My new Website", body: "lorem ipsum", author: "Melvin", id: 1},
		{title: "Welcome aboard", body: "lorem ipsum", author: "Captain hook", id: 2},
		{title: "My ninja way", body: "lorem ipsum", author: "Shaun", id: 3},
	]);
	const [showMelvin, setShowMelvin] = useState(true);
	const showOrNot = () =>{
		showMelvin ? setShowMelvin(false) :setShowMelvin(true) 
	}
	
	return ( 
		<div className="home">
			
			<button onClick={showOrNot}>{showMelvin? "Hide melvin": "show Melvin"}</button>

			{ !showMelvin ? <BlogList blogs={blogs} title="All blogs" />:<BlogList blogs={blogs.filter((blog)=> blog.author ==="Melvin")} title="Melvin Blog" />}
			
			
		</div>
	 );
}
 
export default Home;