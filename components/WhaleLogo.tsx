export default function WhaleLogo() {
  return (
    <div className="flex items-center gap-3" aria-label="Whale Explorer">
      <div className="relative h-12 w-16 rounded-full bg-gradient-to-br from-reef to-lagoon shadow-md">
        <span className="absolute left-2 top-3 h-2 w-2 rounded-full bg-deep" />
        <span className="absolute -right-2 top-4 h-7 w-7 rotate-45 rounded-br-full rounded-tl-full bg-lagoon" />
        <span className="absolute -right-2 top-1 h-7 w-7 -rotate-45 rounded-bl-full rounded-tr-full bg-reef" />
        <span className="absolute bottom-0 left-5 h-4 w-6 rounded-t-full bg-white/40" />
      </div>
      <div>
        <h1 className="text-2xl font-black leading-none text-deep">Whale Explorer</h1>
        <p className="text-sm font-semibold text-lagoon">Historical ocean observations</p>
      </div>
    </div>
  );
}
