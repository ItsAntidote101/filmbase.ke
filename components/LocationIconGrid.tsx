"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Building2, Activity, Landmark, Home, Droplets, Monitor } from "lucide-react";

const LOCATIONS = [
  { Icon: Users,     label: "Corporate Boardrooms",  delay: 0    },
  { Icon: Briefcase, label: "Executive Offices",      delay: 0.3  },
  { Icon: Building2, label: "Hotel Suites",           delay: 0.6  },
  { Icon: Activity,  label: "Hospital Rooms",         delay: 0.9  },
  { Icon: Landmark,  label: "Law Firm Offices",       delay: 1.2  },
  { Icon: Home,      label: "Residential Bedrooms",   delay: 1.5  },
  { Icon: Droplets,  label: "Spa Facilities",         delay: 1.8  },
  { Icon: Monitor,   label: "Home Offices",           delay: 2.1  },
];

export default function LocationIconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
      {LOCATIONS.map(({ Icon, label, delay }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col items-center gap-3 p-5 bg-white rounded-lg cursor-default"
          style={{
            border: "1px solid #e8f4fb",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#054e72";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(5,78,114,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#e8f4fb";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            className="group-hover:scale-125 transition-transform duration-300"
          >
            <Icon size={32} color="#054e72" strokeWidth={1.5} />
          </motion.div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0a0a0a",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
