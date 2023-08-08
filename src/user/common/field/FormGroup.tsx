import classNames from "classnames"
import TextField ,{Props as TextFieldProps } from "./TextField"
import './FormGroup.scss'
type Props={
    label?: string,
    className?: string,
} & TextFieldProps

const FormGroup = ({ label, className, ...textFieldProps }:Props)=>{
    return(
        <div className={classNames(className, 'form-group', {['form-group-has-value']:textFieldProps.value})}>
            <label className={classNames('label', {['label-has-value']:textFieldProps.value})}>{label}</label>
            <TextField {...textFieldProps}/>
        </div>
    )
}
export default FormGroup