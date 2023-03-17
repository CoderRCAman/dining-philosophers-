import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function VendorSignup() {
  const navigate = useNavigate();
  async function handleCredentialResponse(response) {
    const loginResponse = await axios.post(
      "http://localhost:4269/api/vendor/login",
      {
        auth_id: response,
      }
    );
    console.log(loginResponse);
    if (loginResponse.status == 200) {
      localStorage.setItem("auth", true);
      navigate("/dashboard/vendor");
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
        Sign up to sell in our MULTIVENDOS
      </h1>
      <div id="buttonDiv"></div>
      <div className="flex flex-col items-center text-white">
        <div className="text-3xl font-Gilroy">Are you a maker?</div>
        <div className="text-3xl">Email hello@reallygreatsite.com to register as a seller.</div>
      </div>
    </div>
  );
}
