import classNames from "classnames"
import TextField ,{Props as TextFieldProps } from "./TextField"
import { useState } from "react";
import './FormGroup.scss'
type Props={
    label?: string,
    className?: string,
} & TextFieldProps

const FormGroup = ({ label, className, ...textFieldProps }:Props)=>{
    const [value, setValue]  = useState('')
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       setValue(e.target.value) 
    }
    const textField = {
        value: value,
        onChange: onChange,
        ...textFieldProps
    }
    return(
        <div className={classNames(className, 'form-group')}>
            <label className={classNames('label', {['label-has-value']:value})}>{label}</label>
            <TextField {...textField}/>
        </div>
    )
}
export default FormGroup