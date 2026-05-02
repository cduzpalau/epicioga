import { getServerSession } from "next-auth/next"
// import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AdminPanel() {
  let session: any = await getServerSession(authOptions)

  // Autenticació desactivada temporalment
  // if (!session || session.user.role !== "ADMIN") {
  //   redirect("/")
  // }
  if (!session) {
    session = { user: { name: "Admin Prova", role: "ADMIN" } }
  }

  return (
    <div className="min-h-screen bg-sand-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-sage-700">Panell d'Administració</h1>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium">
            Sessió Admin: Activa
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mètriques */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-sand-200">
            <h3 className="text-gray-500 font-medium mb-2">Classes avui</h3>
            <p className="text-4xl font-bold text-sage-700">4</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-sand-200">
            <h3 className="text-gray-500 font-medium mb-2">Alumnes actius</h3>
            <p className="text-4xl font-bold text-sage-700">82</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-sand-200 border-l-4 border-l-terracotta-500">
            <h3 className="text-gray-500 font-medium mb-2">Infants a l'espai infantil (Avui)</h3>
            <p className="text-4xl font-bold text-terracotta-600">12</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-sand-200 overflow-hidden">
          <div className="p-6 border-b border-sand-100 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-sage-700">Gestió de Classes</h2>
            <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              + Nova Classe
            </button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-sand-50 text-gray-500 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Classe</th>
                  <th className="px-6 py-4 font-medium">Professor</th>
                  <th className="px-6 py-4 font-medium">Reserves</th>
                  <th className="px-6 py-4 font-medium">Espai Infantil</th>
                  <th className="px-6 py-4 font-medium">Accions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                <tr className="hover:bg-sand-50">
                  <td className="px-6 py-4 font-medium">Hatha Ioga Suau</td>
                  <td className="px-6 py-4">Laia</td>
                  <td className="px-6 py-4">12/15</td>
                  <td className="px-6 py-4"><span className="text-sage-600 bg-sage-50 px-2 py-1 rounded-full text-xs font-bold">4 nens</span></td>
                  <td className="px-6 py-4 text-terracotta-500 font-medium cursor-pointer">Editar</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="px-6 py-4 font-medium">Vinyasa Flow Energètic</td>
                  <td className="px-6 py-4">Marc</td>
                  <td className="px-6 py-4">8/15</td>
                  <td className="px-6 py-4"><span className="text-sage-600 bg-sage-50 px-2 py-1 rounded-full text-xs font-bold">2 nens</span></td>
                  <td className="px-6 py-4 text-terracotta-500 font-medium cursor-pointer">Editar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}