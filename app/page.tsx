export default function Home() {
  return (
    <main style={{ padding: "40px", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Precision Auto Diagnostic
      </h1>

      <p style={{ marginTop: "10px" }}>
        Advanced Vehicle Intelligence
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="/booking">🚗 Book Diagnostic</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/login">🔐 Login</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/admin">🛠 Admin Dashboard</a>
      </div>
    </main>
  );
}
