import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <Link to="/registration">Зарегистрироваться</Link>
      <Link to="/login">Войти</Link>
    </div>
  );
}

export default MainPage;
