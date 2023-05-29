import { useParams,useHistory } from "react-router-dom";
import useFetch from "../custom/fetchData";
import { Card, Button } from 'react-bootstrap';
const DetailBlog = () => {
    let {id} = useParams();
    let history = useHistory();
    const handleBackData = () => {
        console.log('clickes')
            history.push('/blog')
    }
    
    let {data,isLoading,isError} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(data)
    return (
        <>
        <Button onClick={()=>handleBackData()} variant="primary" style={{marginBottom:'40px'}}> Back</Button>
          {!isLoading &&   <div className="col-sm-4 d-flex" key={data.id}>
              <Card style={{height:'98%'  }}>
                <Card.Body>
                  <Card.Title style={{color:'#000'}}>{data.title} - {data.id}</Card.Title>
                  <Card.Text style={{color:'#000'}}>{data.body}</Card.Text>
                  {/* <Button variant="primary">
                    
                    </Button> */}
                </Card.Body>
              </Card>
            </div>}
            {isLoading && <>Loading...</>}
        </>
    )
}

export default DetailBlog;