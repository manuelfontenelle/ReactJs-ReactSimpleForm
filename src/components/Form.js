import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  name,
  email,
  password,
  confirmPassword,
  errorPassword,
  togglePassword,
  togglePasswordConfirm,
  passwordType,
  passwordTypeConfirm,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>Name</span>
      <input
        value={name}
        placeholder="Jean Dupont"
        onChange={(e) => setName(e.target.value)}
      />
      <span>Email</span>
      <input
        value={email}
        type="email"
        placeholder="jeandupont@lereacteur.io"
        onChange={(e) => setEmail(e.target.value)}
      />
      <span>Password</span>
      <div className="passwordContainer">
        <input
          className={errorPassword && "error"}
          value={password}
          type={passwordType}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="revealPassword" onClick={togglePassword}>
          {passwordType === "password" ? (
            <FontAwesomeIcon className="eye-slash" icon="eye-slash" size="1x" />
          ) : (
            <FontAwesomeIcon className="eye" icon="eye" size="1x" />
          )}
        </div>
      </div>

      <span>Confirm your password</span>
      <div className="passwordContainer">
        <input
          className={errorPassword && "error"}
          type={passwordTypeConfirm}
          value={confirmPassword}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="revealPassword" onClick={togglePasswordConfirm}>
          {passwordTypeConfirm === "password" ? (
            <FontAwesomeIcon className="eye-slash" icon="eye-slash" size="1x" />
          ) : (
            <FontAwesomeIcon className="eye" icon="eye" size="1x" />
          )}
        </div>
      </div>
      {errorPassword && (
        <span className="error-message">
          Les mots de passe ne sont pas identiques
        </span>
      )}
      <input className="submit-button" value="Register" type="submit" />
    </form>
  );
};

export default Form;
