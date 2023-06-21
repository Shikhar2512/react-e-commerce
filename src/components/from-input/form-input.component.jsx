
import { FormInputContainer, Input, Label } from './form-input.styles'
const FormInput = ({ label, ...otherProps }) => {

    return (
        <FormInputContainer>
            <Input {...otherProps} />
            <Label shrink =  {(otherProps.value.length?true:false)} >{label}</Label>

        </FormInputContainer>
    )
}
export default FormInput