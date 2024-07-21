import { Card, CardBody,Form, Input,Label,Container,Button} from "reactstrap"
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { json } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
const Adminblog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [image, setImage] = useState(null);

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('author', author);
  formData.append('content', JSON.stringify(content));
  formData.append('image', image);
console.log(content);
  try {
    const response = await fetch('https://tolet-globe-backend.onrender.com/blogs/', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    if(response.status===201){
        alert("Blog posted successfully");
        window.location.reload();
    }
    // Handle success response
  } catch (error) {
    console.error(error);
    // Handle error response
  }
};
const resetcon=()=>{
    window.location.reload();
}


    return(
      
        <div  style={{width:'100vw',height:'100vw'}}>
        <AdminNavbar/>
            <Card style={{width:'100vw',height:'100vw',backgroundColor:'black',color:'black'}}>
                <CardBody>

                    <h3>Add Blogs</h3>
                    <Form style={{backgroundColor:'black',color:'black'}}>


                    <div className="my-3">
                            <Label for="title" >Post Title</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="title" 
                                onChange={(e) => setTitle(e.target.value)} />
                                </div>


                                <div className="my-3">
                            <Label for="Category" >Author</Label>
                            <Input
                                type="text"
                                id="Category"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="title"
                                onChange={(e) => setAuthor(e.target.value)} />
                                </div>


                                <div className="my-3">

                            <Label for="Content" >Post Content</Label>
                           
                            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
                
              />
                                  
          
                                  </div>
                                 

                                  <div className="my-3">
                            <Label for="Category" >Upload Image</Label>
                            <Input
                                type="file"
                                id="Category"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="title"
                                onChange={(e) => setImage(e.target.files[0])} />
                                </div>


                                <Container className="text-center">
                            <Button type="button" onClick={handleSubmit} className="rounded-0 bg-success"  >Create Post</Button>
                            <Button type="button" onClick={resetcon} className="rounded-0 ms-2 bg-danger">Reset Content</Button>
                        </Container>


                    </Form>
                  
                    
                </CardBody>
            </Card>


             
        </div>
)
}





export default Adminblog;