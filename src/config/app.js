const baseConfig = {
  weddingDay: "Saturday",
  weddingTime: "09.00 - 14.00",
  weddingDate: "Des 14, 2024",
  showBuiltWithInfo: false,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2024-12-14T19:00:00+08:00",
    timeEndISO: "2024-12-22T14:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Linda",
    groomName: "Uniq",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Guest House BSIP",
    addressLine1: "Jl. Raya Ciherang, Segunung",
    addressLine2: "Pacet, 43252",
    city: "Pacet",
    country: "Cianjur",
    mapUrl: "https://maps.app.goo.gl/JLUwevvfvYxkDuRq8"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2020-01-25"
  }
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "14 Desember 2024",
    venue: {
      ...baseConfig.venue,
      name: "Guest House BSIP Ciherang",
      addressLine2: "Pacet, Cianjur, 43253,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
