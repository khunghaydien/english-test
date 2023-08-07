import classNames from "classnames";
import './TextField.scss'
export type Props = {
    className?: string, 
    type?: string,
    value?: string | number | undefined,
    disabled?: boolean, 
    readOnly?: boolean,
    onFocus?: (e:React.FocusEvent<HTMLInputElement, Element>)=>void,
    onBlur?: (e:React.FocusEvent<HTMLInputElement, Element>)=>void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>)=>void ,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void,
}
const TextField = (props:Props)=>{
    const {
        className,
        type='text',
        value,
        disabled = false,
        readOnly= false
    } = props
    const textFieldClass = classNames('text-field', 'slds-input', className);
    if (readOnly) {
        return (
            <div className="text-field text-field--readonly">
                {value}
            </div>
        );
    } else {
        return (
            <input
                type={type}
                className={textFieldClass}
                onFocus={(e) => {if (props.onFocus) props.onFocus(e);}}
                onBlur={(e) => {if(props.onBlur) props.onBlur(e);}}
                onKeyDown={(e) => {if(props.onKeyDown) props.onKeyDown(e);}}
                onChange={(e) => {if(props.onChange) props.onChange(e);}}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
            />
        );
    }
}
export default TextField