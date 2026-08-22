function Statistics({
  documents,
  folders,
  files,
}: {
  documents: string | number;
  files: string | number;
  folders: string | number;
}) {
  return (
    <div className="flex gap-4">
      <div className="bg-card rounded-xl p-6 flex-1">
        <h1 className="text-sm">Documents</h1>
        <p className="text-4xl font-semibold">{documents}</p>
      </div>
      <div className="bg-card rounded-xl p-6 flex-1">
        <h1 className="text-sm">Folders</h1>
        <p className="text-4xl font-semibold">{folders}</p>
      </div>
      <div className="bg-card rounded-xl p-6 flex-1">
        <h1 className="text-sm">Files</h1>
        <p className="text-4xl font-semibold">{files}</p>
      </div>
    </div>
  );
}

export default Statistics;
