export const PAGE_CHILD_URLS = {
  CREATE: 'create',
  DETAIL: 'detail',
  UPDATE: 'update'
};

export const PAGE_PARAMS = {
  ID: ':id',
  DETAIL: ':detail',
  UPDATE: ':update',
  NO: ':no'
};

export const PAGE_URLS = {
  AUTH: {
    LOGIN: '/authentication/login',
    SIGNUP: '/authentication/registrasi-akun',
    CONFIRM_PASSWORD: '/confirm-password'
  },

  PENGUMUMAN_PENGADAAN: {
    PENGUMUMAN_PENGADAAN_INDEX: 'tender-terbuka',
    FORM_PENDAFTARAN: 'form-pendaftaran'
  },

  HASIL_PENGADAAN: 'hasil-tender',
  PENGUMUMAN_DPT: 'pengumuman-dpt',
  BERITA: 'berita',
  ABOUT: 'tentang',
  HELPDESK: 'helpdesk',

  COMPANY_MANAGEMENT: 'informasi-perusahaan',

  PENGADAAN_DIIKUTI: {
    PENGADAAN_DIIKUTI_INDEX: 'tender-diikuti'
  },

  PENGADAAN_TERBATAS: {
    PENGADAAN_TERBATAS_INDEX: 'tender-terbatas'
  },

  PENGADAAN_LANGSUNG: {
    PENGADAAN_LANGSUNG_INDEX: 'tender-langsung'
  },

  SETUP_CONFIG: {
    SETUP_CONFIG_INDEX: 'setup-config',
    USERS: 'user-management',
    USERS_GROUP: 'users-group',
    USER_GROUP_OPTIONS: 'user-group-options',
    USERS_GROUP_OUTLET: 'users-group-outlet',
    PRIVILEGE: 'privilege',
    MENUS: 'menus'
  }
};
