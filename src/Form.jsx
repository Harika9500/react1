import React, { useState } from 'react';
function Form(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleChange = (e) => {

        // console.log(e,"eee")
        //console.log(e.target.value)

        console.log(e.target.name)
        if (e.target.value.length < 9) {
            //console.log(e.target.value,e.target.value.toUpperCase())
            if (e.target.name == "firstName"){
                setFirstName(e.target.value)
            } else {
                setLastName(e.target.value)
            }
        }
    }
    return <>
        <h1> Form </h1>

        <input name="firstName" value={firstName} onChange={handleChange} />
        <input name="lastName" value={lastName} onChange={handleChange} />
        <button>submit</button>
    </>
}
export default Form;