"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Sphere,
  Graticule,
  type GeographyType,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const KENYA_ID = "404";
const EAST_AFRICA_IDS = new Set(["834", "800", "231", "706", "728"]);

// Initial globe center: Kenya at lon 37.9°E, lat ~0°
// rotate = [-lon, -lat, 0]
const INIT_ROTATION: [number, number, number] = [-37, 2, 0];

const NAIROBI = {
  name: "Nairobi",
  sub: "HQ & Showroom",
  coordinates: [36.8219, -1.2921] as [number, number],
};

const TOWNS: { name: string; coordinates: [number, number] }[] = [
  { name: "Mombasa",  coordinates: [39.6682, -4.0435] },
  { name: "Kisumu",   coordinates: [34.768,  -0.0917] },
  { name: "Nakuru",   coordinates: [36.08,   -0.3031] },
  { name: "Eldoret",  coordinates: [35.2699,  0.5143] },
  { name: "Thika",    coordinates: [37.0833, -1.0333] },
  { name: "Nyeri",    coordinates: [36.95,   -0.4167] },
  { name: "Meru",     coordinates: [37.649,   0.0467] },
  { name: "Malindi",  coordinates: [40.1169, -3.2138] },
  { name: "Kitale",   coordinates: [35.0062,  1.0154] },
  { name: "Garissa",  coordinates: [39.6401, -0.4532] },
  { name: "Machakos", coordinates: [37.2634, -1.5177] },
  { name: "Kericho",  coordinates: [35.2833, -0.3667] },
  { name: "Kakamega", coordinates: [34.7522,  0.2827] },
  { name: "Naivasha", coordinates: [36.43,   -0.7167] },
  { name: "Lamu",     coordinates: [40.902,  -2.2694] },
];

const MAP_STATS = [
  { value: "47",  label: "Counties Covered" },
  { value: "15+", label: "Major Towns Served" },
  { value: "1",   label: "National HQ in Nairobi" },
];

export default function KenyaMap() {
  const [hovered, setHovered]     = useState<string | null>(null);
  const [rotation, setRotation]   = useState<[number, number, number]>(INIT_ROTATION);
  const isPausedRef               = useRef(false);
  const rafRef                    = useRef<number | null>(null);
  const containerRef              = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  // Auto-rotation — runs continuously, pauses on hover
  useEffect(() => {
    const step = () => {
      if (!isPausedRef.current) {
        setRotation((r) => [r[0] - 0.15, r[1], r[2]]);
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const pause  = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  return (
    <div ref={containerRef}>
      {/* Globe — centered */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] overflow-hidden"
          style={{
            borderRadius: "50%",
            boxShadow: "0 0 60px rgba(5,78,114,0.15)",
            cursor: "grab",
          }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <ComposableMap
            projection="geoOrthographic"
            projectionConfig={{ rotate: rotation, scale: 900 }}
            style={{ width: "100%", height: "100%" }}
            width={800}
            height={800}
          >
            {/* Ocean */}
            <Sphere id="globe-ocean" fill="#e8f4fb" stroke="none" />

            {/* Graticule grid */}
            <Graticule stroke="rgba(5,78,114,0.07)" strokeWidth={0.5} />

            {/* Countries */}
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: GeographyType[] }) =>
                geographies.map((geo) => {
                  const id = String(geo.id ?? "");
                  const isKenya       = id === KENYA_ID;
                  const isEastAfrica  = EAST_AFRICA_IDS.has(id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isKenya      ? "#054e72" :
                        isEastAfrica ? "#cce4f0" :
                                       "#ddeef7"
                      }
                      stroke="white"
                      strokeWidth={0.3}
                      style={{
                        default: { outline: "none" },
                        hover:   { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Connecting lines Nairobi → towns */}
            {TOWNS.map((town, i) => (
              <motion.g
                key={`line-${town.name}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
              >
                <Line
                  from={NAIROBI.coordinates}
                  to={town.coordinates}
                  stroke="#7dd3f0"
                  strokeWidth={0.8}
                  strokeOpacity={0.35}
                  strokeLinecap="round"
                />
              </motion.g>
            ))}

            {/* Secondary town pins */}
            {TOWNS.map((town, i) => (
              <Marker
                key={town.name}
                coordinates={town.coordinates}
                onMouseEnter={() => { setHovered(town.name); pause(); }}
                onMouseLeave={() => { setHovered(null); resume(); }}
              >
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                  style={{ transformOrigin: "0px 0px", cursor: "pointer" }}
                >
                  {hovered === town.name && (
                    <motion.circle
                      r={10}
                      fill="#7dd3f0"
                      fillOpacity={0.25}
                      animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  <circle
                    r={hovered === town.name ? 5 : 3.5}
                    fill="#7dd3f0"
                    stroke="white"
                    strokeWidth={1}
                    style={{ transition: "r 0.2s ease" }}
                  />
                  {hovered === town.name && (
                    <g transform="translate(7, -14)">
                      <rect
                        x={0} y={0}
                        width={town.name.length * 7 + 16}
                        height={21}
                        rx={5}
                        fill="white"
                        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.14))" }}
                      />
                      <text x={8} y={14} fontSize={10} fontWeight={600} fill="#054e72" style={{ fontFamily: "sans-serif" }}>
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
                transition={{ delay: 0.15, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                style={{ transformOrigin: "0px 0px" }}
              >
                <motion.circle
                  r={18}
                  fill="#054e72"
                  fillOpacity={0.15}
                  animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  r={11}
                  fill="#054e72"
                  fillOpacity={0.28}
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
                <circle r={5} fill="#054e72" stroke="white" strokeWidth={1.5} />

                <g transform="translate(9, -38)">
                  <rect
                    x={0} y={0} width={112} height={32} rx={7}
                    fill="white" stroke="#054e72" strokeWidth={0.7}
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.14))" }}
                  />
                  <text x={9} y={13} fontSize={11} fontWeight={700} fill="#054e72" style={{ fontFamily: "sans-serif" }}>
                    Nairobi
                  </text>
                  <text x={9} y={25} fontSize={9} fill="#888" style={{ fontFamily: "sans-serif" }}>
                    HQ &amp; Showroom
                  </text>
                  <polygon points="8,32 14,32 11,38" fill="white" />
                  <line x1={9}  y1={32} x2={11} y2={37} stroke="#054e72" strokeWidth={0.7} />
                  <line x1={13} y1={32} x2={11} y2={37} stroke="#054e72" strokeWidth={0.7} />
                </g>
              </motion.g>
            </Marker>

            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
              </filter>
            </defs>
          </ComposableMap>
        </motion.div>
      </div>

      {/* Town chips — all screen sizes */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mt-8"
      >
        <span
          className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full"
          style={{ background: "#054e72", color: "white" }}
        >
          ★ Nairobi HQ
        </span>
        {TOWNS.map((town) => (
          <span
            key={town.name}
            className="text-[12px] px-3 py-1.5 rounded-full transition-colors duration-150 cursor-default"
            style={{
              border: `1px solid ${hovered === town.name ? "#054e72" : "#e0e0e0"}`,
              color: hovered === town.name ? "#054e72" : "#555",
              background: hovered === town.name ? "#e8f4fb" : "white",
            }}
            onMouseEnter={() => setHovered(town.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {town.name}
          </span>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mt-8 grid grid-cols-3 border rounded-2xl overflow-hidden max-w-xl mx-auto"
        style={{ borderColor: "#e8f4fb" }}
      >
        {MAP_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center py-5 px-3 text-center ${i < MAP_STATS.length - 1 ? "border-r" : ""}`}
            style={{ borderColor: "#e8f4fb" }}
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "#054e72" }}>
              {stat.value}
            </span>
            <span className="text-xs text-brand-muted font-light mt-1 leading-snug">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
