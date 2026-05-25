import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// "MF" mark in lobster pink on the site's eggshell background.
// Rendered at 64x64; browsers scale down for 16x16 / 32x32 tabs.

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f1e8d8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 38,
          fontWeight: 700,
          color: "#e64a53",
          letterSpacing: "-2px",
          fontFamily: "serif",
        }}
      >
        MF
      </div>
    ),
    size,
  );
}
