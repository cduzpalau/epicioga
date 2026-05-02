import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Netejar dades anteriors (opcional, vigilar en producció)
  await prisma.reserva.deleteMany()
  await prisma.sessioIoga.deleteMany()
  await prisma.user.deleteMany()

  // Crear Usuari Admin
  const admin = await prisma.user.create({
    data: {
      name: 'Admin Èpic Ioga',
      email: 'admin@epicioga.com',
      role: 'ADMIN',
    },
  })

  // Crear Usuari Alumne
  const alumne = await prisma.user.create({
    data: {
      name: 'Maria (Alumna)',
      email: 'maria@epicioga.com',
      role: 'ALUMNE',
    },
  })

  // Crear algunes sessions de Ioga orientades a família
  const ara = new Date()
  
  await prisma.sessioIoga.create({
    data: {
      titol: 'Hatha Ioga Suau',
      dataHora: new Date(ara.getTime() + 24 * 60 * 60 * 1000), // Demà
      duradaMinuts: 60,
      placesTotals: 12,
      espaiInfantil: true,
      professor: 'Laia',
    }
  })

  await prisma.sessioIoga.create({
    data: {
      titol: 'Vinyasa Flow Energètic',
      dataHora: new Date(ara.getTime() + 48 * 60 * 60 * 1000), // Demà passat
      duradaMinuts: 75,
      placesTotals: 15,
      espaiInfantil: true,
      professor: 'Marc',
    }
  })

  await prisma.sessioIoga.create({
    data: {
      titol: 'Ioga Prenatal i Postnatal',
      dataHora: new Date(ara.getTime() + 72 * 60 * 60 * 1000),
      duradaMinuts: 60,
      placesTotals: 10,
      espaiInfantil: true,
      professor: 'Anna',
    }
  })

  console.log('Base de dades omplerta correctament amb dades de prova!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
