import React from "react";
import { RegisterForm } from "../components";
import useWeb3 from "../hooks/useWeb3";

export default function Register() {
  const { connected, electionRecords } = useWeb3();
  const {  isEligible } = electionRecords;
  return (

    
    <div className="d-flex justify-content-center register p-3">
       {connected && isEligible ? '' :  <RegisterForm />}
    </div>
  );
}
