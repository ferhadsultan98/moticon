import { ImageResponse } from "next/og";
import { iconMeta } from "@/lib/icons";
import { getIconDetail, humanizeName } from "@/lib/icon-copy";

export const dynamicParams = false;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "moticon animated React icon";

export function generateStaticParams() {
  return iconMeta.map((item) => ({ name: item.name }));
}

const ACCENT = "#3dff9e";
const BG = "#0a0a0b";
const FG = "#e6edf3";
const MUTED = "#8b949e";

export default async function Image({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const meta = iconMeta.find((i) => i.name === name);
  const detail = getIconDetail(name);
  const geo = detail?.geometry;
  const human = meta ? humanizeName(meta.name) : name;

  // Build the icon's static geometry as a single flat list of SVG children.
  const shapes: React.ReactNode[] = [];
  geo?.paths?.forEach((d, i) => shapes.push(<path key={`p${i}`} d={d} />));
  geo?.circles?.forEach((c, i) =>
    shapes.push(<circle key={`c${i}`} cx={c.cx} cy={c.cy} r={c.r} />)
  );
  geo?.lines?.forEach((l, i) =>
    shapes.push(<path key={`l${i}`} d={`M${l.x1} ${l.y1} L${l.x2} ${l.y2}`} />)
  );
  geo?.polylines?.forEach((pts, i) => {
    const d =
      "M" +
      pts
        .trim()
        .split(/\s+/)
        .map((pair, j) => (j === 0 ? pair : `L${pair}`))
        .join(" ");
    shapes.push(<path key={`pl${i}`} d={d} />);
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: ACCENT }} />
          <div style={{ display: "flex", fontSize: 30, color: MUTED, letterSpacing: 1 }}>moticon</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 64 }}>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 300,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 32,
              border: "1px solid #21262d",
              background: "#111317",
            }}
          >
            <svg
              width={200}
              height={200}
              viewBox="0 0 24 24"
              fill="none"
              stroke={ACCENT}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {shapes}
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
            <div style={{ display: "flex", fontSize: 68, fontWeight: 600, color: FG }}>
              {human}
            </div>
            <div style={{ display: "flex", fontSize: 34, color: MUTED, marginTop: 16 }}>
              Animated React icon
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                alignSelf: "flex-start",
                fontSize: 26,
                color: ACCENT,
                border: `1px solid ${ACCENT}`,
                borderRadius: 999,
                padding: "8px 22px",
              }}
            >
              {meta?.mechanic ? `${meta.mechanic} · on ${meta.trigger}` : "physical motion"}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: MUTED }}>
          moticon-web.vercel.app/icons/{name}
        </div>
      </div>
    ),
    { ...size }
  );
}
