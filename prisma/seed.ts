import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Seeding User
  const user = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      password: faker.internet.password(),
      biodata: {
        create: {
          id: 'biodataId',
          nama: faker.name.fullName(),
          posisiLamaran: 'Backend Developer',
          noKtp: faker.datatype.uuid(),
          lahir: faker.date.past().toISOString(),
          isCewek: faker.datatype.boolean(),
          agama: 'Islam',
          golDarah: 'A',
          statusPerkawinan: 'Belum Menikah',
          alamatKtp: faker.address.streetAddress(),
          alamat: faker.address.streetAddress(),
          email: faker.internet.email(),
          noHp: faker.phone.number(),
          orangDarurat: faker.name.fullName(),
          skill: 'Node.js, NestJS, Prisma',
          isBersediaLuarKota: faker.datatype.boolean(),
          harapanPenghasilan: faker.datatype.float({
            min: 5000000,
            max: 15000000,
          }),
          pendidikanTerakhir: {
            create: {
              id: 'pendidikanTerakhirId',
              jenjangPendidikan: 'S1',
              namaInstitusi: faker.company.name(),
              jurusan: 'Teknik Informatika',
              lulus: '2020',
              ipk: faker.datatype.float({ min: 2.5, max: 4.0 }),
            },
          },
          riwayatPelatihan: {
            create: {
              id: 'riwayatPelatihanId',
              namaPelatihan: 'NestJS Mastery',
              isSertifikat: true,
              tahun: '2023',
            },
          },
          riwayatPekerjaan: {
            create: {
              id: 'riwayatPekerjaanId',
              namaPerusahaan: faker.company.name(),
              posisiTerakhir: 'Software Engineer',
              pendapatanTerakhir: faker.datatype.float({
                min: 10000000,
                max: 20000000,
              }),
              tahun: '2021-2023',
            },
          },
        },
      },
    },
  });

  console.log(`User created with id: ${user.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
