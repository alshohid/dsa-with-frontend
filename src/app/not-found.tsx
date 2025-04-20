import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: "1rem",
        }}
      >
        404 - Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#64748b", marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/product"
        style={{
          backgroundColor: "#0ea5e9",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontSize: "1rem",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
