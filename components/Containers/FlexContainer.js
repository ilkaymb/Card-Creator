import React from "react";

export default function FlexContainer({ header, children }) {
  return (
    <>
      <center className="mb-3">
        <h1>{header}</h1>
      </center>
      <div
        style={{
          minHeight: "400px",
          maxWidth: 900,
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 50,
          padding: "15px",
        }}
      >
        {children}
      </div>
    </>
  );
}
