import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 108,
          fontWeight: 700,
          color: "#e64a53",
          letterSpacing: "-5px",
          fontFamily: "serif",
        }}
      >
        MF
      </div>
    ),
    size,
  );
}
