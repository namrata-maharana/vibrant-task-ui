import React,{useState , useEffect} from 'react';  
import axios from 'axios';
import { Link } from "react-router-dom";

const Home =()=>{
    const [posts, setPosts]=useState([]);
    const [bottomRefresh, setRefreshBottom]=useState(true);
    useEffect(()=>{
        loadPosts();
    },[bottomRefresh,setRefreshBottom]);
    const loadPosts = async ()=>{
        const result = await axios.get("https://my-json-server.typicode.com/namrata-maharana/vibrant-task-mockdb/posts");
        setPosts(result.data.reverse());
    }
    return(
        <div className="container">
            <div className="py-4">
                <h1>Data Table</h1>
                <Link class="btn btn-outline-primary mr-3"  to="/posts/add">Add Post</Link>
                <table class="table border shadow">
                        <thead class="table table-striped table-dark">
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th>Action</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {   
                                posts.map((post, index)=>(
                                    <tr>
                    <th scope="row">{post.id}</th>                                  
                    <td>{post.title}</td>
                    <td>
                <Link class="btn btn-outline-primary mr-3" to={`/posts/edit/${post.id}`} >Edit</Link>
                 </td>
                    </tr>
                 ))
             }
            </tbody>
         </table>
<button class="btn btn-danger" onClick={()=>setRefreshBottom(!bottomRefresh)}>Refresh</button>
     </div>
</div>
 )
}
export default Home;