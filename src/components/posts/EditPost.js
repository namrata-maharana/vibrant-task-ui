import React,{useState , useEffect} from "react";
import axios from 'axios';
import  {useHistory, useParams} from "react-router-dom";

const EditPost = ()=> {
    let history = useHistory();
    const {id} = useParams();
    const [post, setPost] = useState({
        id:"",
        title:"",   
    });
    const{Id,title}= post;
    const onInputChange = e =>{
      setPost({...post,[e.target.name]: e.target.value})     
    };
    useEffect(() =>{
        loadPosts()
    }, []);
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put("https://my-json-server.typicode.com/namrata-maharana/vibrant-task-mockdb/posts/" + id, post)
        history.push("/");
    };

    const loadPosts= async () =>{
        const result = await axios.get(`https://my-json-server.typicode.com/namrata-maharana/vibrant-task-mockdb/posts/${id}`)
        console.log(result);
        setPost(result.data);
    }
    return(
        <form onSubmit={e => onSubmit(e)}>
       
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label>id:</label>
            <input type="text" 
            class="form-control" 
            name="Id"
            value={id} 
            onChange={e => onInputChange(e)} required />
          </div>
          <div class="col-md-4 mb-3">
            <label>Title:</label>
            <input type="text" 
            class="form-control" 
            name="title" 
            value={title} 
            onChange={e => onInputChange(e)} required />
          </div>
        </div>
        <button class="btn btn-warning btn-block" type="submit">Update Post</button>      
      </form> 
    )
}
export default EditPost;