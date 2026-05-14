"use client";

import { useEffect, useState } from "react";
import { MapPin, FileText, Wrench, CheckCircle, Award } from "lucide-react";

const STEPS = [
  { Icon: MapPin,       label: "Site Visit",   sublabel: "Day 0"   },
  { Icon: FileText,     label: "Proposal",     sublabel: "Day 1"   },
  { Icon: Wrench,       label: "Installation", sublabel: "Day 1–3" },
  { Icon: CheckCircle,  label: "Testing",      sublabel: "Day 3"   },
  { Icon: Award,        label: "Handover",     sublabel: "Day 3"   },
];

const STEP_DELAY   = 800;  // ms between each step activating
const HOLD_DELAY   = 1500; // ms all steps stay lit
const RESET_DELAY  = 300;  // ms for the fade-out

export default function InstallationTimeline() {
  const [activeCount, setActiveCount] = useState(0);
  const [resetting, setResetting]     = useState(false);
  const [bouncing, setBouncing]       = useState<number | null>(null);
  const [statVisible, setStatVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (resetting) {
      // After reset duration, restart the loop
      timeout = setTimeout(() => {
        setResetting(false);
        setStatVisible(false);
        setActiveCount(0);
      }, RESET_DELAY);
      return () => clearTimeout(timeout);
    }

    if (activeCount < STEPS.length) {
      // Activate next step
      timeout = setTimeout(() => {
        const next = activeCount + 1;
        setActiveCount(next);
        setBouncing(next - 1);
        setTimeout(() => setBouncing(null), 350);
      }, activeCount === 0 ? 600 : STEP_DELAY);
      return () => clearTimeout(timeout);
    }

    // All steps active — show stat, then reset after hold
    setStatVisible(true);
    timeout = setTimeout(() => {
      setResetting(true);
    }, HOLD_DELAY);
    return () => clearTimeout(timeout);
  }, [activeCount, resetting]);

  return (
    <div
      className="rounded-xl w-full"
      style={{ background: "#fff", padding: "32px" }}
    >
      {/* ── HORIZONTAL layout (sm+) ── */}
      <div className="hidden sm:flex items-start justify-between relative">
        {STEPS.map((step, i) => {
          const isActive  = !resetting && activeCount > i;
          const isBounce  = bouncing === i;
          const showLine  = i < STEPS.length - 1;
          const lineActive = !resetting && activeCount > i + 1;
          const lineDrawing = !resetting && activeCount === i + 1;

          return (
            <div key={step.label} className="flex-1 flex flex-col items-center relative">
              {/* Connector line */}
              {showLine && (
                <div
                  className="absolute top-7 left-1/2 right-0"
                  style={{ height: "2px", background: "#e0e0e0", zIndex: 0 }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "#054e72",
                      width: lineActive ? "100%" : lineDrawing ? "100%" : "0%",
                      transition: lineDrawing
                        ? "width 0.4s ease"
                        : lineActive
                        ? "none"
                        : resetting
                        ? "width 0.3s ease"
                        : "none",
                    }}
                  />
                </div>
              )}

              {/* Circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: isActive ? "2px solid #054e72" : "2px solid #e0e0e0",
                  background: isActive ? "#054e72" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  transition: "background 0.3s ease, border-color 0.3s ease",
                  transform: isBounce ? "scale(1.2)" : "scale(1)",
                  transitionProperty: isBounce
                    ? "transform"
                    : "background, border-color",
                  transitionDuration: isBounce ? "0.15s" : "0.3s",
                }}
              >
                <step.Icon
                  size={22}
                  style={{
                    color: isActive ? "#fff" : "#999",
                    transition: "color 0.3s ease",
                  }}
                />
              </div>

              {/* Labels */}
              <p
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? "#054e72" : "#999",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                }}
              >
                {step.label}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: isActive ? "#7dd3f0" : "#ccc",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                  marginTop: 2,
                }}
              >
                {step.sublabel}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── VERTICAL layout (mobile) ── */}
      <div className="flex sm:hidden flex-col gap-0">
        {STEPS.map((step, i) => {
          const isActive   = !resetting && activeCount > i;
          const isBounce   = bouncing === i;
          const showLine   = i < STEPS.length - 1;
          const lineActive = !resetting && activeCount > i + 1;
          const lineDrawing = !resetting && activeCount === i + 1;

          return (
            <div key={step.label} className="flex items-stretch gap-4">
              {/* Left column: circle + vertical line */}
              <div className="flex flex-col items-center" style={{ width: 56 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: isActive ? "2px solid #054e72" : "2px solid #e0e0e0",
                    background: isActive ? "#054e72" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s ease, border-color 0.3s ease",
                    transform: isBounce ? "scale(1.2)" : "scale(1)",
                    transitionProperty: isBounce
                      ? "transform"
                      : "background, border-color",
                    transitionDuration: isBounce ? "0.15s" : "0.3s",
                  }}
                >
                  <step.Icon
                    size={20}
                    style={{
                      color: isActive ? "#fff" : "#999",
                      transition: "color 0.3s ease",
                    }}
                  />
                </div>
                {showLine && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 28,
                      background: "#e0e0e0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        background: "#054e72",
                        height: lineActive ? "100%" : lineDrawing ? "100%" : "0%",
                        transition: lineDrawing
                          ? "height 0.4s ease"
                          : lineActive
                          ? "none"
                          : resetting
                          ? "height 0.3s ease"
                          : "none",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Right column: text */}
              <div style={{ paddingTop: 10, paddingBottom: showLine ? 16 : 0 }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: isActive ? "#054e72" : "#999",
                    transition: "color 0.3s ease",
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: isActive ? "#7dd3f0" : "#ccc",
                    transition: "color 0.3s ease",
                    marginTop: 2,
                  }}
                >
                  {step.sublabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom stat ── */}
      <div
        style={{
          marginTop: 28,
          textAlign: "center",
          opacity: statVisible ? 1 : 0,
          transform: statVisible ? "scale(1)" : "scale(0.95)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <p
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#054e72",
            lineHeight: 1.1,
          }}
        >
          1 to 3 days
        </p>
        <p style={{ fontSize: 13, color: "#7dd3f0", marginTop: 4, fontWeight: 500 }}>
          for most installations in Kenya
        </p>
      </div>
    </div>
  );
}
