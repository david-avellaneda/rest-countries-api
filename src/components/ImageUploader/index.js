"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

const ImageUploader = ({ width, height, flags, name, index, styleLoader }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`${styles.container} ${styles[styleLoader]}`}>
      <div
        className={styles.containerLoader}
        style={{ display: isLoading ? "none" : "block" }}
      >
        {!isLoading && <div className={styles.loading}></div>}
      </div>
      <Image
        src={flags.svg || flags.png}
        alt={flags.alt || name.common}
        priority={index && index < 8}
        width={width}
        height={height}
        onLoad={(e) => setIsLoading(e.target.complete)}
      />
    </div>
  );
};

export default ImageUploader;
