import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#1a1a1a",
      color: "white",
      textAlign: "center",
    }}>
      <motion.h1 animate={{ scale: 1.1 }} style={{ fontSize: "32px", fontWeight: "bold" }}>
        Mirësevini në Website-in Global!
      </motion.h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Ky është një website që mund të aksesohet kudo në botë!
      </p>
      <button 
        onClick={() => setClicks(clicks + 1)} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Kliko këtu ({clicks})
      </button>
    </div>
  );
}
