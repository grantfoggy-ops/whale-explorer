import type { WhaleSighting } from "../types/whale";
import { whaleProfiles } from "../data/whaleProfiles";

type WhalePopupProps = {
  sighting: WhaleSighting;
  onLearnMore: () => void;
};

export default function WhalePopup({ sighting, onLearnMore }: WhalePopupProps) {
  const profile = whaleProfiles[sighting.species];

  return (
    <article className="w-72 overflow-hidden">
      <img className="h-32 w-full object-cover" src={profile.imageUrl} alt={profile.imageAlt} />
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-lagoon">{sighting.dateApproximation}</p>
        <h2 className="mt-1 text-lg font-black text-deep">{sighting.commonName}</h2>
        <p className="italic text-slate-600">{sighting.scientificName}</p>
        <dl className="mt-3 space-y-2 text-sm text-slate-700">
          <div>
            <dt className="font-bold text-deep">Ocean</dt>
            <dd>{sighting.ocean}</dd>
          </div>
          <div>
            <dt className="font-bold text-deep">Fun fact</dt>
            <dd>{sighting.funFact}</dd>
          </div>
        </dl>
        <button
          className="focus-ring mt-3 w-full rounded-md bg-deep px-4 py-2 text-sm font-black text-white transition hover:bg-lagoon"
          type="button"
          onClick={onLearnMore}
        >
          Learn more
        </button>
        <p className="mt-3 rounded-md bg-sky-50 px-3 py-2 text-xs font-semibold text-slate-600">
          {sighting.sourceLabel}
        </p>
      </div>
    </article>
  );
}
