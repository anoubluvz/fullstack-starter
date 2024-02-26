import { useEffect, useState } from "react";

export default (): { mounted: boolean; setMounted: any } => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    setMounted,
  };
};
