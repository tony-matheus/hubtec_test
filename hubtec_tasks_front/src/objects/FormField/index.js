import styled from 'styled-components';


const FormCenter = styled.div`
  margin-bottom: 100px;
`;

const FormTitle = styled.div`
  color: #707C8B;
  font-weight: 300;
  margin-bottom: 50px;
`;

const FormFields = styled.form`
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
  color: white;
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
  background-color: #52C4B9;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
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


export {FormCenter, FormTitle, FormFields, FormButtonField, FormField, FormFieldLabel, FormFieldInput, FormFieldButton, FormFieldCheckbox, FormFieldTermsLink, FormLogin}
