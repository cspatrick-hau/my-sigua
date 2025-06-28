import React from 'react';

function LoginPage() {
  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .login-container {
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 300px;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .btn {
          width: 100%;
          padding: 10px;
          background-color: #d49867;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #db4d21;
        }
      `}</style>

      <div className="login-container">
        <h2>Sigua</h2>
        <h2>Login Page</h2>
        <input type="text" className="input-field" placeholder="Username" required />
        <input type="password" className="input-field" placeholder="Password" required />
        <button className="btn">Login</button>
      </div>
    </>
  );
}

export default LoginPage;
