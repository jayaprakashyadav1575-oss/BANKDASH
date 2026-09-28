import React from 'react';

/**
 * Pixel-perfect SVG Exploded Pie Chart matching the Figma BankDash design:
 * - 30% Entertainment (Dark Navy #343C6A)
 * - 15% Bill Expense (Vivid Orange #FC7900 - Exploded outward)
 * - 35% Others (Royal Blue #1814F3)
 * - 20% Investment (Vibrant Magenta #FA00FF)
 */
export default function ExpenseStatisticsChart() {
  const size = 320;
  const center = size / 2;
  const radius = 120;

  // Sector specifications
  // Angles in degrees (0 is right, 90 is bottom, 180 is left, 270 is top)
  const sectors = [
    {
      name: 'Entertainment',
      percent: '30%',
      color: '#343C6A',
      startAngle: 195,
      endAngle: 303,
      exploded: false,
    },
    {
      name: 'Bill Expense',
      percent: '15%',
      color: '#FC7900',
      startAngle: 303,
      endAngle: 357,
      exploded: true, // pulled outward!
      explodeDistance: 14,
    },
    {
      name: 'Others',
      percent: '35%',
      color: '#1814F3',
      startAngle: 357,
      endAngle: 483, // 483 - 360 = 123
      exploded: false,
    },
    {
      name: 'Investment',
      percent: '20%',
      color: '#FA00FF',
      startAngle: 123,
      endAngle: 195,
      exploded: false,
    },
  ];

  // Helper to convert polar coordinates to Cartesian
  const polarToCartesian = (cx, cy, r, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  };

  // Generate SVG path for a pie slice
  const createPieSlice = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      `M ${cx} ${cy}`,
      `L ${start.x} ${start.y}`,
      `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
      'Z',
    ].join(' ');
  };

  return (
    <div className="w-full flex items-center justify-center p-2">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[310px] h-auto overflow-visible select-none"
      >
        <defs>
          <filter id="sliceShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.08" />
          </filter>
        </defs>

        {sectors.map((s, index) => {
          let cx = center;
          let cy = center;

          // Calculate offset if exploded
          if (s.exploded && s.explodeDistance) {
            const midAngle = (s.startAngle + s.endAngle) / 2;
            const midRad = ((midAngle - 90) * Math.PI) / 180.0;
            cx += s.explodeDistance * Math.cos(midRad);
            cy += s.explodeDistance * Math.sin(midRad);
          }

          // Path for the slice
          const d = createPieSlice(cx, cy, radius, s.startAngle, s.endAngle);

          // Position for text label
          const midAngle = (s.startAngle + s.endAngle) / 2;
          const textRadius = radius * 0.62;
          const textPos = polarToCartesian(cx, cy, textRadius, midAngle);

          return (
            <g key={index} className="transition-transform duration-300 hover:opacity-95">
              <path
                d={d}
                fill={s.color}
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinejoin="round"
                filter="url(#sliceShadow)"
              />
              <text
                x={textPos.x}
                y={textPos.y - 6}
                fill="#FFFFFF"
                textAnchor="middle"
                className="font-bold text-[13px] tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {s.percent}
              </text>
              <text
                x={textPos.x}
                y={textPos.y + 11}
                fill="#FFFFFF"
                textAnchor="middle"
                className="font-medium text-[11px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {s.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
