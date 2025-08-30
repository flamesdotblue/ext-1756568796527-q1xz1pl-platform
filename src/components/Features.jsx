import { Rocket, Star, Shield } from 'lucide-react';

const features = [
  {
    title: 'Fast setup',
    desc: 'Start with Vite + React + Tailwind and be productive in seconds.',
    Icon: Rocket,
  },
  {
    title: 'Polished UI',
    desc: 'Clean, modern components with sensible defaults and responsive design.',
    Icon: Star,
  },
  {
    title: 'Accessible by default',
    desc: 'Semantic markup and focus styles ensure inclusive experiences.',
    Icon: Shield,
  },
];

function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Why you’ll love this starter</h2>
        <p className="mt-3 text-slate-700">A small set of focused components to kick off your next interactive landing page.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, desc, Icon }) => (
          <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
