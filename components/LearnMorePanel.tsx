import { Ruler, X } from "lucide-react";
import type { WhaleProfile } from "../types/whale";

type LearnMorePanelProps = {
  profile: WhaleProfile | null;
  onClose: () => void;
};

export default function LearnMorePanel({ profile, onClose }: LearnMorePanelProps) {
  if (!profile) return null;

  const maxLength = Math.max(profile.lengthMeters, ...profile.comparisons.map((item) => item.lengthMeters));

  return (
    <section
      className="pointer-events-auto absolute inset-x-4 bottom-4 z-[700] max-h-[76vh] overflow-y-auto rounded-lg bg-white shadow-sea md:bottom-5 md:left-auto md:right-5 md:top-5 md:w-[420px]"
      aria-label={`Learn more about ${profile.commonName}`}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-sky-100 bg-white/95 px-4 py-3 backdrop-blur">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-lagoon">Learn more</p>
          <h2 className="text-xl font-black text-deep">{profile.commonName}</h2>
        </div>
        <button
          className="focus-ring rounded-md p-2 text-deep transition hover:bg-sky-50"
          type="button"
          onClick={onClose}
          aria-label="Close learn more panel"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <img className="h-52 w-full object-cover" src={profile.imageUrl} alt={profile.imageAlt} />

      <div className="grid gap-4 p-4">
        <p className="text-xs font-semibold text-slate-500">{profile.imageCredit}</p>
        <p className="text-base leading-7 text-slate-700">{profile.shortIntro}</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-sky-50 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-lagoon">Length</p>
            <p className="mt-1 text-2xl font-black text-deep">{profile.lengthMeters} m</p>
          </div>
          <div className="rounded-lg bg-sky-50 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-lagoon">Weight</p>
            <p className="mt-1 text-lg font-black text-deep">{profile.weightTonnes}</p>
          </div>
        </div>

        <InfoBlock title="Where it lives" text={profile.habitat} />
        <InfoBlock title="What it eats" text={profile.diet} />
        <InfoBlock title="Family life" text={profile.familyLife} />

        <section className="rounded-lg border border-sky-100 bg-white p-4">
          <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-lagoon">
            <Ruler size={17} aria-hidden="true" />
            Size comparison
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Compare a {profile.commonName.toLowerCase()} with familiar things in the UK.
          </p>
          <div className="mt-4 grid gap-3">
            <ComparisonBar
              label={profile.commonName}
              lengthMeters={profile.lengthMeters}
              maxLength={maxLength}
              color="#1a7fa3"
              note={`${profile.lengthMeters} metres long`}
            />
            {profile.comparisons.map((item) => (
              <ComparisonBar
                key={item.label}
                label={item.label}
                lengthMeters={item.lengthMeters}
                maxLength={maxLength}
                color="#ffd166"
                note={item.note}
              />
            ))}
          </div>
        </section>

        <p className="rounded-md bg-sky-50 px-3 py-2 text-sm font-semibold text-slate-700">
          {profile.childFriendlyFact}
        </p>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-lg border border-sky-100 bg-white p-4">
      <h3 className="text-sm font-black uppercase tracking-wide text-lagoon">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </section>
  );
}

function ComparisonBar({
  label,
  lengthMeters,
  maxLength,
  color,
  note
}: {
  label: string;
  lengthMeters: number;
  maxLength: number;
  color: string;
  note: string;
}) {
  const width = `${Math.max(8, (lengthMeters / maxLength) * 100)}%`;

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
        <span className="font-bold text-deep">{label}</span>
        <span className="font-semibold text-slate-500">{lengthMeters} m</span>
      </div>
      <div className="h-4 rounded-full bg-slate-100">
        <div className="h-4 rounded-full" style={{ width, backgroundColor: color }} />
      </div>
      <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>
    </div>
  );
}
