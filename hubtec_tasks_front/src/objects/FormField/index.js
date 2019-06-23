import styled from 'styled-components';
import {Button} from 'react-materialize'
import {Card} from 'react-materialize';

const FixedButton = styled(Button)`
  position: fixed;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  left: ${props => props.left ? props.left : ""}px;
  padding-bottom: 10px;
  margin-top: 10px;
  color: white;
  z-index: 1;
  svg{
    color: white
  }
`;


const CardForm = styled(Card)`
    display: ${props => props.hide ? "none" : "unset"} !important;
    background-color: white;
    width: 50%;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    left: 25%;
    position: fixed;
    z-index: 1;
`;

const ListFields = styled.div`
  display: inline-block;
`

const FormCenter = styled.div`
  margin-bottom: 100px;
`;

const FormTitle = styled.div`
  color: #707C8B;
  font-weight: 300;
  margin-bottom: 50px;
`;

const FormFields = styled.form`

  color: ${props => props.white ? "white" : "black"} !important;
`;

const FormLogin = styled.div`
   div{
    margin-bottom: 40px;
   }
   
   label{
    font-size: .9em;
   }
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const FormButtonField = styled.div`
  margin-bottom: 10px;
  @media(max-width: 700px){
    display: inline;
  }
  
`;

const FormFieldLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: .8em;
  color: ${props => props.white ? "white" : "black"};
`;

const FormFieldInput = styled.input`
  width: 85%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
  &::placeholder{
    color: #616E7F
  }
`;

const FormFieldButton = styled.button`
  background-color: ${props => props.primary ? "#52C4B9" : "#5b5b5b"};;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: ${props => props.small ? "10px 40px" : "15px 70px;"};
  font-size: .9em;
  font-weight: 500;
  margin-right: 20px;
  @media(max-width: 700px){
    width: 100%;
  }
`;

const FormFieldCheckbox = styled.input`
    position: relative;
    top: 1.5px;
`;

const FormFieldTermsLink = styled.a`
    color: white;
    border-bottom: 1px solid #199087;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 2px;
    margin-left: 5px;
`;


export {FormCenter,
    FormTitle,
    FormFields,
    FormButtonField,
    FormField,
    FormFieldLabel,
    FormFieldInput,
    FormFieldButton,
    FormFieldCheckbox,
    FormFieldTermsLink,
    FormLogin,
    FixedButton,
    CardForm,
    ListFields
}
