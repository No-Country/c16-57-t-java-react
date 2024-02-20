import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppLogo from "@components/AppLogo";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/intro");
    }, 3000); 

    return () => clearTimeout(timeout);
  }
  , [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <AppLogo size="large" className="shadow-xl drop-shadow-md"/>
    </div>
)}

export default SplashScreen