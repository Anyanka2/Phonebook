import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user/userThunk';
import { StyledLabel, StyledForm, StyledInput, StyledButton, Container } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
      </StyledForm>
      </Container>
  );
};
