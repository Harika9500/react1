import React, { useState } from 'react';
function Form(props) {

    // const [firstName, setFirstName] = useState("")
    //const [lastName, setLastName] = useState("")

    const [formData, setData] = useState({ firstName: "", lastName: "" });

    const handleChange = (e) => {
        const{name,value}=e.target;

        // console.log(e,"eee")
        //console.log(e.target.value)

        //console.log(e.target.name)
        if (value.length < 9) {
            //console.log(e.target.value,e.target.value.toUpperCase())
           // if (e.target.name == "firstName") {
             //   setFirstName(e.target.value)
            //} else {
              //  setLastName(e.target.value)
              setData((prevData)=>({
                ...prevData,
                [name]:value,
              }));
            }}
    return( <>

        <h1> Form </h1>

        <input name="firstName" value={formData.firstName} onChange={handleChange} />
        <input name="lastName" value={formData.lastName} onChange={handleChange} />
        <button>submit</button>
    </>
    );
}

export default Form;