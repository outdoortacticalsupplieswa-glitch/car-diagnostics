export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(0,191,255,0.16), transparent 25%), radial-gradient(circle at top right, rgba(138,43,226,0.12), transparent 25%), #050816",
        color: "white",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 20px 80px",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div>
            <a href="/" style={{ color: "#8bd3ff", textDecoration: "none" }}>
              ← Back to Home
            </a>

            <div
              style={{
                marginTop: "12px",
                fontSize: "13px",
                color: "#8bd3ff",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
              }}
            >
              Customer Dashboard
            </div>

            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "40px",
                fontWeight: 900,
              }}
            >
              Welcome back, Nel
            </h1>
          </div>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            VIP Member ⭐
          </div>
        </header>

        {/* Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {[
            ["3", "Active Bookings"],
            ["2", "Vehicles Registered"],
            ["₱5,850", "Total Spent"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: 900 }}>
                {value}
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "#aebed4",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
          }}
        >
          {/* Bookings */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "28px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <h2 style={{ marginBottom: "16px" }}>My Bookings</h2>

            {[
              ["PAD-1024", "Fortuner", "Pending", "₱1,950"],
              ["PAD-1023", "Civic", "Confirmed", "₱1,950"],
            ].map((row) => (
              <div
                key={row[0]}
                style={{
                  padding: "16px",
                  marginBottom: "12px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.04)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{row[1]}</div>
                  <div style={{ fontSize: "13px", color: "#aebed4" }}>
                    {row[0]} • {row[2]}
                  </div>
                </div>
                <strong>{row[3]}</strong>
              </div>
            ))}
          </div>

          {/* Vehicles */}
          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "28px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <h3>My Vehicles</h3>

              {[
                "2023 VW T-Cross",
                "2005 Golf GTI",
              ].map((car) => (
                <div
                  key={car}
                  style={{
                    marginTop: "10px",
                    padding: "12px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {car}
                </div>
              ))}
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(38,208,255,0.10), rgba(159,107,255,0.12))",
                borderRadius: "28px",
                padding: "24px",
                border: "1px solid rgba(139,211,255,0.14)",
              }}
            >
              <h3>Quick Actions</h3>

              {[
                "Book new diagnostic",
                "Add vehicle",
                "Upgrade to VIP",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    marginTop: "10px",
                    padding: "12px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
