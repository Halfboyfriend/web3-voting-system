import React from "react";
import { NavLink } from "react-router-dom";
import useWeb3 from "../hooks/useWeb3";

export default function Home() {
  const { connected, electionRecords } = useWeb3();
  const {  isEligible } = electionRecords;
  return (
    <main className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center">
        Secure e-voting system using blockchain technology
      </h1>
      <div className="my-3">

    {/* CONDITIONER */}
    
    {connected && isEligible ? '' :  <NavLink className="btn btn-lg register-link" to="/register">
          Register
        </NavLink> }


        <NavLink className="btn btn-lg ms-2 vote-link" to="/vote">
          Vote
        </NavLink>
      </div>
      <p className="text-center">By Ubochi Chibuze</p>
    </main>
  );
}
