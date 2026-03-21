export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(0,191,255,0.16), transparent 25%), radial-gradient(circle at top right, rgba(138,43,226,0.12), transparent 25%), #050816",
        color: "white",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "28px",
          padding: "28px",
          backdropFilter: "blur(16px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        <a
          href="/"
          style={{
            color: "#8bd3ff",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to Home
        </a>

        <div
          style={{
            marginTop: "18px",
            fontSize: "13px",
            color: "#8bd3ff",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
          }}
        >
          Customer Access
        </div>

        <h1
          style={{
            marginTop: "12px",
            marginBottom: "10px",
            fontSize: "36px",
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          Login
        </h1>

        <p
          style={{
            color: "#c7d6ea",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          Access your account to manage bookings, vehicles, and diagnostic
          service history.
        </p>

        <div style={{ marginBottom: "16px" }}>
          <Label text="Email Address" />
          <input placeholder="Enter your email" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Label text="Password" />
          <input
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#dce8f6",
              fontSize: "14px",
            }}
          >
            <input type="checkbox" />
            Remember me
          </label>

          <a
            href="#"
            style={{
              color: "#8bd3ff",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Forgot password?
          </a>
        </div>

        <button
          type="button"
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: "18px",
            border: "none",
            background: "linear-gradient(90deg, #1ec8ff, #7a5cff)",
            color: "#06101f",
            fontWeight: 900,
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(30,200,255,0.24)",
          }}
        >
          Sign In
        </button>

        <div
          style={{
            marginTop: "22px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            color: "#c7d6ea",
            fontSize: "14px",
          }}
        >
          Don’t have an account?{" "}
          <a href="#" style={{ color: "#8bd3ff", textDecoration: "none" }}>
            Create one
          </a>
        </div>
      </div>
    </main>
  );
}

function Label({ text }: { text: string }) {
  return (
    <label
      style={{
        display: "block",
        marginBottom: "8px",
        color: "#dce8f6",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {text}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};
