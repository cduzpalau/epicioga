import { getServerSession } from "next-auth/next"
// import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function DashboardAlumne() {
  let session = await getServerSession(authOptions)

  // Autenticació desactivada temporalment
  // if (!session) {
  //   redirect("/api/auth/signin")
  // }
  if (!session) {
    session = { user: { name: "Alumne de Prova", email: "alumne@epicioga.com" } } as any
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-sage-700">Àrea Personal</h1>
      
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-200 mb-8">
        <h2 className="text-2xl font-bold mb-4">Hola, {session.user?.name || session.user?.email}</h2>
        <p className="text-gray-600 mb-4">Aquí podràs veure les teves reserves, gestionar els teus horaris i avisar-nos si vens amb el teu fill/a.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pròximes reserves */}
        <div className="bg-sand-50 rounded-3xl p-8 border border-sand-200">
          <h3 className="text-xl font-bold mb-6 text-terracotta-600">Les teves properes classes</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-sand-100 flex justify-between items-center">
              <div>
                <p className="font-bold">Hatha Ioga Suau</p>
                <p className="text-sm text-gray-500">Demà a les 18:00</p>
              </div>
              <span className="text-xs font-medium bg-sage-100 text-sage-700 px-2 py-1 rounded-full">👶 Amb nen</span>
            </div>
          </div>
          <button className="mt-6 w-full py-3 border-2 border-sage-500 text-sage-600 font-bold rounded-xl hover:bg-sage-50 transition-colors">
            Cercar noves classes
          </button>
        </div>

        {/* Estat de la quota */}
        <div className="bg-sage-700 text-white rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6 text-sand-100">La teva Quota</h3>
          <div className="mb-6">
            <p className="text-sm opacity-80 mb-1">Quota actual</p>
            <p className="text-2xl font-bold">Mensual (2 classes/set)</p>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80 mb-1">Espai Infantil</p>
            <p className="font-medium">Actiu per a 1 infant</p>
          </div>
          <button className="w-full py-3 bg-terracotta-500 hover:bg-terracotta-600 font-bold rounded-xl transition-colors">
            Gestionar Subscripció
          </button>
        </div>
      </div>
    </div>
  )
}