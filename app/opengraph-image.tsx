import { ImageResponse } from "next/og";

export const alt =
  "Montserrat Fleck · Social Coordinator at Paramount. Brand voice, live event copy, Threads playbook. 200M+ Marshals views, +218K @garfield Threads, 9 international markets.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #f1e8d8 0%, #f1e8d8 55%, #ecd9c2 100%)",
          color: "#4f464e",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#50552d",
          }}
        >
          <span
            style={{
              width: 56,
              height: 2,
              background: "#50552d",
              display: "block",
            }}
          />
          <span>Social · Brand-side · NYC</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#08080a",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Montserrat Fleck</span>
            <span style={{ color: "#e64a53" }}>
              writes the post. lives in the comments.
            </span>
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.3,
              color: "rgba(79,70,78,0.85)",
              maxWidth: 980,
              display: "flex",
            }}
          >
            Social Coordinator at Paramount. Brand voice, live event copy,
            and the Threads playbook across the franchise roster.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #08080a",
            paddingTop: 28,
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, color: "#e64a53" }}>200M+</span>
              <span style={{ fontSize: 18, color: "rgba(79,70,78,0.7)" }}>
                Marshals launch views
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, color: "#e64a53" }}>+218K</span>
              <span style={{ fontSize: 18, color: "rgba(79,70,78,0.7)" }}>
                @garfield Threads · 90 days
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, color: "#e64a53" }}>9</span>
              <span style={{ fontSize: 18, color: "rgba(79,70,78,0.7)" }}>
                international markets
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(79,70,78,0.6)",
              display: "flex",
            }}
          >
            montserratfleck.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
