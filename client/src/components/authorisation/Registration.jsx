import React, { useCallback, useState } from 'react';
import "./authorisation.css";
import Input from '../../utils/input/input';
import { registration } from '../../actions/user';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = useCallback(() => registration(email, password), [email, password]);

  return (
    <div className="authorisation">
      <div className="authorisation__header">Регистрация</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
      <button className="authorisation__btn" onClick={handleClick}>Войти</button>
    </div>
  );
};

export default React.memo(Registration);