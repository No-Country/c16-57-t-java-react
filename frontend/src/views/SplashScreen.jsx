import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppLogo from "@components/AppLogo";

const SplashScreen = ({
  delay = 3000,
  destination
}) => {
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateTo(destination);
    }, delay); 

    return () => clearTimeout(timeout);
  }
  , [delay, navigateTo, destination]);

  return (
    <section className={
      `flex flex-col items-center justify-center h-dvh gap-8
      *:duration-1000 *:animate-in *:fade-in *:slide-in-from-bottom
    `}>
      <AppLogo size="medium" className="shadow-xl drop-shadow-md" />
      <h1 className="text-3xl font-custom-200 text-accent">
        VerduMarket
      </h1>
    </section>
)}

export default SplashScreen