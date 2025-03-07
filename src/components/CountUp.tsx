import React, { useEffect, useState, useRef } from "react";

interface CountUpProps {
  start?: number; // Starting value
  end: number; // Final value
  duration?: number; // Animation duration in milliseconds
  formatter?: (value: number) => string | number; // Optional formatter function
}

const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 2000,
  formatter = (value) => value.toLocaleString('en-IN'), // Default formatter
}) => {
  const [currentValue, setCurrentValue] = useState<number>(start);
  const [hasStarted, setHasStarted] = useState(false); // Track if animation has started
  const elementRef = useRef<HTMLDivElement>(null); // Ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true); // Trigger animation when in view
        }
      },
      { threshold: 1 } // Trigger when fully in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsedTime = timestamp - startTime;
      const progressRatio = Math.min(elapsedTime / duration, 1); // Cap ratio to 1
      const value = Math.floor(progressRatio * (end - start) + start);
      setCurrentValue(value);

      if (progressRatio < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(end); // Ensure the final value is set correctly
      }
    };

    requestAnimationFrame(step);

    return () => {
      startTime = null; // Cleanup
    };
  }, [hasStarted, start, end, duration]);

  return (
    <div ref={elementRef}>
      <span>{formatter(currentValue)}</span>
    </div>
  );
};

export default CountUp;
