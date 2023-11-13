import react from 'react';
function Component(props) {
    const{user,comp}=props
   // console.log(props)
    return <div>
        <h1>{props.comp}</h1>
    <h1>inside component</h1>
    <h1>inside context</h1>
    <h4>name :{user.name}</h4>
    <h4>role :{user.role}</h4>
    <h4>email:{user.email}</h4>
    </div>
}
export default Component;