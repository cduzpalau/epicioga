import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'

const prisma = new PrismaClient()

export default async function Home() {
  const sessions = await prisma.sessioIoga.findMany({
    where: { dataHora: { gte: new Date() } },
    orderBy: { dataHora: 'asc' }
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-sand-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500/20 to-terracotta-500/10 z-0"></div>
        <Image src="/epicioga_logo_fullimage.jpeg" alt="Fons Ioga" fill className="object-cover opacity-20 z-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto bg-white/40 p-8 rounded-3xl backdrop-blur-sm border border-white/50">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sage-700 tracking-tight">
            Ioga per a tu, espai per a ells.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            El primer centre de ioga pensat per a la conciliació familiar. Gaudeix de la teva pràctica mentre els teus fills aprenen i es diverteixen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#horaris" className="px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
              Reserva la teva classe
            </Link>
            <Link href="#nosaltres" className="px-8 py-4 bg-white/80 hover:bg-white text-sage-700 rounded-full font-medium transition-all shadow-md">
              Descobreix més
            </Link>
          </div>
        </div>
      </section>

      {/* Nosaltres */}
      <section id="nosaltres" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-sage-700">La nostra filosofia</h2>
            <p className="text-lg text-gray-700 mb-4">
              A Èpic Ioga creiem que cuidar de tu mateix no hauria d'estar renyit amb cuidar de la teva família. Hem creat un espai on pots desconnectar de debò, sabent que els teus fills estan en bones mans, a la sala del costat.
            </p>
            <p className="text-lg text-gray-700">
              Mentre tu practiques asanes i meditació, ells participen en tallers creatius, ioga infantil i activitats conscients amb professionals de l'educació.
            </p>
          </div>
          <div className="bg-sand-100 rounded-3xl p-4 md:p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-lg">
            <Image src="/epicioga_logo_smaller.jpeg" alt="Filosofia Ioga i Família" fill className="object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="py-24 px-4 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-sage-700">Les nostres classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hatha */}
            <div className="glass rounded-3xl p-8 transition-transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-terracotta-600">Hatha Ioga Suau</h3>
              <p className="text-gray-700 mb-6">Pràctica tranquil·la centrada en l'alineació, la respiració i la relaxació profunda. Ideal per a principiants i per desconnectar de l'estrès diari.</p>
              <div className="inline-flex items-center text-sm font-medium text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                👶 Servei de canguratge inclòs
              </div>
            </div>
            {/* Vinyasa */}
            <div className="glass rounded-3xl p-8 transition-transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-terracotta-600">Vinyasa Flow</h3>
              <p className="text-gray-700 mb-6">Seqüències dinàmiques on el moviment se sincronitza amb la respiració. Guanya flexibilitat, força i energia.</p>
              <div className="inline-flex items-center text-sm font-medium text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                👶 Servei de canguratge inclòs
              </div>
            </div>
            {/* Prenatal */}
            <div className="glass rounded-3xl p-8 transition-transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-terracotta-600">Ioga Prenatal</h3>
              <p className="text-gray-700 mb-6">Prepara el teu cos i ment per al part amb exercicis segurs i específics per a l'embaràs. Connecta amb el teu nadó.</p>
              <div className="inline-flex items-center text-sm font-medium text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                👧 Espai infantil per a germans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifes */}
      <section id="tarifes" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-sage-700">Tarifes senzilles i clares</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Totes les quotes mensuals inclouen l'accés a l'espai infantil gratuït per a 1 infant durant les teves classes.</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-sand-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Classe solta</h3>
              <div className="text-4xl font-bold text-terracotta-500 mb-6">15€</div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">✓ 1 classe de ioga</li>
                <li className="flex items-center">✓ Material inclòs</li>
                <li className="flex items-center">✗ Espai infantil (+5€)</li>
              </ul>
            </div>
            
            <div className="bg-sage-700 text-white rounded-3xl p-8 shadow-xl transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                MÉS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2 text-sand-50">Quota Mensual</h3>
              <div className="text-4xl font-bold mb-6">55€<span className="text-lg opacity-80">/mes</span></div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">✓ 2 classes a la setmana</li>
                <li className="flex items-center">✓ Material inclòs</li>
                <li className="flex items-center font-bold">✓ Espai infantil INCLÒS (1 infant)</li>
              </ul>
            </div>

            <div className="border border-sand-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Ilimitat</h3>
              <div className="text-4xl font-bold text-terracotta-500 mb-6">80€<span className="text-lg text-gray-500">/mes</span></div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">✓ Classes il·limitades</li>
                <li className="flex items-center">✓ Material inclòs</li>
                <li className="flex items-center font-bold">✓ Espai infantil INCLÒS (fins a 2 infants)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Horaris / Properes Classes */}
      <section id="horaris" className="py-24 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-sage-700">Properes Classes</h2>
          <div className="space-y-4">
            {sessions.map(sessio => (
              <div key={sessio.id} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-md">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800">{sessio.titol}</h3>
                  <p className="text-gray-500">
                    {sessio.dataHora.toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute:'2-digit' })}
                    {' '}• Amb {sessio.professor}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  {sessio.espaiInfantil && (
                    <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                      👶 Espai Infantil
                    </span>
                  )}
                  <Link href="/dashboard" className="px-6 py-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium transition-colors">
                    Reservar
                  </Link>
                </div>
              </div>
            ))}
            {sessions.length === 0 && (
              <p className="text-center text-gray-500 py-8">Actualment no hi ha classes programades.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}