export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Digital <span className="text-indigo-400">Enjoy</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Esta es la página base de prueba — si ves esto, el proyecto está corriendo correctamente.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition font-medium">
            Empezar
          </button>
          <button className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition font-medium">
            Saber más
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold text-indigo-300">Rápido</h3>
            <p className="text-sm text-slate-400 mt-1">Construido con Next.js y Tailwind.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold text-indigo-300">Simple</h3>
            <p className="text-sm text-slate-400 mt-1">Base mínima para ir agregando módulos.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold text-indigo-300">Listo para desplegar</h3>
            <p className="text-sm text-slate-400 mt-1">Compatible con Railway desde ya.</p>
          </div>
        </div>
      </div>
    </main>
  );
}