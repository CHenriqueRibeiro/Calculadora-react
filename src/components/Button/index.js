import { ButtonContainer } from "./styles";
const Button = ({ label, onClick, className }) => {
    return (
        <ButtonContainer onClick={onClick} type='button' className={className}>
            {label}
        </ButtonContainer>

    );

}



export default Button;

