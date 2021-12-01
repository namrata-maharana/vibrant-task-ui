import React,{useState} from "react";
import axios from 'axios';
import  {useHistory} from "react-router";

const AddPost = ()=> {
    let history = useHistory();
    const [post, setPost] = useState({
         id:"",
        title:"",
    });
    const{id,title}= post ;
    const onInputChange = e =>{
      setPost({...post,[e.target.name]: e.target.value})      
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("https://my-json-server.typicode.com/namrata-maharana/vibrant-task-mockdb/posts", post)
        history.push("/");
    };
    return(
        <form onSubmit={e => onSubmit(e)}>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label>Id:</label>
            <input type="text" 
            class="form-control" 
            name="id"
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
        <button class="btn btn-primary" type="submit">Add Post</button>
      </form> 
    )
}
export default AddPost;