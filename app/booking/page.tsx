"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    vehicleModel: "",
    vehicleType: "",
    preferredDate: "",
    serviceType: "Advanced Diagnostic Bundle",
    issueDescription: "",
    serviceAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function updateField(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      setMessage(`Booking submitted successfully. Reference: ${data.booking.id}`);
      setForm({
        fullName: "",
        contactNumber: "",
        email: "",
        vehicleModel: "",
        vehicleType: "",
        preferredDate: "",
        serviceType: "Advanced Diagnostic Bundle",
        issueDescription: "",
        serviceAddress: "",
      });
    } catch {
      setError("Failed to submit booking");
    } finally {
      setLoading(false);
    }
  }

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
          </div>

          <form
            onSubmit={handleSubmit}
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
              <Field
                label="Full Name"
                placeholder="Enter full name"
                value={form.fullName}
                onChange={(v) => updateField("fullName", v)}
              />
              <Field
                label="Contact Number"
                placeholder="Enter mobile number"
                value={form.contactNumber}
                onChange={(v) => updateField("contactNumber", v)}
              />
              <Field
                label="Email Address"
                placeholder="Enter email address"
                value={form.email}
                onChange={(v) => updateField("email", v)}
              />
              <Field
                label="Vehicle Model"
                placeholder="e.g. Ford Ranger 2021"
                value={form.vehicleModel}
                onChange={(v) => updateField("vehicleModel", v)}
              />
              <Field
                label="Vehicle Type"
                placeholder="SUV / Sedan / Hatchback"
                value={form.vehicleType}
                onChange={(v) => updateField("vehicleType", v)}
              />
              <Field
                label="Preferred Date"
                placeholder="YYYY-MM-DD"
                value={form.preferredDate}
                onChange={(v) => updateField("preferredDate", v)}
              />
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label text="Service Type" />
              <select
                value={form.serviceType}
                onChange={(e) => updateField("serviceType", e.target.value)}
                style={selectStyle}
              >
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
                value={form.issueDescription}
                onChange={(e) => updateField("issueDescription", e.target.value)}
                style={textAreaStyle}
              />
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label text="Service Address / Notes" />
              <textarea
                placeholder="Enter address for mobile service or additional notes"
                value={form.serviceAddress}
                onChange={(e) => updateField("serviceAddress", e.target.value)}
                style={textAreaStyle}
              />
            </div>

            {message ? (
              <div
                style={{
                  marginTop: "18px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#bbf7d0",
                  lineHeight: 1.6,
                }}
              >
                {message}
              </div>
            ) : null}

            {error ? (
              <div
                style={{
                  marginTop: "18px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  color: "#fecaca",
                  lineHeight: 1.6,
                }}
              >
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
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
                opacity: loading ? 0.7 : 1,
                boxShadow: "0 12px 30px rgba(30,200,255,0.24)",
              }}
            >
              {loading ? "Submitting Booking..." : "Submit Booking"}
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
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <Label text={label} />
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
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
