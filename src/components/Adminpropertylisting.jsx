import React, { useRef, useState } from 'react';
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Container,
  Button,
} from 'reactstrap';
import '../style/Adminpropertylisting.css';
import { AdminNavbar } from './AdminNavbar';
//import { setRef } from '@mui/material';
//import axios from 'axios';

const Adminpropertylisting = () => {
  const editor = useRef(null);
  //const [content, setContent] = useState('');
  //const [analyst,setanalyst]=useState("");
  const [owner,setowner]=useState("");
  const [phone,setphone]=useState("");
  const [altphone,setaltphone]=useState("");
  const [locality,setlocality]=useState("");
  const [address,setaddress]=useState("");
  const [Spacetype,setSpacetype]=useState("");
  const [propertytype,setpropertytype]=useState("");
  const [residence,setresidence]=useState("");
  const [price,setprice]=useState("");
  const [Concession,setconcession]=useState("");
  const [pets,setpets]=useState("");
  const [Preference,setpreference]=useState("");
  const [bachelors,setbachelors]=useState("");
  const [type,settype]=useState("");
  const [bhk,setbhk]=useState("");
  const [nrooms,setnrooms]=useState(Number);
  const [nbath,setnbath]=useState(Number);
  const [floor,setfloor]=useState("");
  const [landmark,setlandmark]=useState("");
  const [bath,setbath]=useState("");
  const [cooling,setcooling]=useState("");
  const [car,setcar]=useState("");
  const [security,setsecurity]=useState("");
  const [comment,setcomment]=useState("");
  const [image,setimage]=useState(undefined);
  //const [location,setlocation]=useState("");
  //const [Registration,setRegistration]=useState("");
  const [descr,setdescr]=useState("");
 /* const upload=async()=>{
    console.log("hi");
    
    const response=await fetch('https://tolet-globe-backend.onrender.com/property/',{
      method:'POST',
      headers:{
      'Accept':'application/json',
   'content-type': 'application/json', 
 // 'content-type': 'multipart/form-data', 
      },
      body: JSON.stringify({
       
"AnalystName":analyst,
"OwnerName":owner,
"OwnerContactNumber":	phone,
"OwnerAlternateContactNumber":altphone,
 "Locality":	locality,
"Address":	address,
"SpaceType":	Spacetype,
"PropertyType":	propertytype,
"CurrentResidenceofOwner":	residence,
"Price":	price,
"Concession":	Concession,
"PetsAllowed":	pets,
"Preference":	Preference,
"Type":	type,
"BHK":bhk,
"Floor":	floor,
"NearestLandmark":	landmark,
"TypeofWashroom":	bath,
"CoolingFacility":	cooling,
"CarParking":	car,
"SubscriptionAmount":	subscript,
"CommentbyAnalyst":	comment,
"PicturesandVideos":image,

"LocationLink":	location,
"RegistrationDate":Registration,

      })
    });
    const data=await response.json();
    console.log(response);
    if(response.status===201){
      alert("Uploaded Successfully");
     window.location.reload();
    }else{
      console.log(data);
    }
    console.log("bye");
  }*/
 
    const upload = async () => {
      const formData = new FormData();
      //formData.append('AnalystName', analyst);
      formData.append('OwnerName', owner);
      formData.append('OwnerContactNumber', phone);
      formData.append('OwnerAlternateContactNumber', altphone);
      formData.append('Locality', locality);
      formData.append('Address', address);
      formData.append('SpaceType', Spacetype);
      formData.append('PropertyType', propertytype);
      formData.append('CurrentResidenceofOwner', residence);
      formData.append('Price', price);
      formData.append('Concession', Concession);
      formData.append('PetsAllowed', pets);
      formData.append('Preference', Preference);
      formData.append('IfBachelors', bachelors);
      formData.append('Type', type);
      formData.append('BHK', bhk);
      formData.append('Floor', floor);
      formData.append('NearestLandmark', landmark);
      formData.append('noOfRooms',nrooms);
      formData.append('noOfbathrooms',nbath);
      formData.append('description',descr);
      formData.append('TypeofWashroom', bath);
      formData.append('CoolingFacility', cooling);
      formData.append('CarParking', car);
      formData.append('Security', security);
      formData.append('CommentbyAnalyst', comment);
      //formData.append('LocationLink', location);
      //formData.append('RegistrationDate', Registration);
     formData.append('image',image);
    formData.append('PicturesAndVideos',"");
      try {
        const response = await fetch('https://tolet-globe-backend.onrender.com/property/', {
          method: 'POST',
          headers: {
           
          },
          body: formData,
        });
    const data=await response.json();
        if (response.ok) {
          alert("Uploaded Successfully");
          window.location.reload();
        } else {
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
const resetcontent=()=>{
  window.location.reload();
}
  return (
    <div className="Adminpropdiv1">
      <AdminNavbar/>
      <Card className="form-card" style={{backgroundColor:'black',width:'100vw',height:'100vh'}}>
        <CardBody style={{backgroundColor:'black',width:'100%'}}>
          <h1 className="form-title">Add Property Listing</h1>
          <Form className="form-content" style={{width:'100%',height:'100%'}}>
          {/*<div className="my-3 form-group">
              <Label for="Analyst Name" className="form-label">Analyst Name</Label>
              <Input type="text" id="Analyst Name" onChange={e=>setanalyst(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>*/}
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'30%'}}>
              <Label for="owner Name" className="form-label">Owner Name</Label>
              <Input type="text" id="owner Name" onChange={e=>setowner(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
            <div style={{width:'30%'}} >
              <Label for="ContatcNumber" className="form-label">Contact Number</Label>
              <Input type="text" onChange={e=>setphone(e.target.value)} id="ContactNumber" placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
            <div style={{width:'30%'}}>
              <Label for="Altnumber" className="form-label">Alternate Contact Number</Label>
              <Input type="text" id="Altnumber" onChange={e=>setaltphone(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
            </div>
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'45%'}} >
              <Label for="locality" className="form-label">Locality</Label>
              <Input type="text" id="locality" onChange={e=>setlocality(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
            <div style={{width:'45%'}} >
              <Label for="address" className="form-label">Address</Label>
              <Input type="text" id="address" onChange={e=>setaddress(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
           
            </div>
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Space Type</Label>
              <Input type="select" onChange={e=>setSpacetype(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              
              </Input>
            </div>
          
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Property Type</Label>
              <Input type="select"  onChange={e=>setpropertytype(e.target.value)}  id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
                <option value="Shop">Shop</option>
                <option value="PG">PG</option>
                <option value="House,Shop">House,Shop</option>
              </Input>
            </div>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Present Owner's location</Label>
              <Input type="select" id="rooms"  onChange={e=>setresidence(e.target.value)}  placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Same Place">Same Place</option>
                <option value="Same City">Same City</option>
                <option value="Different City">Different City</option>
               
              </Input>
            </div>
            </div>
            <div className="my-3 form-group">
              <Label for="title" className="form-label">Price</Label>
              <Input type="text"  onChange={e=>setprice(e.target.value)}  id="title" placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Concession</Label>
              <Input type="select"  onChange={e=>setconcession(e.target.value)}  id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Yes">yes</option>
                <option value="No">No</option>
                <option value="Others">Others</option>
              
              </Input>
            </div>
          
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Pets Allowed</Label>
              <Input type="select"  onChange={e=>setpets(e.target.value)}  id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Yes">yes</option>
                <option value="No">No</option>
                <option value="Others">Others</option>
              </Input>
            </div>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Prefernce</Label>
              <Input type="select" id="rooms" onChange={e=>setpreference(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Family">Family</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Any">Any</option>
               
              </Input>
            </div>
            </div>
            {Preference!=="Family"?
            <div className="my-3 form-group">
              <Label for="price" className="form-label">Bachelors</Label>
              <Input type="select" id="rooms" onChange={e=>setbachelors(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Any">Any</option>
               
              </Input>
            </div>:""}

            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Type</Label>
              <Input type="select" id="rooms" onChange={e=>settype(e.target.value)} placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Fully Furnished">Fully Furnished</option>
                <option value="Semi Furnished">Semi Furnished</option>
                <option value="Not Furnished">Not Furnished</option>
              
              </Input>
            </div>
          
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">BHK</Label>
              <Input type="select" onChange={e=>setbhk(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Input>
            </div>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Floor Number</Label>
              <Input type="text" onChange={e=>setfloor(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
             
             
              </Input>
            </div>
            </div>
            <div className="my-3 form-group">
              <Label for="price" className="form-label">Nearest Landmark</Label>
              <Input type="text" onChange={e=>setlandmark(e.target.value)} id="price" placeholder="Enter here" className="rounded-0 form-input" name="price" />
            </div>
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'45%'}} >
              <Label for="title" className="form-label">No.of Bathrooms</Label>
              <Input type="number" onChange={e=>setbath(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
            
              
              </Input>
            </div>
            <div style={{width:'45%'}} >
              <Label for="title" className="form-label">No.of Rooms</Label>
              <Input type="number" onChange={e=>setnrooms(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
           
              
              </Input>
            </div>
            </div>
            <div className="my-3 form-group">
              <Label for="image" className="form-label">Description</Label>
              <Input type="text" onChange={e=>setdescr(e.target.value)} id="image" placeholder="Enter here" className="rounded-0 form-input" name="image" />
            </div>
       
           
            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Type of Bathrooms</Label>
              <Input type="select" onChange={e=>setnbath(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Indian">Indian</option>
                <option value="Western">Western</option>
                <option value="Both">Both</option>
                <option value="Others">Others</option>
              
              </Input>
            </div>
            
         
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Cooling Facility</Label>
              <Input type="select" onChange={e=>setcooling(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="AC">AC</option>
                <option value="Cooler">Cooler</option>
                <option value="Fan">Fan</option>
                <option value="Table Fan">Table Fan</option>
                <option value="Others">Others</option>
              </Input>
            </div>
            <div style={{width:'30%'}} >
              <Label for="title" className="form-label">Car Parking</Label>
              <Input type="select" onChange={e=>setcar(e.target.value)} id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Yes">yes</option>
                <option value="No">No</option>
                <option value="Others">Others</option>
               
              </Input>
            </div>
            </div>


            <div className="my-3 form-group" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'45%'}} >
            <Label for="title" className="form-label">Security</Label>
              <Input type="select"  onChange={e=>setsecurity(e.target.value)}  id="rooms" placeholder="Enter here" className="rounded-0 form-input" name="rooms">
              <option value="" selected disabled hidden>Choose here</option>
                <option value="Yes">yes</option>
                <option value="No">No</option>        
              </Input>
            </div>
            <div style={{width:'45%'}} >
              <Label for="title" className="form-label">Additional Information (if Any)</Label>
              <Input type="text" onChange={e=>setcomment(e.target.value)} id="title" placeholder="Enter here" className="rounded-0 form-input" name="title" />
            </div>
           
            </div>

           
            <div className="my-3 form-group">
              <Label for="image" className="form-label">Image</Label>
              <Input type="file" onChange={e=>setimage(e.target.files[0])} id="image" placeholder="Enter here" className="rounded-0 form-input" name="image" />
            </div>
       
            {/*<div className="my-3 form-group">
              <Label for="image" className="form-label">Location Link</Label>
              <Input type="text" onChange={e=>setlocation(e.target.value)} id="image" placeholder="Enter here" className="rounded-0 form-input" name="image" />
            </div>*/}
           
            
           
            <Container className="text-center">
              <button type="button" onClick={upload} className="rounded-0 bg-success form-button">
                Submit
              </button>
              <button onClick={resetcontent} className="rounded-0 ms-10 bg-danger form-button">
                Reset Content
              </button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Adminpropertylisting;


