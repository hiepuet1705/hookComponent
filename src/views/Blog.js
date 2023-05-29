
import React from "react";
import useFetch from "../custom/fetchData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import  {Link,useHistory} from 'react-router-dom'
import './Blog.scss'
const Blog = () =>{
    const history = useHistory();
    const {data:dataBlogs,isLoading,isError} = useFetch('https://jsonplaceholder.typicode.com/posts')
    let newData= [];
    if(dataBlogs && dataBlogs.length > 0){
         newData = dataBlogs.slice(0,10);
         console.log(newData)
    }
    const handleAddNew = () => {
      history.push('/add-new')
    }
    return (
      <>
      <div><button className="btn-add-new" onClick={()=>handleAddNew()}>Add new Blog</button></div>
      <div className="container">
        <div className="row">
          {!isLoading && newData && newData.length>0 && newData.map(item =>  (
            <div className="col-sm-4 d-flex" key={item.id}>
              <Card style={{height:'98%'  }}>
                <Card.Body>
                  <Card.Title style={{color:'#000'}}>{item.title}</Card.Title>
                  <Card.Text style={{color:'#000'}}>{item.body}</Card.Text>
                  <Button variant="primary">
                    <Link style={{color:'#000'}} className='btn-detail' to={`/blog/${item.id}`}>Read more</Link>
                    </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          {isLoading && (<div>Loading.....</div>)}
        </div>
      </div>
      </>
    );
}

export default Blog;