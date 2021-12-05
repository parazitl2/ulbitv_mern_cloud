import React, { useCallback, useState } from 'react';
import "./authorisation.css";
import Input from '../../utils/input/input';
import { login } from '../../actions/user';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleLogin = useCallback(
    // here is redux thunk is used, we call the login function that returns 
    // function that waits for dispatcher as argument and perform async action
    () => dispatch(login(email, password)),
    [dispatch, email, password]
  );

  return (
    <div className="authorisation">
      <div className="authorisation__header">Логин</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
      <button className="authorisation__btn" onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default React.memo(Login);