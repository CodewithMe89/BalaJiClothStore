import { useRouteError, NavLink } from "react-router-dom";

const ErrorHandling = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "80px", margin: "0", color: "#dc3545" }}>
        {err?.status || "404"}
      </h1>

      <h2 style={{ marginBottom: "10px" }}>
        {err?.statusText || "Page Not Found"}
      </h2>

      <p style={{ color: "#555", maxWidth: "500px" }}>
        {err?.data ||
          "The page you are looking for does not exist or an unexpected error occurred."}
      </p>

      <NavLink
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorHandling;