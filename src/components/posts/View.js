import React,{useState , useEffect} from "react";
import axios from 'axios';
import  {Link, useParams} from "react-router-dom";


const ViewPost = () => {
        const [post, setPost] = useState({
            id:"",
            title:""
        });
        const {id} = useParams();
        useEffect(()=>{
            loadPosts()
        },[])
        const loadPosts= async () =>{
            const result = await axios.get(`https://my-json-server.typicode.com/namrata-maharana/vibrant-task-mockdb/posts/${id}`);
            console.log(result);
            setPost(result.data);
        }
    return  (
        <div className='container py-4'>
            <Link className="btn btn-primary" to="/">Back To Home!</Link>
            <h1 className="display-4">Post Id: {id}</h1>
            <ul className="list-group w-50">
            <li className="list-group-item">Id: {post.id}</li>
            <li className="list-group-item">Title: {post.title}</li>
            </ul>
        </div>
    );    
};
export default ViewPost;