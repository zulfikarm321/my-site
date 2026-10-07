import type { Metadata } from "next";
import MtbExtractor from "@/app/components/MtbExtractor";

export const metadata: Metadata = {
  title: "Extractor Kode MTB",
  description:
    "Ekstrak kode MTB dari data mentah dan buat script JavaScript untuk auto-input.",
};

export default function MtbExtractorPage() {
  return <MtbExtractor />;
}
