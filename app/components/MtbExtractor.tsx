"use client";

import { useMemo, useState } from "react";

const TARGET_PLACEHOLDER = "Please Input/Scan";

function buildScript(codes: string[]) {
  return `(async () => {
  // 🔹 Daftar data terbaru
  const dataList = ${JSON.stringify(codes, null, 2)};

  const inputs = document.querySelectorAll('input[placeholder="${TARGET_PLACEHOLDER}"]');
  if (inputs.length < 2) {
    console.error("❌ Tidak ditemukan 2 input dengan placeholder '${TARGET_PLACEHOLDER}'");
    return;
  }

  const input = inputs[1];
  console.log(\`✅ Input ke-2 ditemukan (\${inputs.length} input total). Memulai auto-input...\`);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  for (const kode of dataList) {
    input.focus();
    input.value = kode;
    console.log("Menginput:", kode);

    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));

    await delay(200);
  }

  console.log("🎉 Semua data sudah selesai diinput ke input ke-2!");
})();`;
}

export default function MtbExtractor() {
  const [rawData, setRawData] = useState("");
  const [copied, setCopied] = useState(false);

  const mtbCodes = useMemo(
    () =>
      rawData
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => /^MTB\d+/.test(line)),
    [rawData]
  );

  const output = useMemo(() => buildScript(mtbCodes), [mtbCodes]);

  async function copyOutput() {
    if (!mtbCodes.length) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function clearAll() {
    setRawData("");
    setCopied(false);
  }

  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm text-muted">Tools / Automation</p>
        <h1 className="text-3xl font-bold mt-1">Extractor Kode MTB</h1>
        <p className="text-muted mt-2">
          Tempel data mentah, ambil semua kode yang diawali MTB, lalu generate
          script JavaScript yang siap dijalankan di browser.
        </p>
      </header>

      <div className="card space-y-4">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="rawData" className="font-semibold">
            Data mentah
          </label>
          <span className="text-sm text-muted">
            {mtbCodes.length} kode ditemukan
          </span>
        </div>

        <textarea
          id="rawData"
          value={rawData}
          onChange={(event) => setRawData(event.target.value)}
          rows={14}
          placeholder="Tempel data di sini..."
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 font-mono text-sm outline-none focus:border-[var(--accent)] resize-y"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={copyOutput}
            disabled={!mtbCodes.length}
            className="btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? "✓ Copied" : "Copy Script"}
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="rounded-md border border-[var(--border)] px-4 py-2 font-medium hover:bg-[var(--surface)]"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="card space-y-3">
        <div>
          <h2 className="font-bold text-lg">Hasil JavaScript</h2>
          <p className="text-sm text-muted mt-1">
            Script ini mencari input dengan placeholder{" "}
            <code className="font-mono">Please Input/Scan</code> dan memakai
            input kedua.
          </p>
        </div>

        <textarea
          value={mtbCodes.length ? output : ""}
          readOnly
          rows={18}
          placeholder="Hasil script akan muncul di sini..."
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 font-mono text-sm resize-y"
        />

        <p className="text-xs text-muted">
          Delay antar kode: 200 ms. Gunakan hanya pada halaman/aplikasi yang
          memang kamu berwenang untuk otomasi.
        </p>
      </div>

      <div className="bordered p-5 space-y-3">
        <h2 className="font-bold">Cara menggunakan</h2>
        <ol className="list-decimal list-inside text-muted space-y-2">
          <li>Tempel data mentah ke kotak input.</li>
          <li>Pastikan kode MTB berada di awal baris, misalnya MTB123456.</li>
          <li>Copy script yang dihasilkan.</li>
          <li>Jalankan script pada halaman target yang memiliki input scan.</li>
        </ol>
      </div>
    </section>
  );
}
