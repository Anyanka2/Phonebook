import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/user/userThunk';
import { Button, Form, Input, Label, Container } from './RegistrationForm.Styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signUpThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">SignUp</Button>
      </Form>
      </Container>
  );
};
export default RegistrationForm;