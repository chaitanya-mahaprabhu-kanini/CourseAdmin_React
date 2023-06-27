import React from 'react';
import './AdminLoginPage.css';

function AdminLoginPage() {

  const homeButtonClickHandler = (e) => {
    window.location = '/';  
  }

  const loginButtonClickHandler = (e) => {
    window.location = '/AdminPage';  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container frosted" id="adminLogin">
      <h3 style = {{marginBottom: '1rem'}}>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div id = "adminButtons">
        <button style = {{marginTop: '0.5rem'}} type="submit" className="btn btn-primary" onClick = {loginButtonClickHandler}>Login</button>
        <button style = {{marginTop: '0.5rem', marginLeft: '0.5rem'}} type="submit" className="btn btn-success" onClick = {homeButtonClickHandler}>Home Page</button>
        </div>
      </form>
    </div>
  );
}

export {AdminLoginPage};
