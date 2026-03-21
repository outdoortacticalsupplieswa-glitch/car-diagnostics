export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(0,191,255,0.18), transparent 25%), radial-gradient(circle at top right, rgba(138,43,226,0.14), transparent 25%), #050816",
        color: "white",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 20px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 0 24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Precision Auto Diagnostic
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#8bd3ff",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Advanced Vehicle Intelligence
            </div>
          </div>

          <a
            href="/booking"
            style={{
              background: "linear-gradient(90deg, #1ec8ff, #7a5cff)",
              color: "#06101f",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "14px",
              fontWeight: 700,
              boxShadow: "0 10px 30px rgba(30,200,255,0.25)",
            }}
          >
            Book Now
          </a>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: "13px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "rgba(30,200,255,0.12)",
                color: "#8bd3ff",
                border: "1px solid rgba(139,211,255,0.18)",
                marginBottom: "20px",
              }}
            >
              Premium booking experience for serious car owners
            </div>

            <h1
              style={{
                fontSize: "58px",
                lineHeight: 1,
                margin: 0,
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              Precision booking.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #26d0ff 0%, #9f6bff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Premium diagnostics.
              </span>
              <br />
              Faster answers.
            </h1>

            <p
              style={{
                marginTop: "24px",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#c7d6ea",
                maxWidth: "700px",
              }}
            >
              Precision Auto Diagnostic delivers advanced vehicle scanning,
              mobile diagnostic support, and professional booking workflows for
              customers who want clear answers, fair pricing, and a modern
              service experience.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <a
                href="/booking"
                style={{
                  background: "linear-gradient(90deg, #1ec8ff, #7a5cff)",
                  color: "#06101f",
                  textDecoration: "none",
                  padding: "15px 24px",
                  borderRadius: "16px",
                  fontWeight: 800,
                }}
              >
                Reserve a Slot
              </a>

              <a
                href="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "15px 24px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Customer Login
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "30px",
              }}
            >
              {[
                ["50%", "Deposit Required"],
                ["24h", "Refund Rule"],
                ["VIP", "Priority Booking"],
                ["Mobile", "Service Option"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    padding: "16px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#8bd3ff",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                      fontSize: "12px",
                      color: "#b4c5dd",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "28px",
              padding: "22px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
              backdropFilter: "blur(16px)",
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
              Featured Package
            </div>

            <h2
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Advanced Diagnostic Bundle
            </h2>

            {[
              ["Base Advanced Diagnostic", "₱2,000"],
              ["SUV/4x4 adjustment", "+₱500"],
              ["Mobile service", "+₱700"],
              ["Outside core area", "+₱300"],
              ["After-hours", "+₱400"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  color: "#d8e4f4",
                }}
              >
                <span>{label}</span>
                <strong style={{ color: "#8bd3ff" }}>{value}</strong>
              </div>
            ))}

            <div
              style={{
                marginTop: "18px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#aebed4",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Total
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "32px",
                    fontWeight: 900,
                  }}
                >
                  ₱3,900
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(38,208,255,0.16), rgba(159,107,255,0.18))",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(139,211,255,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#d7efff",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Deposit
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#8bd3ff",
                  }}
                >
                  ₱1,950
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#c7d6ea",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              Payments prepared for <strong>GCash</strong>, <strong>Maya</strong>, and{" "}
              <strong>Card</strong>. Booking flow: <strong>Deposit → Admin Review → Confirmed</strong>.
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              title: "Advanced Diagnostics",
              text: "Deep scan, fault code review, live data analysis, and system-level vehicle checks.",
            },
            {
              title: "Mobile Service",
              text: "On-site convenience for customers who need professional diagnostic support where they are.",
            },
            {
              title: "VIP Membership",
              text: "Priority scheduling, automatic discounts, and premium access for repeat customers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: "12px",
                  color: "#c7d6ea",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
