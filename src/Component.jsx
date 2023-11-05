import react from 'react';
function Component(props) {
    console.log(props)
    return <div>
        <h1>{props.comp}</h1>
    <h1>inside component</h1>
    <h1>inside context</h1>
 
    </div>
}
export default Component;