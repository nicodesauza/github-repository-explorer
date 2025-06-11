// export const AUTH_TOKEN_NAME = 'authtoken';
export const AUTH_TOKEN_NAME = "authtoken";
export const AUTH_REFRESH_TOKEN_NAME = "authrefreshtoken";
export const BASE_API_URL = "https://api.github.com/";
export const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
export const RABBITMQ_HOST_URL = import.meta.env.VITE_RABBITMQ_HOST;
export const RABBITMQ_USERNAME = import.meta.env.VITE_RABBITMQ_USERNAME;
export const RABBITMQ_PASSWORD = import.meta.env.VITE_RABBITMQ_PASSWORD;

export const ACTION = {
  CREATE: "create",
  EDIT: "edit",
  UPDATE: "update",
  DETAIL: "detail",
  DELETE: "delete",
  DEACTIVATE: "deactivate",
  ACTIVATE: "activate",
  SUBMIT: "submit",
  DOWNLOAD: "download",
};

export const DateFormat = {
  base: "dd-MM-yyyy",
  detail: "dd MMMM yyyy",
  table: "dd-MM-yyyy",
};

export const STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DRAFT: "DRAFT",
  SUBMIT: "SUBMIT",
  COMPLETE: "COMPLETE",
  NOT_COMPLETE: "NOT COMPLETE",
};

// export const STATUS_TEXT = {
//   [STATUS.ACTIVE]: "Active",
//   [STATUS.INACTIVE]: "Inactive",
//   [STATUS.DRAFT]: "Draft",
//   [STATUS.COMPLETE]: "Lengkap",
//   [STATUS.NOT_COMPLETE]: "Belum Lengkap",
// };

// export const HTTP_METHOD = {
//   GET: "get" as "get",
//   POST: "post" as "post",
//   PUT: "put" as "put",
//   PATCH: "patch" as "patch",
//   DELETE: "delete" as "delete",
// };

// export const CONTENT_TYPE_EXCEL =
//   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

// export const RESPONSE_TYPE = {
//   JSON: "json" as "json",
//   ARRAY_BUFFER: "arraybuffer" as "arraybuffer",
//   BLOB: "blob" as "blob",
//   DOCUMENT: "document" as "document",
//   TEXT: "text" as "text",
//   STREAM: "stream" as "stream",
// };

// export const TENDER = {
//   SEMUA: "all",
//   BARANG: "goods",
//   KONSULTANSI: "consult",
//   KHUSUS: "special",
// };

// export const TENDER_TITLE = {
//   [TENDER.SEMUA]: "Semua",
//   [TENDER.BARANG]: "Barang/Konstruksi/Jasa Lainnya",
//   [TENDER.KONSULTANSI]: "Konsultansi",
//   [TENDER.KHUSUS]: "Khusus",
// };

// export const TENDER_METHOD = {
//   TERBUKA: "tender_terbuka",
//   TERBATAS: "tender_terbatas",
//   PENUNJUKKAN_LANGSUNG: "tender_langsung",
// };

// export const TENDER_METHOD_TEXT = {
//   [TENDER_METHOD.TERBUKA]: "Tender Terbuka",
//   [TENDER_METHOD.TERBATAS]: "Tender Terbatas",
//   [TENDER_METHOD.PENUNJUKKAN_LANGSUNG]: "Tender Langsung",
// };

// export const DPT_STATUS = {
//   ACTIVE: "active",
//   APPLICANT: "applicant",
//   BLACKLIST: "blacklist",
//   EXPIRED: "expired",
//   PROCESS: "process",
// };

// export const DPT_STATUS_TEXT = {
//   [DPT_STATUS.ACTIVE]: "Aktif",
//   [DPT_STATUS.PROCESS]: "Process",
//   [DPT_STATUS.BLACKLIST]: "Blacklist",
//   [DPT_STATUS.EXPIRED]: "Expired",
//   [DPT_STATUS.APPLICANT]: "Applicant",
// };

// export const monthOptions = [
//   { label: "Januari", value: "01" },
//   { label: "Februari", value: "02" },
//   { label: "Maret", value: "03" },
//   { label: "April", value: "04" },
//   { label: "Mei", value: "05" },
//   { label: "Juni", value: "06" },
//   { label: "Juli", value: "07" },
//   { label: "Agustus", value: "08" },
//   { label: "September", value: "09" },
//   { label: "Oktober", value: "10" },
//   { label: "November", value: "11" },
//   { label: "Desember", value: "12" },
// ];

// export const FILE_MIMETYPE = {
//   PDF: "application/pdf",
//   GIF: "image/gif",
//   PNG: "image/png",
//   JPG: "image/jpg",
//   XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   XLS: "application/vnd.ms-excel",
// };

// export const BASE64_SIGNATURE: { [key: string]: string } = {
//   JVBERi0: FILE_MIMETYPE.PDF,
//   R0lGODdh: FILE_MIMETYPE.GIF,
//   R0lGODlh: FILE_MIMETYPE.GIF,
//   iVBORw0KGgo: FILE_MIMETYPE.PNG,
//   "/9j/": FILE_MIMETYPE.JPG,
// };
