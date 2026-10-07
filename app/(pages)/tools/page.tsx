import Link from "next/link";

export const metadata = {
  title: "Tools",
  description: "Kumpulan tools sederhana yang berguna untuk pekerjaan sehari-hari.",
};

export default function ToolsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-muted">Utilities</p>
        <h1 className="text-3xl font-bold mt-1">Tools</h1>
        <p className="text-muted mt-2">
          Tools sederhana untuk membantu pekerjaan sehari-hari.
        </p>
      </div>

      <Link
        href="/tools/mtb-extractor"
        className="block card hover:border-[var(--accent)] transition-colors"
      >
        <h2 className="font-bold text-lg">Extractor Kode MTB</h2>
        <p className="text-muted mt-1">
          Ambil kode MTB dari data mentah dan generate script JavaScript
          untuk auto-input.
        </p>
      </Link>
    </section>
  );
}
