import Image from "next/image";
import React, { useEffect, useState } from "react";
import { btn, image } from "./superwomanBtn.styles";

//todo move this to below the footer
export function SuperwomanBtn() {
  const [showBtn, setShowbtn] = useState(true);

  useEffect(() => {
    setShowbtn(false);

    const onScroll = () => {
      if (window.scrollY >= 100) {
        setShowbtn(true);
      } else if (window.scrollY === 0) {
        setShowbtn(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showBtn) return null;

  return (
    <a css={btn} href="#top" aria-label="Scroll to the top of the page">
      <Image
        src="/images/superwoman.png"
        alt="set"
        width={77.5}
        height={77.5}
        css={image}
      />
    </a>
  );
}
