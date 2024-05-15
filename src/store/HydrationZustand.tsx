"use client";
import { useEffect, useState } from "react";
const HydrationZustand = ({ children, }: Readonly<{ children: React.ReactNode;}>) => {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationZustand;
