export default function FolderPickerFS({
  onFiles,
}: {
  onFiles: (files: File[]) => void;
}) {
  const open = async () => {
    // Feature-detect
    if (!("showDirectoryPicker" in window)) {
      alert(
        "Browser tidak mendukung folder picker. Gunakan tombol folder biasa."
      );
      return;
    }
    const dir = await (window as any).showDirectoryPicker();
    const files: File[] = [];

    const recurse = async (dirHandle: any) => {
      for await (const entry of dirHandle.values()) {
        if (entry.kind === "file") {
          const file = await entry.getFile();
          if (file.type.startsWith("image/")) files.push(file);
        } else if (entry.kind === "directory") {
          await recurse(entry);
        }
      }
    };

    await recurse(dir);
    onFiles(files);
  };

  return (
    <button onClick={open} className="btn">
      Pick folder (modern)
    </button>
  );
}
