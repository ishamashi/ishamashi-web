import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Icho Ishamashi - Senior Engineering Consultant";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background Accent */}
        <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, background: "#EFF6FF", borderRadius: "50%", filter: "blur(100px)", opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: -200, right: -200, width: 600, height: 600, background: "#F3E8FF", borderRadius: "50%", filter: "blur(100px)", opacity: 0.5 }} />

        {/* Logo Text */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#18181B" }}>ishamashi</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#2563EB" }}>.</div>
        </div>

        {/* Main Title */}
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-0.05em", color: "#18181B", textAlign: "center", lineHeight: 1 }}>Engineering Lead</div>
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-0.05em", background: "linear-gradient(to right, #2563EB, #9333EA)", backgroundClip: "text", color: "transparent", textAlign: "center", lineHeight: 1.2 }}>& Strategic Consultant</div>

        {/* Subtitle */}
        <div style={{ fontSize: 24, color: "#52525B", marginTop: 40, fontWeight: 500 }}>Forging Logic into Digital Reality.</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
