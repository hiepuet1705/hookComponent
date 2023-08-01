
import React, { useEffect } from "react";
import useFetch from "../custom/fetchData";
import { useState } from "react";
import AddNewBlog from "./AddNewBlog";
import { Card, Button, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import './Blog.scss'
const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData,setNewData] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const { data: dataBlogs, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')

  useEffect(()=>{
    if (dataBlogs && dataBlogs.length > 0) {
      let newDataSimple = dataBlogs.slice(0, 10);
       setNewData(newDataSimple)
   
     }
  },[dataBlogs])
  const handleAddNew = (blog) => {
    setShow(false)
    
    setNewData([blog,...newData])
    console.log(newData)
   
  }
  const handleDeleteBlog = (id) =>{
    let data = newData;
    data = data.filter(item => item.id !== id)
    setNewData(data)
  }
  return (
    <>
      <div style={{margin: '10px 0px'}}>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> 

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewBlog handleAddNew={handleAddNew} />
            </Modal.Body>
         
        </Modal>
      </div>
      
      <div className="container">
        <div className="row">
          {!isLoading && newData && newData.length > 0 && newData.map(item => (
            <div className="col-sm-4 d-flex" key={item.id}>
              <Card style={{ height: '98%' }}>
                <Card.Body style={{minWidth:'350px'}}>
                  <Card.Title style={{ color: '#000' }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: '#000' }}>{item.body}</Card.Text>
                  <Button variant="primary">
                    <Link style={{ color: '#000' }} className='btn-detail' to={`/blog/${item.id}`}>Read more</Link>
                  </Button>
                  <Button onClick={()=>handleDeleteBlog(item.id)} variant="danger" style={{margin:'0 10px'}}>
                      Xóa
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

