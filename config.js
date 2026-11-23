
/* =====================================================
   RAVEN STUDIO - FRONTEND CONFIGURATION
===================================================== */

const GAS_URL =
  'https://script.google.com/macros/s/ISI_DEPLOYMENT_ID/exec';

const APP_CONFIG = {
  STORE_NAME: 'RAVEN STUDIO',
  STORE_SUBTITLE: 'BARBERSHOP & GROOMING',
  TAGLINE: 'Precision in Every Cut',

  OPEN_HOUR: 9,
  CLOSE_HOUR: 21,

  POLL_ACTIVE: 6000,
  POLL_INACTIVE: 30000,

  CACHE_KEY: 'raven_queues_cache',
  TICKET_KEY: 'raven_my_ticket',
  GAS_KEY: 'gas_url',

  ADMIN_PIN: '',

  BARBERS: [
    'Arka',
    'Bima',
    'Daffa',
    'Raka'
  ],

  SERVICES: {
    Haircut: 45000,
    Beard: 20000,
    VIP: 70000,
    Color: 75000
  },

  CONTACT: {
    ADDRESS: 'Isi alamat barbershop Anda',
    PHONE: 'Isi nomor WhatsApp barbershop',
    MAP_URL: ''
  }
};

