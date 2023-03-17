import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const {useUserContext}  = require("../context/UserContext")

export default function Login() {
  const navigate = useNavigate();

  // const {authenticate} = useUserContext();

  async function handleCredentialResponse(response) {
    const loginResponse = await axios.post(
      "http://localhost:4269/api/user/login",
      {
        auth_id: response,
      }
    );
    console.log(loginResponse);
    if (loginResponse.status == 200) {
      const data = loginResponse.data;
      // authenticate(data.user)
      localStorage.setItem("auth", true);
      localStorage.setItem("id", data.id);
      localStorage.setItem("role", data.role);
      window.location.replace("/catlog");
    }
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "928690520998-9s94krn410brcuhpa44h760bdndba5lk.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", CSS: { borderRadius: "0.3em" } } // customization attributes
    );
    // google.accounts.id.prompt();
  }, []);
  return (
    <div className="bg-slate-800 h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-Poppins text-4xl text-neutral-600">
        Login to use our product!
      </h1>
      <div id="buttonDiv"></div>
    </div>
  );
}
