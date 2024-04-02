import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const occupationsData = [
    {
      code: '001',
      nameTh: 'นักเรียน/นิสิตนักศึกษา',
    },
    {
      code: '002',
      nameTh: 'พนักงานบริษัทเอกชน',
    },
    {
      code: '003',
      nameTh: 'ข้าราชการ',
    },
    {
      code: '004',
      nameTh: 'พนักงานรัฐวิสาหกิจ',
    },
    {
      code: '005',
      nameTh: 'พนักงานโรงงานอุตสาหกรรม',
    },
    {
      code: '006',
      nameTh: 'เจ้าของธุรกิจ/ธุรกิจส่วนตัว',
    },
    {
      code: '007',
      nameTh: 'รับจ้างทั่วไป',
    },
    {
      code: '008',
      nameTh: 'เกษตรกร',
    },
    {
      code: '009',
      nameTh: 'ข้าราชการบำนาญ',
    },
    {
      code: '010',
      nameTh: 'อื่นๆ',
    },
  ];

  const occupations = [];
  for (const occupationData of occupationsData) {
    occupations.push(
      await prisma.occupation.upsert({
        where: { code: occupationData.code },
        update: occupationData,
        create: occupationData,
      }),
    );
  }
  console.log(occupations);

  const verifyCardsData: {
    code: string;
    nameTh: string;
    nameEn?: string;
    platforms: string[];
  }[] = [
    {
      code: '001',
      nameTh: 'บัตรประชาชน',
      nameEn: 'ID Card',
      // platforms: [Platform.DIRECT_WEB, Platform.E_AGENT],
      platforms: ['DIRECT_WEB', 'E_AGENT'],
    },
    {
      code: '002',
      nameTh: 'หมายเลขหนังสือเดินทาง',
      nameEn: 'Passport',
      // platforms: [Platform.DIRECT_WEB, Platform.E_AGENT],
      platforms: ['DIRECT_WEB', 'E_AGENT'],
    },
    {
      code: '003',
      nameTh: 'บัตรที่ราชการออกให้',
      nameEn: 'Government-issued card',
      // platforms: [Platform.DIRECT_WEB],
      platforms: ['DIRECT_WEB'],
    },
    {
      code: '004',
      nameTh: 'บัตรประจําตัวข้าราชการ',
      // platforms: [Platform.E_AGENT],
      platforms: ['E_AGENT'],
    },
    {
      code: '005',
      nameTh: 'ใบอนุญาติขับรถ',
      // platforms: [Platform.E_AGENT],
      platforms: ['E_AGENT'],
    },
    {
      code: '006',
      nameTh: 'บัตรประจําตัวที่รัฐบาลหรือหน่วยงานของรัฐเจ้าของสัญชาติออกให้',
      // platforms: [Platform.E_AGENT],
      platforms: ['E_AGENT'],
    },
    {
      code: '007',
      nameTh: 'บัตรประจําตัวที่รัฐบาลไทยออกให้',
      // platforms: [Platform.E_AGENT],
      platforms: ['E_AGENT'],
    },
    {
      code: '008',
      nameTh: 'เลขที่ประจําตัวผู้เสียภาษี',
      // platforms: [Platform.E_AGENT],
      platforms: ['E_AGENT'],
    },
  ];

  const verifyCards = [];
  for (const verifyCardData of verifyCardsData) {
    verifyCards.push(
      await prisma.verifyCard.upsert({
        where: { code: verifyCardData.code },
        update: verifyCardData,
        create: verifyCardData,
      }),
    );
  }
  console.log(verifyCards);

  const vehicleRegisData = [
    {
      code: '1',
      nameTh: 'มีทะเบียน',
      nameEn: 'Registered',
    },
    {
      code: '2',
      nameTh: 'ป้ายแดง',
      nameEn: 'Red Registered',
    },
    {
      code: '3',
      nameTh: 'ไม่มีทะเบียน',
      nameEn: 'Unregistered',
    },
    {
      code: '4',
      nameTh: 'ตราโล่',
      nameEn: 'Government',
    },
    {
      code: '5',
      nameTh: 'รถต่างประเทศ',
      nameEn: 'Abroad',
    },
  ];
  const vehicleRegistrationTypes = [];
  for (const vehicleRegistrationType of vehicleRegisData) {
    vehicleRegistrationTypes.push(
      await prisma.vehicleRegistrationType.upsert({
        where: { code: vehicleRegistrationType.code },
        update: vehicleRegistrationType,
        create: vehicleRegistrationType,
      }),
    );
  }
  console.log(vehicleRegistrationTypes);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
