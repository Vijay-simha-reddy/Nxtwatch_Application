import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.value === true ? null : '#212121')};
`

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${props =>
    props.value === true ? '0px 0px 5px 5px #ebebeb' : null};
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => (props.value === true ? null : '#0f0f0f')};
`
export const LogoImage = styled.img`
  width: 50%;
  margin-bottom: 20px;
  font-family: 'roboto';
  align-self: center;
`

export const Label = styled.label`
  color: ${props => (props.value === true ? '#616e7c' : '#cccccc')};
  font-weight: 500;
  margin-top: 20px;
`

export const InputField = styled.input`
  width: 100%;
  border: 1px solid #cbd5e1;
  font-size: 17px;
  padding: 6px 4px;
  border-radius: 4px;
  margin-top: 4px;
  font-family: 'roboto';
  outline: none;
`

export const ShowPassword = styled.label`
  font-weight: 500;
  font-family: 'roboto';
  font-size: 14px;
  margin-top: 6px;
  color: ${props => (props.value === false ? '#ebebeb' : null)};
`
export const LoginButton = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  font-family: 'roboto';
  font-size: 18px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 400;
`
