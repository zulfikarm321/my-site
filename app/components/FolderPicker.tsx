type Props = { onFiles: (files: File[]) => void };

export default function FolderPicker({ onFiles }: Props) {
  return (
    <label className="btn">
      Choose folder
      <input
        type="file"
        style={{ display: "none" }}
        // @ts-ignore - nonstandard attributes for folder selection
        webkitdirectory="true"
        directory=""
        multiple
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          onFiles(files);
        }}
      />
    </label>
  );
}
