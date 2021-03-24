import React, { useContext } from 'react';
import './Inventory.css'
import { useForm } from "react-hook-form";
import { UserContaxt } from '../../App';


const Inventory = () => {
    const {  handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContaxt);
    const onSubmit = data => console.log(data);
    document.title = "inventory"
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form  className="inventory-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedInUser.name}  placeholder="your name" required />
        {errors.name && <span className="error">Name is required</span>}
        <input name="email" type="email" defaultValue={loggedInUser.email} placeholder="your email" required />
        {errors.email && <span className="error">Email is required</span>}
        <input name="address" placeholder="your address (zip code)" required />
        {errors.address && <span className="error">Address is required</span>}
        <input name="phone" type="number" placeholder="phone" required />
        {errors.phone && <span className="error">Phone Number is required</span>}    
        <input type="submit" />
      </form>
    );
};

export default Inventory;