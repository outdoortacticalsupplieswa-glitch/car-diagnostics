export default function AdminPage() {
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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div>
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
                marginTop: "14px",
                fontSize: "13px",
                color: "#8bd3ff",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
              }}
            >
              Admin Dashboard
            </div>

            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              Operations Overview
            </h1>
          </div>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#dce8f6",
              fontSize: "14px",
            }}
          >
            Precision Auto Diagnostic Admin
          </div>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {[
            ["128", "Total Bookings"],
            ["₱186,500", "Revenue"],
            ["19", "VIP Members"],
            ["6", "Refund Cases"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "22px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "#ffffff",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "#aebed4",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "28px",
              padding: "24px",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#8bd3ff",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
              }}
            >
              Booking Queue
            </div>

            <h2
              style={{
                marginTop: "12px",
                marginBottom: "20px",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Recent bookings
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "620px",
              }}
            >
              <thead>
                <tr style={{ textAlign: "left", color: "#9fb2c9" }}>
                  {["Ref", "Vehicle", "Date", "Status", "Deposit"].map((head) => (
                    <th
                      key={head}
                      style={{
                        padding: "12px 10px",
                        borderBottom: "1px solid rgba(255,255,255,0.10)",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["PAD-1024", "Fortuner", "Mar 24, 2026", "Pending", "₱1,950"],
                  ["PAD-1023", "Montero", "Mar 24, 2026", "Confirmed", "₱1,950"],
                  ["PAD-1022", "Civic", "Mar 25, 2026", "Refund Review", "₱1,000"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={index}
                        style={{
                          padding: "14px 10px",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          color: "#dce8f6",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "28px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#8bd3ff",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                }}
              >
                Quick Actions
              </div>

              <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
                {[
                  "Confirm pending bookings",
                  "Reject or reschedule requests",
                  "Review refund cases",
                  "Update pricing rules",
                  "Manage VIP customers",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#dce8f6",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(38,208,255,0.10), rgba(159,107,255,0.12))",
                border: "1px solid rgba(139,211,255,0.14)",
                borderRadius: "28px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#d7efff",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                }}
              >
                Admin Notes
              </div>

              <p
                style={{
                  marginTop: "14px",
                  color: "#e4f3ff",
                  lineHeight: 1.8,
                }}
              >
                This is a preview dashboard for operational control. The next
                stage can connect it to real booking approval, refund handling,
                VIP management, and reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
