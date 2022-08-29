import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorPassword(true);
      // alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setErrorPassword(false);
      console.log("Ce qu'il y a dans le state : ", [name, email, password]);
      setStep(2);
    }
  };

  return (
    <div className="container">
      {step === 1 ? (
        <h1>Create account</h1>
      ) : step === 2 ? (
        <h1>Results</h1>
      ) : null}
      {step === 1 ? (
        <Form
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          errorPassword={errorPassword}
        />
      ) : step === 2 ? (
        <StepTwo
          setStep={setStep}
          name={name}
          email={email}
          password={password}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default App;
