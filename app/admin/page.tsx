"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  vehicleModel: string;
  vehicleType: string;
  preferredDate: string;
  serviceType: string;
  issueDescription: string;
  serviceAddress: string;
  createdAt: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBookings() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/bookings", {
        method: "GET",
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to load bookings");
      }

      setBookings(data.bookings || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load bookings"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

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
          maxWidth: "1280px",
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
              Booking Management
            </h1>
          </div>

          <button
            onClick={loadBookings}
            style={{
              padding: "14px 18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Refresh Bookings
          </button>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <StatCard value={String(bookings.length)} label="Total Bookings" />
          <StatCard
            value={
              bookings.length > 0
                ? bookings[0].preferredDate || "-"
                : "-"
            }
            label="Latest Preferred Date"
          />
          <StatCard
            value={bookings.length > 0 ? "Active" : "Waiting"}
            label="System Status"
          />
        </div>

        {loading ? (
          <div style={panelStyle}>
            <h2 style={{ marginTop: 0 }}>Loading bookings...</h2>
            <p style={{ color: "#c7d6ea", lineHeight: 1.8 }}>
              Please wait while the latest booking submissions are loaded.
            </p>
          </div>
        ) : error ? (
          <div style={panelStyle}>
            <h2 style={{ marginTop: 0, color: "#fca5a5" }}>Error</h2>
            <p style={{ color: "#fecaca", lineHeight: 1.8 }}>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <div style={panelStyle}>
            <h2 style={{ marginTop: 0 }}>No bookings yet</h2>
            <p style={{ color: "#c7d6ea", lineHeight: 1.8 }}>
              Once a customer submits the booking form, it will appear here.
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "18px" }}>
            {bookings.map((booking) => (
              <div key={booking.id} style={cardStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "18px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#8bd3ff",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                      }}
                    >
                      Booking Reference
                    </div>
                    <div
                      style={{
                        marginTop: "8px",
                        fontSize: "28px",
                        fontWeight: 900,
                      }}
                    >
                      {booking.id}
                    </div>
                  </div>

                  <div
                    style={{
                      alignSelf: "flex-start",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background: "rgba(34,197,94,0.14)",
                      border: "1px solid rgba(34,197,94,0.28)",
                      color: "#bbf7d0",
                      fontWeight: 700,
                      fontSize: "13px",
                    }}
                  >
                    New Submission
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "14px",
                  }}
                >
                  <InfoBox label="Customer Name" value={booking.fullName} />
                  <InfoBox label="Contact Number" value={booking.contactNumber} />
                  <InfoBox label="Email Address" value={booking.email} />
                  <InfoBox label="Preferred Date" value={booking.preferredDate} />
                  <InfoBox label="Vehicle Model" value={booking.vehicleModel} />
                  <InfoBox label="Vehicle Type" value={booking.vehicleType} />
                  <InfoBox label="Service Type" value={booking.serviceType} />
                  <InfoBox
                    label="Submitted At"
                    value={new Date(booking.createdAt).toLocaleString()}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                    marginTop: "14px",
                  }}
                >
                  <InfoBox
                    label="Issue Description"
                    value={booking.issueDescription}
                    multiLine
                  />
                  <InfoBox
                    label="Service Address / Notes"
                    value={booking.serviceAddress}
                    multiLine
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "22px",
        padding: "20px",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 900,
          color: "white",
          wordBreak: "break-word",
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
  );
}

function InfoBox({
  label,
  value,
  multiLine = false,
}: {
  label: string;
  value: string;
  multiLine?: boolean;
}) {
  return (
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
          color: "#8bd3ff",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: "#dce8f6",
          lineHeight: multiLine ? 1.8 : 1.5,
          whiteSpace: multiLine ? "pre-wrap" : "normal",
          wordBreak: "break-word",
        }}
      >
        {value || "-"}
      </div>
    </div>
  );
}

const panelStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "28px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.10)",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "28px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};
