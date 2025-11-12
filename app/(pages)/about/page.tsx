import { MarkdownRenderer } from "@/app/components/markdown";
import React from "react";

const page = () => {
  return <MarkdownRenderer filePath="about-me.md" />;
};

export default page;
