"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
    >
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={38} height={38} />
      </Link>
    </motion.li>
  );
}
