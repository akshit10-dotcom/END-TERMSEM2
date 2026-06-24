import React, { useState } from "react";

function ArmstrongChecker() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    const number = parseInt(num);

    if (isNaN(number)) {
      setResult("Please enter a valid number");
      return;
    }

    const digits = number.toString().split("");
    const power = digits.length;

    const sum = digits.reduce(
      (acc, digit) => acc + Math.pow(Number(digit), power),
      0
    );

    setResult(
      sum === number
        ? `${number} is an Armstrong Number ✅`
        : `${number} is NOT an Armstrong Number ❌`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          width: "350px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Armstrong Number Checker
        </h2>

        <input
          type="number"
          placeholder="Enter a number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
            marginBottom: "15px",
            outline: "none",
          }}
        />

        <button
          onClick={checkArmstrong}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Check
        </button>

        {result && (
          <p
            style={{
              marginTop: "15px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default ArmstrongChecker;