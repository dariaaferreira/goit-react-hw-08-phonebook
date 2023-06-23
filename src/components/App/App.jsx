import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import { Container, LoaderContainer } from './App.styled';
import AppBar from 'components/AppBar/AppBar';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { PublicRoute } from 'components/Route/PublicRoute';
import { PrivateRoute } from 'components/Route/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Container>
      <AppBar />
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </Container>
  ) : (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
