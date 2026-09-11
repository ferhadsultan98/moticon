import { getIconDetail } from "@/lib/icon-copy";

/**
 * Draws an icon's static geometry from the generated icon-details.json (the
 * same source the OG images use). Server-renderable, ships zero client JS and
 * never touches the @moticon/react barrel — for grids and link lists where the
 * live animation isn't the point.
 */
export function StaticGlyph({
  name,
  size = 28,
  strokeWidth = 1.75,
  className = "",
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const geo = getIconDetail(name)?.geometry;
  if (!geo) {
    return (
      <span
        className={`inline-block rounded bg-border ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  const shapes: React.ReactNode[] = [];
  geo.paths?.forEach((d, i) => shapes.push(<path key={`p${i}`} d={d} />));
  geo.circles?.forEach((c, i) =>
    shapes.push(<circle key={`c${i}`} cx={c.cx} cy={c.cy} r={c.r} />),
  );
  geo.lines?.forEach((l, i) =>
    shapes.push(<path key={`l${i}`} d={`M${l.x1} ${l.y1} L${l.x2} ${l.y2}`} />),
  );
  geo.polylines?.forEach((pts, i) => {
    const d =
      "M" +
      pts
        .trim()
        .split(/\s+/)
        .map((pair, j) => (j === 0 ? pair : `L${pair}`))
        .join(" ");
    shapes.push(<path key={`pl${i}`} d={d} />);
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {shapes}
    </svg>
  );
}
