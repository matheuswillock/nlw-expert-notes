interface INoteCard {
  pastTime: string;
  describe: string;
}

export function NoteCard({ pastTime, describe }: INoteCard) {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 overflow-hidden space-y-3 relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-300">{pastTime}</span>
      <p className="text-sm leading-6 text-slate-400">{describe}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
