import React, { useState } from "react";

export default function LoginForm(props) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  return (
    <form>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <p>Bạn đã nhập vào {username}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        {password.length < 6 && <p>Vui long nhap password hợp lệ</p>}
      </div>
      <div>
        <button onClick={props.hi}>Login</button>
      </div>
    </form>
  );
}

// function phải sử dụng 1 đoạn hook
