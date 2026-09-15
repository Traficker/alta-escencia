/**
 * CONFIGURACIÓN GLOBAL DE ALTA ESCENCIA
 * Certificado de Existencia y Representación Legal - Cámara de Comercio de Barranquilla
 * NIT: 900.492.634-4 | Matrícula Mercantil N°: 535.160 | Barranquilla, Atlántico
 */

const APP_CONFIG = {
  company: {
    name: "Alta Escencia",
    brandName: "Alta Escencia",
    slogan: "Moda Que Refleja Tu Estilo",
    nit: "900.492.634-4",
    matricula: "535.160",
    camaraComercio: "Cámara de Comercio de Barranquilla",
    fundationYear: 2012,
    yearsExperience: "14+",
    phone: "+57 304 232 7508",
    phoneDisplay: "+57 (304) 232-7508",
    phoneRaw: "3042327508",
    email: "ventas@altaescencia.online",
    address: "Carrera 43 B No. 98 - 36",
    city: "Barranquilla",
    department: "Atlántico",
    country: "Colombia",
    fullAddress: "Carrera 43 B No. 98 - 36, Barranquilla, Atlántico, Colombia",
    domain: "altaescensia.online",
    schedule: "Lunes a Sábado: 9:00 AM - 7:30 PM | Domingos: 10:00 AM - 3:00 PM",
    niifGroup: "Grupo II (NIIF para PYMES)",
    judicialEmail: "ventas@altaescencia.online"
  },

  about: {
    badge: "14+ Años de Trayectoria (Matriculada en 2012)",
    title: "Elegancia Atemporal, Confección Exclusiva & Alta Costura Femenina",
    description: "Fundada el 24 de enero de 2012 bajo la matrícula mercantil N° 535.160 ante la Cámara de Comercio de Barranquilla, Alta Escencia es una boutique de alta gama consagrada al diseño y curaduría de moda femenina sofisticada. Con más de 14 años de excelencia, combinamos tejidos nobles como lino premium y sedas naturales con patronaje contemporáneo para crear colecciones que realzan la belleza, distinción y seguridad de cada mujer.",
    mission: "Vestir a la mujer moderna con prendas de alta distinción, cortes impecables y acabados artesanales de primer nivel, brindando una experiencia de compra transparente, personalizada y con total respaldo legal.",
    vision: "Consolidarnos como la firma boutique de moda femenina y alta costura prêt-à-porter más reconocida de Barranquilla y de proyección nacional en Colombia."
  },

  stats: [
    { value: "14+", label: "Años de Trayectoria", detail: "Constituida formalmente desde 2012" },
    { value: "100%", label: "Calidad Premium", detail: "Tejidos nobles y confección de autor" },
    { value: "+15,000", label: "Clientas Satisfechas", detail: "Envíos asegurados a toda Colombia" },
    { value: "2026", label: "Renovación Vigente", detail: "Cámara de Comercio de Barranquilla" }
  ],

  pillars: [
    {
      title: "Calidad Premium & Fibras Nobles",
      description: "Selección rigurosa de linos puros, sedas naturales, algodones de alto gramaje y forros transpirables que garantizan frescura y caída perfecta.",
      icon: `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 13C10.832 21 4 17.5 4 11.5V6a2 2 0 012-2h12a2 2 0 012 2v5.5c0 6-6.832 9.5-8 9.5z"></path></svg>`
    },
    {
      title: "Diseños Únicos de Autor",
      description: "Colecciones cápsula de edición limitada concebidas para ofrecer exclusividad, siluetas estilizadoras y elegancia atemporal.",
      icon: `<svg class="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`
    },
    {
      title: "Envíos a Toda Colombia",
      description: "Empaque boutique de lujo perfumado, seguro contra daños o extravíos y número de guía para rastreo en tiempo real.",
      icon: `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    },
    {
      title: "Respaldo y Solidez Legal",
      description: "Empresa con 14 años de matrícula mercantil, facturación electrónica legal y cumplimiento estricto del Estatuto del Consumidor.",
      icon: `<svg class="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
    },
    {
      title: "Asesoría de Imagen Personalizada",
      description: "Atención individualizada por nuestras estilistas para orientarte en la selección de talla exacta, cortes y combinaciones de gala o cóctel.",
      icon: `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`
    },
    {
      title: "Garantía de Satisfacción 100%",
      description: "Políticas transparentes de cambio de talla y soporte comercial ágil para que tu experiencia Alta Escencia sea insuperable.",
      icon: `<svg class="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h47m0 0l-7 7m7-7l-7-7"></path></svg>`
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Colección Prêt-à-Porter de Lujo",
      subtitle: "Prendas icónicas para el día y la noche",
      description: "Vestidos midi y maxi, sets de lino sastre, blusas de seda con detalles artesanales y pantalones palazzo diseñados para brindar porte y frescura caribeña.",
      icon: `<svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`,
      tags: ["Lino Puro", "Sedas Nobles", "Edición Limitada"]
    },
    {
      id: "srv-2",
      title: "Alta Costura & Ocasiones Especiales",
      subtitle: "Gala, bodas & eventos cóctel",
      description: "Diseños de alta costura confeccionados a mano para madrinas, novias civiles, recepciones y cenas de gala con pedrería sutil y cortes arquitectónicos.",
      icon: `<svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`,
      tags: ["Eventos VIP", "Gala & Cóctel", "Diseño Exclusivo"]
    },
    {
      id: "srv-3",
      title: "Accesorios & Complementos Finos",
      subtitle: "El toque definitivo de elegancia",
      description: "Cinturones en cuero legítimo con herrajes bañados en oro, carteras de diseñador, pañuelos de seda estampados y joyería contemporánea de autor.",
      icon: `<svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
      tags: ["Cuero Genuino", "Baño Oro", "Marroquinería"]
    },
    {
      id: "srv-4",
      title: "Styling & Personal Shopper VIP",
      subtitle: "Asesoría integral de guardarropa",
      description: "Servicio exclusivo de consultoría de estilo para renovar tu armario cápsula o coordinar el look perfecto para ocasiones de alto protocolo.",
      icon: `<svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`,
      tags: ["Personal Styling", "Armario Cápsula", "Protocolo"]
    }
  ],

  projects: [
    {
      title: "Colección Crucero Riviera & Lino",
      category: "Moda Femenina de Lujo",
      image: "banner.png",
      location: "Barranquilla, Colombia",
      year: "2026",
      summary: "Línea exclusiva de vestidos vaporosos en lino italiano y tonos tierra inspirados en la sofisticación tropical."
    },
    {
      title: "Colección Cápsula Sastrería Contemporánea",
      category: "Sastrería & Prêt-à-Porter",
      image: "p1.jpg",
      location: "Colombia",
      year: "2026",
      summary: "Blazers desestructurados y pantalones de tiro alto con acabados artesanales y cortes de precisión."
    },
    {
      title: "Gala Nocturna & Vestidos de Ocasión",
      category: "Alta Costura & Eventos",
      image: "p2.jpg",
      location: "Barranquilla",
      year: "2025",
      summary: "Diseños de gala confeccionados en satén de seda, escotes drapeados y aplicaciones sutiles de brillo."
    },
    {
      title: "Línea Resort & Complementos de Verano",
      category: "Resort Wear & Accesorios",
      image: "p3.jpg",
      location: "Colombia",
      year: "2025",
      summary: "Kimonos bordados a mano, carteras artesanales y accesorios bañados en oro para escapadas de lujo."
    }
  ],

  legal: {
    privacyPolicy: {
      title: "Política de Tratamiento de Datos Personales y Habeas Data",
      subtitle: "Ley 1581 de 2012 / Decreto 1377 de 2013 - República de Colombia",
      lastUpdated: "10 de Septiembre de 2026",
      sections: [
        {
          num: "1",
          heading: "Identificación del Responsable del Tratamiento",
          content: "ALTA ESCENCIA, identificada con NIT 900.492.634-4, con matrícula mercantil N° 535.160 ante la Cámara de Comercio de Barranquilla (matriculada formalmente el 24 de enero de 2012, renovada en 2026 bajo el Grupo II NIIF para PYMES), con domicilio principal en Carrera 43 B No. 98 - 36, Barranquilla, Atlántico, Colombia; correo electrónico de notificaciones judiciales y privacidad: ventas@altaescencia.online, y teléfono de atención comercial: +57 (304) 232-7508, en calidad de Responsable del Tratamiento de Datos Personales, adopta la presente política en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y políticas de privacidad de Meta Platforms Inc."
        },
        {
          num: "2",
          heading: "Principios Rectores del Tratamiento",
          content: "Alta Escencia aplicará de manera estricta e integral los principios rectores de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad en todas las actividades que involucren recolección, almacenamiento, uso o supresión de datos personales."
        },
        {
          num: "3",
          heading: "Datos Recopilados y Finalidades del Tratamiento",
          content: "Los datos recopilados a través de nuestro sitio web oficial (altaescencia.online), anuncios de Meta Ads (Facebook/Instagram), formularios de contacto y WhatsApp comercial (nombre, teléfono, correo electrónico, dirección de despacho de prendas y preferencias de talla) serán utilizados para: a) El procesamiento y despacho de pedidos de moda y accesorios; b) El envío de guías de transporte y confirmaciones de entrega; c) La atención ágil de solicitudes, peticiones, quejas y reclamos (PQRS); d) El envío de novedades de nuevas colecciones cápsula previamente autorizadas."
        },
        {
          num: "4",
          heading: "Derechos de los Titulares (Derechos ARCO)",
          content: "De conformidad con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene derecho a: a) Conocer, actualizar y rectificar sus datos personales frente a Alta Escencia; b) Solicitar prueba de la autorización otorgada; c) Ser informado previa solicitud sobre el uso que se ha dado a sus datos; d) Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a la ley; e) Revocar la autorización y/o solicitar la supresión del dato; f) Acceder en forma gratuita a sus datos personales."
        },
        {
          num: "5",
          heading: "Procedimiento y Canales para el Ejercicio de Derechos",
          content: "Los titulares pueden ejercer sus derechos mediante comunicación escrita remitida al correo electrónico ventas@altaescencia.online o entregada físicamente en la Carrera 43 B No. 98 - 36, Barranquilla, Atlántico. Las solicitudes de supresión serán atendidas formalmente en un término máximo de diez (10) días hábiles."
        },
        {
          num: "6",
          heading: "Política de Cookies y Almacenamiento Local",
          content: "Este sitio web utiliza cookies técnicas necesarias únicamente para recordar las preferencias de consentimiento del usuario y garantizar una navegación fluida. No vendemos ni compartimos información de rastreo con terceros sin su consentimiento explícito."
        },
        {
          num: "7",
          heading: "Medidas de Seguridad e Integridad de la Información",
          content: "Alta Escencia ha implementado medidas de seguridad técnicas y administrativas de alto nivel (incluyendo cifrado SSL/TLS de 256 bits y acceso restringido) para evitar la alteración, pérdida o acceso no autorizado a los datos personales."
        },
        {
          num: "8",
          heading: "Vigencia y Modificaciones a la Política",
          content: "La presente política rige a partir de su publicación el 10 de Septiembre de 2026. Los datos personales permanecerán en nuestras bases de datos durante el tiempo necesario para cumplir las finalidades autorizadas. Cualquier modificación será notificada oportunamente en altaescencia.online."
        }
      ]
    },

    termsAndConditions: {
      title: "Términos y Condiciones Generales de Uso y Comercialización",
      subtitle: "Regido por la Legislación de la República de Colombia - Ley 23 de 1982 / Ley 527 de 1999 / Estatuto del Consumidor Ley 1480 de 2011",
      lastUpdated: "10 de Septiembre de 2026",
      sections: [
        {
          num: "1",
          heading: "Titularidad del Sitio y Aceptación de las Condiciones",
          content: "El presente portal web es de propiedad exclusiva de ALTA ESCENCIA (NIT 900.492.634-4), sociedad comercial constituida conforme a las leyes colombianas con matrícula N° 535.160 de la Cámara de Comercio de Barranquilla. El acceso, navegación y pedidos en este sitio implica la aceptación plena e incondicional de los presentes Términos y Condiciones."
        },
        {
          num: "2",
          heading: "Propiedad Intelectual e Industrial (Ley 23 de 1982)",
          content: "Todos los elementos contenidos en este sitio web, incluyendo fotografías, diseños de prendas, logotipos, marcas comerciales, código fuente e identidad visual, son de propiedad exclusiva de Alta Escencia. Queda prohibida su reproducción o explotación no autorizada."
        },
        {
          num: "3",
          heading: "Políticas de Compra, Precios y Despachos Nacionales",
          content: "Los precios exhibidos en el portal están expresados en pesos colombianos (COP). Alta Escencia despacha los pedidos a cualquier municipio de Colombia mediante transportadoras autorizadas con número de guía de rastreo y empaque de alta protección."
        },
        {
          num: "4",
          heading: "Garantías y Cambios de Talla (Ley 1480 de 2011)",
          content: "De acuerdo con el Estatuto del Consumidor, los productos cuentan con garantía legal por confección. El cliente dispone de cinco (5) días hábiles para ejercer su derecho de retracto conforme a la ley."
        },
        {
          num: "5",
          heading: "Tratamiento de Datos Personales",
          content: "La información recolectada se tratará conforme a la Política de Privacidad y Habeas Data de Alta Escencia. Al solicitar asesoría o registrar un pedido, el usuario autoriza dicho tratamiento."
        },
        {
          num: "6",
          heading: "Legislación Aplicable y Jurisdicción",
          content: "Los presentes Términos se rigen por la legislación colombiana. Cualquier controversia será sometida a la jurisdicción de los Jueces Ordinarios de la ciudad de Barranquilla, Atlántico, Colombia."
        }
      ]
    }
  }
};

/**
 * DOM INJECTION & INTERACTIVE LOGIC
 */
document.addEventListener("DOMContentLoaded", () => {
  injectCompanyData();
  renderStats();
  renderPillars();
  renderServices();
  renderProjects();
  initCookieBanner();
  initContactForm();
  initMobileMenu();
});

function injectCompanyData() {
  const comp = APP_CONFIG.company;
  const abt = APP_CONFIG.about;

  setElementText("company-name", comp.name);
  setElementText("company-brand", comp.brandName);
  setElementText("company-slogan", comp.slogan);
  setElementText("company-nit", comp.nit);
  setElementText("company-nit-full", `NIT: ${comp.nit} | ${comp.camaraComercio}`);
  setElementText("company-address", comp.address);
  setElementText("company-city", `${comp.city}, ${comp.department}, ${comp.country}`);
  setElementText("company-phone", comp.phoneDisplay);
  setElementText("company-email", comp.email);
  setElementText("company-schedule", comp.schedule);
  setElementText("company-years", comp.yearsExperience);
  setElementText("company-foundation", `${comp.fundationYear}`);
  setElementText("current-year", new Date().getFullYear().toString());

  setElementHref("phone-cta-link", `tel:${comp.phoneRaw}`);
  setElementHref("nav-phone-link", `tel:${comp.phoneRaw}`);
  setElementHref("email-link", `mailto:${comp.email}`);

  setElementText("about-badge", abt.badge);
  setElementText("about-title", abt.title);
  setElementText("about-description", abt.description);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElementHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.stats.map(s => `
    <div class="glass-card p-6 rounded-2xl border border-amber-500/20 text-center relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all"></div>
      <div class="font-outfit text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 mb-2">
        ${s.value}
      </div>
      <h3 class="text-stone-100 font-semibold text-base mb-1">${s.label}</h3>
      <p class="text-stone-400 text-xs">${s.detail}</p>
    </div>
  `).join("");
}

function renderPillars() {
  const container = document.getElementById("pillars-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.pillars.map(p => `
    <div class="glass-card p-8 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all duration-300 group">
      <div class="w-14 h-14 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400 transition-all">
        ${p.icon}
      </div>
      <h3 class="font-outfit text-xl font-bold text-stone-100 mb-3 group-hover:text-amber-300 transition-colors">${p.title}</h3>
      <p class="text-stone-400 text-sm leading-relaxed">${p.description}</p>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.services.map(srv => `
    <div class="glass-card rounded-2xl border border-stone-800 p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1">
      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="w-14 h-14 rounded-xl bg-stone-900 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-400 transition-all">
            ${srv.icon}
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ${srv.tags[0]}
          </span>
        </div>
        <h3 class="font-outfit text-2xl font-bold text-stone-100 mb-2 group-hover:text-amber-200 transition-colors">${srv.title}</h3>
        <p class="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">${srv.subtitle}</p>
        <p class="text-stone-400 text-sm leading-relaxed mb-6">${srv.description}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-2 mb-6">
          ${srv.tags.map(t => `<span class="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 text-stone-300 border border-stone-800">${t}</span>`).join("")}
        </div>
        <button onclick="selectServiceForQuote('${srv.title}')" class="w-full py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 hover:text-stone-950 text-amber-200 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-amber-500/30">
          <span>Consultar Colección</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.projects.map(proj => `
    <div class="glass-card rounded-2xl overflow-hidden border border-stone-800 group hover:border-amber-500/40 transition-all duration-300">
      <div class="relative h-64 overflow-hidden">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
            ${proj.category}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4">
          <p class="text-xs text-stone-300 font-mono mb-1">📍 ${proj.location} • ${proj.year}</p>
          <h3 class="font-outfit text-xl font-bold text-white">${proj.title}</h3>
        </div>
      </div>
      <div class="p-6">
        <p class="text-stone-400 text-sm leading-relaxed mb-4">${proj.summary}</p>
        <button onclick="selectServiceForQuote('${proj.title}')" class="text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center gap-1 group/btn">
          <span>Ver Detalles de Colección</span>
          <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function selectServiceForQuote(serviceName) {
  const select = document.getElementById("form-service");
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName) || select.options[i].value.includes(serviceName)) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      select.value = "Consulta General";
    }
  }
  const contactSec = document.getElementById("contacto");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
}

function initCookieBanner() {
  const consent = localStorage.getItem("cookie_consent");
  const banner = document.getElementById("cookie-banner");
  if (!consent && banner) {
    setTimeout(() => {
      banner.classList.remove("translate-y-full", "opacity-0");
    }, 1000);
  }
}

function acceptCookies() {
  localStorage.setItem("cookie_consent", "accepted");
  const banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.classList.add("translate-y-full", "opacity-0");
  }
}

function initContactForm() {
  const form = document.getElementById("quote-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    showToastSuccess(name, service);
    form.reset();
  });
}

function showToastSuccess(name, service) {
  const modal = document.getElementById("success-toast-modal");
  const userSpan = document.getElementById("toast-user-name");
  if (userSpan) userSpan.textContent = name;
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeToastModal() {
  const modal = document.getElementById("success-toast-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");
}

function openLegalModal(type) {
  const modal = document.getElementById("legal-modal");
  const titleEl = document.getElementById("legal-modal-title");
  const subtitleEl = document.getElementById("legal-modal-subtitle");
  const contentEl = document.getElementById("legal-modal-content");

  if (!modal || !contentEl) return;

  let doc = null;
  if (type === 'privacy') {
    doc = APP_CONFIG.legal.privacyPolicy;
  } else if (type === 'terms') {
    doc = APP_CONFIG.legal.termsAndConditions;
  }

  if (!doc) return;

  titleEl.textContent = doc.title;
  subtitleEl.textContent = `${doc.subtitle} • ÚLTIMA ACTUALIZACIÓN: ${doc.lastUpdated}`;

  contentEl.innerHTML = doc.sections.map(sec => `
    <div class="mb-6 bg-stone-900/80 p-5 rounded-xl border border-stone-800">
      <h4 class="text-amber-400 font-outfit font-bold text-lg mb-2">
        ${sec.num}. ${sec.heading}
      </h4>
      <p class="text-stone-300 text-base leading-relaxed">${sec.content}</p>
    </div>
  `).join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLegalModal() {
  const modal = document.getElementById("legal-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}
