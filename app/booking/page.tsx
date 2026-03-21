export default function BookingPage() {
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
          maxWidth: "1100px",
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
            paddingBottom: "24px",
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
            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              Book a Diagnostic
            </h1>
            <p
              style={{
                marginTop: "12px",
                color: "#c7d6ea",
                maxWidth: "700px",
                lineHeight: 1.8,
              }}
            >
              Reserve your slot with a 50% deposit. Your booking remains pending
              until reviewed and confirmed by admin.
            </p>
          </div>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              minWidth: "220px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#aebed4",
              }}
            >
              Required Deposit
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
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "28px",
              padding: "24px",
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
              Booking Flow
            </div>

            <h2
              style={{
                marginTop: "12px",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Simple, secure, and transparent
            </h2>

            <div style={{ marginTop: "24px", display: "grid", gap: "14px" }}>
              {[
                "1. Select your service and vehicle details",
                "2. Review your total package and required deposit",
                "3. Submit your booking request",
                "4. Pay the 50% deposit",
                "5. Wait for admin confirmation",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#dce8f6",
                    lineHeight: 1.7,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, rgba(38,208,255,0.10), rgba(159,107,255,0.12))",
                border: "1px solid rgba(139,211,255,0.14)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#d7efff",
                }}
              >
                Package Summary
              </div>

              <div
                style={{
                  marginTop: "14px",
                  display: "grid",
                  gap: "10px",
                  color: "#dce8f6",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Base Advanced Diagnostic</span>
                  <strong>₱2,000</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>SUV/4x4 adjustment</span>
                  <strong>+₱500</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Mobile service</span>
                  <strong>+₱700</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Outside core area</span>
                  <strong>+₱300</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>After-hours</span>
                  <strong>+₱400</strong>
                </div>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.10)",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                }}
              >
                <span>Total</span>
                <strong>₱3,900</strong>
              </div>
            </div>
          </div>

          <form
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "28px",
              padding: "24px",
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
              Booking Form
            </div>

            <h2
              style={{
                marginTop: "12px",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Reserve your slot
            </h2>

            <div
              style={{
                marginTop: "22px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <Field label="Full Name" placeholder="Enter full name" />
              <Field label="Contact Number" placeholder="Enter mobile number" />
              <Field label="Email Address" placeholder="Enter email address" />
              <Field label="Vehicle Model" placeholder="e.g. Ford Ranger 2021" />
              <Field label="Vehicle Type" placeholder="SUV / Sedan / Hatchback" />
              <Field label="Preferred Date" placeholder="YYYY-MM-DD" />
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label text="Service Type" />
              <select style={selectStyle}>
                <option>Advanced Diagnostic Bundle</option>
                <option>Shop-Based Diagnostic</option>
                <option>Mobile Diagnostic</option>
                <option>VIP Priority Diagnostic</option>
              </select>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label text="Issue Description" />
              <textarea
                placeholder="Describe the issue or symptoms"
                style={textAreaStyle}
              />
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label text="Service Address / Notes" />
              <textarea
                placeholder="Enter address for mobile service or additional notes"
                style={textAreaStyle}
              />
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#dce8f6",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              Deposit required at booking: <strong style={{ color: "#8bd3ff" }}>₱1,950</strong>
              <br />
              Accepted payment methods: <strong>GCash, Maya, Card</strong>
              <br />
              Cancellation with refund applies with at least <strong>24 hours notice</strong>.
            </div>

            <button
              type="button"
              style={{
                marginTop: "22px",
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
              Proceed to Deposit Payment
            </button>
          </form>
        </div>
      </section>
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

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <Label text={label} />
      <input placeholder={placeholder} style={inputStyle} />
    </div>
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

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

const textAreaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "110px",
  padding: "14px 14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
  resize: "vertical",
};
