// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import TechStack from './components/techStackList'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Console.logging Dev For Life</h1>
        <p className="text-lg text-gray-600 mb-6">
<span>7+ years coding at the crossroads of fintech and function — I simplify complex systems, whether it’s finance, data, or something entirely new.</span>
        </p>
        <Link className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition" href="/projects">
            View My Work
        </Link>
      </section>
      
      <section className="max-w-3xl">
        <TechStack />
      </section>

      {/* Featured Projects */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/foliage.png"
              alt="Foliage App"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Foliage</h3>
              <p className="text-gray-600 mb-4">
                A crowdsourced flower-foraging app.
              </p>
              <Link className="text-blue-500 hover:underline" href="/projects/foliage">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/budgetsync.png"
              alt="BudgetSync App"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">BudgetSync</h3>
              <p className="text-gray-600 mb-4">
                A real-time collaborative budgeting tool.
              </p>
              <Link className="text-blue-500 hover:underline" href="/projects/budgetsync">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
