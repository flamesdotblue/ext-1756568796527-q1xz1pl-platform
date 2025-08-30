import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-red-500" aria-hidden="true" />
          Interactive 3D background by Spline
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Hello, world
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          A minimalist hero with an interactive, responsive grid of tiles. Click or move your cursor to see the soft red ripple effect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-slate-800"
          >
            Explore Features
          </a>
          <a
            href="https://spline.design" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Learn about Spline
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
