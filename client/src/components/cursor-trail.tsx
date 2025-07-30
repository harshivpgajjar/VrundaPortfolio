import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setPoints(prevPoints => {
        const newPoint: Point = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now(),
        };
        
        const updatedPoints = [newPoint, ...prevPoints.slice(0, 19)]; // Keep only 20 points
        return updatedPoints;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {points.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-antique-gold rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0,
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}