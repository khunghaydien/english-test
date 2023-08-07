
import FormGroup from "../common/field/FormGroup";

const Login = ()=>{
    return(
        <>
            <FormGroup label="username" type="text"/>
            <FormGroup label="password" type="password"/>
            <FormGroup label="email" type="email"/>
        </>
    )
}
export default Login