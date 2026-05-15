"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RSM = require("react-simple-maps");
const { ComposableMap, Geographies, Geography, Marker, Line } = RSM;

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// ISO 3166-1 numeric IDs for Kenya's neighbours
const KENYA_ID = "404";
const NEIGHBOUR_IDS = new Set(["834", "800", "231", "706", "728", "716"]);

const NAIROBI = {
  name: "Nairobi",
  sub: "HQ & Showroom",
  coordinates: [36.8219, -1.2921] as [number, number],
};

const TOWNS: { name: string; coordinates: [number, number] }[] = [
  { name: "Mombasa",   coordinates: [39.6682, -4.0435] },
  { name: "Kisumu",    coordinates: [34.768,  -0.0917] },
  { name: "Nakuru",    coordinates: [36.08,   -0.3031] },
  { name: "Eldoret",   coordinates: [35.2699,  0.5143] },
  { name: "Thika",     coordinates: [37.0833, -1.0333] },
  { name: "Nyeri",     coordinates: [36.95,   -0.4167] },
  { name: "Meru",      coordinates: [37.649,   0.0467] },
  { name: "Malindi",   coordinates: [40.1169, -3.2138] },
  { name: "Kitale",    coordinates: [35.0062,  1.0154] },
  { name: "Garissa",   coordinates: [39.6401, -0.4532] },
  { name: "Machakos",  coordinates: [37.2634, -1.5177] },
  { name: "Kericho",   coordinates: [35.2833, -0.3667] },
  { name: "Kakamega",  coordinates: [34.7522,  0.2827] },
  { name: "Naivasha",  coordinates: [36.43,   -0.7167] },
  { name: "Lamu",      coordinates: [40.902,  -2.2694] },
];

const MAP_STATS = [
  { value: "47", label: "Counties Covered" },
  { value: "15+", label: "Major Towns Served" },
  { value: "1", label: "National HQ in Nairobi" },
];

export default function KenyaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      {/* Map + side panel */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* MAP */}
        <div
          className="flex-1 rounded-2xl overflow-hidden relative"
          style={{
            height: 500,
            background: "#f0f7fb",
            border: "1px solid #e0eef5",
            minHeight: 350,
          }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1700, center: [38.2, -0.5] }}
            style={{ width: "100%", height: "100%" }}
          >
            {/* Connecting lines from Nairobi */}
            {TOWNS.map((town, i) => (
              <motion.g
                key={`line-${town.name}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
              >
                <Line
                  from={NAIROBI.coordinates}
                  to={town.coordinates}
                  stroke="#7dd3f0"
                  strokeWidth={0.7}
                  strokeOpacity={0.35}
                  strokeLinecap="round"
                />
              </motion.g>
            ))}

            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: { rsmKey: string; id: string; properties: Record<string, unknown> }[] }) =>
                geographies.map((geo) => {
                  const id = String(geo.id ?? "");
                  const isKenya = id === KENYA_ID;
                  const isNeighbour = NEIGHBOUR_IDS.has(id);
                  if (!isKenya && !isNeighbour) return null;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isKenya ? "#054e72" : "#d8eef7"}
                      stroke={isKenya ? "#033a55" : "#b8d8e8"}
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: isKenya ? "#065f89" : "#c8e4f0" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Secondary town pins */}
            {TOWNS.map((town, i) => (
              <Marker
                key={town.name}
                coordinates={town.coordinates}
                onMouseEnter={() => setHovered(town.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.07,
                    duration: 0.4,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                  style={{ transformOrigin: "0px 0px", cursor: "pointer" }}
                >
                  {/* Hover pulse ring */}
                  {hovered === town.name && (
                    <motion.circle
                      r={10}
                      fill="#7dd3f0"
                      fillOpacity={0.25}
                      animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  {/* Dot */}
                  <circle
                    r={hovered === town.name ? 6 : 4}
                    fill="#7dd3f0"
                    stroke="white"
                    strokeWidth={1}
                    style={{ transition: "r 0.2s ease" }}
                  />
                  {/* Hover label */}
                  {hovered === town.name && (
                    <g transform="translate(8, -14)">
                      <rect
                        x={0}
                        y={0}
                        width={town.name.length * 7.5 + 16}
                        height={22}
                        rx={5}
                        fill="white"
                        filter="url(#shadow)"
                      />
                      <text
                        x={8}
                        y={15}
                        fontSize={11}
                        fontWeight={600}
                        fill="#054e72"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {town.name}
                      </text>
                    </g>
                  )}
                </motion.g>
              </Marker>
            ))}

            {/* Nairobi primary pin */}
            <Marker coordinates={NAIROBI.coordinates}>
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                style={{ transformOrigin: "0px 0px" }}
              >
                {/* Outer pulse */}
                <motion.circle
                  r={20}
                  fill="#054e72"
                  fillOpacity={0.15}
                  animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Inner pulse */}
                <motion.circle
                  r={12}
                  fill="#054e72"
                  fillOpacity={0.3}
                  animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
                {/* Center dot */}
                <circle r={5} fill="#054e72" stroke="white" strokeWidth={1.5} />

                {/* Always-visible label card */}
                <g transform="translate(10, -36)">
                  <rect
                    x={0}
                    y={0}
                    width={110}
                    height={32}
                    rx={7}
                    fill="white"
                    stroke="#054e72"
                    strokeWidth={0.8}
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))" }}
                  />
                  <text
                    x={9}
                    y={13}
                    fontSize={11}
                    fontWeight={700}
                    fill="#054e72"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Nairobi
                  </text>
                  <text
                    x={9}
                    y={25}
                    fontSize={9}
                    fill="#888"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    HQ &amp; Showroom
                  </text>
                  {/* Arrow */}
                  <polygon points="8,32 14,32 11,38" fill="white" />
                  <line x1={9} y1={32} x2={11} y2={37} stroke="#054e72" strokeWidth={0.8} />
                  <line x1={13} y1={32} x2={11} y2={37} stroke="#054e72" strokeWidth={0.8} />
                </g>
              </motion.g>
            </Marker>

            {/* Drop shadow filter */}
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
              </filter>
            </defs>
          </ComposableMap>
        </div>

        {/* RIGHT PANEL — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden lg:flex flex-col w-56 rounded-2xl flex-shrink-0"
          style={{
            background: "white",
            border: "1px solid #e8f4fb",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            height: 500,
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: "#e8f4fb" }}>
            <p className="text-[14px] font-bold" style={{ color: "#054e72" }}>Our Coverage</p>
          </div>
          <div
            className="flex-1 overflow-y-auto p-3 flex flex-col gap-1"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#054e72 #e8f4fb",
            }}
          >
            {/* Nairobi first with badge */}
            <div className="flex items-center gap-2 px-2 py-2 rounded-lg" style={{ background: "#e8f4fb" }}>
              <span style={{ color: "#7dd3f0", fontSize: 10 }}>●</span>
              <span className="text-[13px] font-semibold flex-1" style={{ color: "#054e72" }}>
                Nairobi
              </span>
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: "#054e72", color: "white" }}
              >
                ★ HQ
              </span>
            </div>
            {TOWNS.map((town) => (
              <div
                key={town.name}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-default transition-colors hover:bg-[#f0f7fb]"
                onMouseEnter={() => setHovered(town.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={{ color: "#7dd3f0", fontSize: 10 }}>●</span>
                <span
                  className="text-[13px]"
                  style={{ color: hovered === town.name ? "#054e72" : "#444", fontWeight: hovered === town.name ? 600 : 400 }}
                >
                  {town.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MOBILE town chips */}
      <div className="lg:hidden flex flex-wrap gap-2 mt-4">
        <span
          className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full"
          style={{ background: "#054e72", color: "white" }}
        >
          ★ Nairobi HQ
        </span>
        {TOWNS.map((town) => (
          <span
            key={town.name}
            className="text-[12px] px-3 py-1.5 rounded-full"
            style={{ border: "1px solid #e0e0e0", color: "#444" }}
          >
            {town.name}
          </span>
        ))}
      </div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 grid grid-cols-3 border rounded-2xl overflow-hidden"
        style={{ borderColor: "#e8f4fb" }}
      >
        {MAP_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center py-6 px-4 text-center ${i < MAP_STATS.length - 1 ? "border-r" : ""}`}
            style={{ borderColor: "#e8f4fb" }}
          >
            <span className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#054e72" }}>
              {stat.value}
            </span>
            <span className="text-xs text-brand-muted font-light mt-1 leading-snug">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
