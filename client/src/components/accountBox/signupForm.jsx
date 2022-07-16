import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Link, useNavigate } from "react-router-dom";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function SignupForm(props, { history }) {
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [toefl, setToefl] = useState("");
  const [lor, setLor] = useState("");
  const [sop, setSop] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [research, setResearch] = useState("");

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: username,
          email,
          password,
          toefl,
          lor,
          cgpa,
          research,
          sop,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data.id);

      navigate("/dashboard");
      //   history.push(`/dashboard`);
    } catch (error) {
      setError(error);
      //   console.log(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="number"
          placeholder="Toefl rating"
          onChange={(e) => setToefl(e.target.value)}
          value={toefl}
        />
        <Input
          type="number"
          placeholder="LOR rating"
          onChange={(e) => setLor(e.target.value)}
          value={lor}
        />
        <Input
          type="number"
          placeholder="SOP rating"
          onChange={(e) => setSop(e.target.value)}
          value={sop}
        />
        <Input
          type="number"
          placeholder="CGPA rating"
          onChange={(e) => setCgpa(e.target.value)}
          value={cgpa}
        />
        <Input
          type="number"
          placeholder="Research rating"
          onChange={(e) => setResearch(e.target.value)}
          value={research}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmpassword}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={registerHandler}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
