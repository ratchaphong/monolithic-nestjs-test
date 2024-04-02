export const HTTP_NOT_FOUND = 'NOT_FOUND';
export const HTTP_CONFLICT = 'CONFLICT';
export const HTTP_INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';
export const HTTP_SUCCESS = 'SUCCESS';
export const HTTP_INVALID_PARAMETER = 'INVALID_PARAMETER';
export const HTTP_BAD_REQUEST = 'BAD_REQUEST';
export const HTTP_SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';

// prisma error code
export const PRISMA_NOT_FOUND = 'P2025';
export const PRISMA_CONFLICT = 'P2002';

export const CONSENT_CATEGORY = {
  E_AGENT_LOGIN: 'E_AGENT_LOGIN',
};

export const CONSENT_TYPE = {
  CONSENT: 'CONSENT',
  TERM_AND_CONDITION: 'TERM_AND_CONDITION',
};

export const POPUP_BUSINESS_TYPE_SEE = {
  ALL: 'ALL', // ทั้งหมด
  INSURANCE_AGENT: 'INSURANCE_AGENT', // ตัวแทนประกันวินาศภัย
  LEASING: 'LEASING', // ลิสซิ่ง
  PRIVATE_INSPECTION: 'PRIVATE_INSPECTION', // สถานตรวจสภาพรถเอกชน (ตรอ.)
  INSURANCE_AGENT_BROKER: 'INSURANCE_AGENT_BROKER', // นายหน้าประกันวินาศภัย
  IOC: 'IOC', // IOC
  BROKER: 'BROKER', // โบรกเกอร์
  MOTORCYCLE_DEALER: 'MOTORCYCLE_DEALER', // ร้านจำหน่ายจักรยานยนต์
  BANK: 'BANK', // ธนาคาร
  DIRECT_INSURANCE: 'DIRECT_INSURANCE', // ประกันโดยตรง
};

export const POPUP_FREQUENCY = {
  ONE_TIME: 'ONE_TIME',
  EVERY_DAY: 'EVERY_DAY',
  EVERY_WEEK: 'EVERY_WEEK',
  EVERY_MONTH: 'EVERY_MONTH',
};

export const SYSTEM = 'SYSTEM';
export const SYSTEM_OFFLINE_REMARK = 'System ปรับ offline เนื่องจากหมดอายุ';
export const SYSTEM_ONLINE_REMARK = 'System ปรับ online เนื่องจากเริ่มใช้งาน';

export const UPLOAD_TYPE = {
  PIC: 'PIC',
  LINK_VIDEO: 'LINK_VIDEO',
  PDF_NEWTAB: 'PDF_NEWTAB',
  PIC_NEWTAB: 'PIC_NEWTAB',
};

export const TYPE_ATTACH = {
  PICTURE: 'PICTURE',
  LINK: 'LINK',
  PDF: 'PDF',
};

export const POPUP_CATEGORY = {
  E_AGENT_LOGIN: 'E_AGENT_LOGIN',
  E_AGENT_SEARCH_POLICY: 'E_AGENT_SEARCH_POLICY',
};

export const INTERNAL_API_KEY = 'internal-api-key';
