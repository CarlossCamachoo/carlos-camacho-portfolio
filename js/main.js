/* ============================================================
   Carlos Camacho — Portfolio / CV
   i18n (ES/EN), scroll reveal, animated counters, mobile nav
   ============================================================ */

const translations = {
  "nav.about":   { es: "Sobre mí",      en: "About" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.projects": { es: "Proyectos",    en: "Projects" },
  "nav.results": { es: "Resultados",    en: "Results" },
  "nav.skills":  { es: "Habilidades",   en: "Skills" },
  "nav.contact": { es: "Contacto",      en: "Contact" },
  "nav.cta":     { es: "WhatsApp",      en: "WhatsApp" },
  "nav.cv":      { es: "CV (PDF)",      en: "Resume (PDF)" },

  "hero.kicker": { es: "Especialista en Meta Ads &amp; TikTok Ads · Automatización con IA", en: "Meta Ads &amp; TikTok Ads Specialist · AI Automation" },
  "hero.title":  {
    es: "Escalo marcas con pauta digital<br> — y <em>construyo</em> el software que las hace funcionar.",
    en: "I scale brands with paid media<br> — and <em>build</em> the software that runs them."
  },
  "hero.sub": {
    es: "Gestiono presupuestos CBO/ABO en Meta Ads y TikTok Ads, optimizo ROAS y CPA, y automatizo con IA los procesos que la mayoría de traffickers tercerizan. Opero como un equipo completo: pauta, contenido, automatización y desarrollo.",
    en: "I manage CBO/ABO budgets on Meta Ads and TikTok Ads, optimize ROAS and CPA, and use AI to automate the processes most traffickers outsource. I operate as a full team: media buying, content, automation and development."
  },
  "hero.ctaProjects": { es: "Ver lo que he construido", en: "See what I've built" },
  "hero.ctaContact": { es: "Hablemos por WhatsApp", en: "Let's talk on WhatsApp" },
  "hero.available": { es: "Disponible", en: "Available" },
  "hero.availableSub": { es: "— remoto o presencial", en: "— remote or on-site" },
  "hero.location": { es: "Floridablanca / Bucaramanga, Colombia", en: "Floridablanca / Bucaramanga, Colombia" },
  "hero.langs": { es: "Español nativo · Inglés B2", en: "Native Spanish · B2 English" },
  "hero.photoTag": { es: "Meta Ads · TikTok Ads · IA", en: "Meta Ads · TikTok Ads · AI" },

  "stats.spend": { es: "Administrados en pauta (Meta Ads)", en: "Managed in Meta Ads spend" },
  "stats.results": { es: "Resultados generados en campañas activas", en: "Results generated in active campaigns" },
  "stats.apps": { es: "Productos de software construidos con IA", en: "Software products built with AI" },

  "about.kicker": { es: "Perfil profesional", en: "Professional profile" },
  "about.title": { es: "Un equipo de una sola persona", en: "A one-person team" },
  "about.p1": {
    es: "<strong>Trafficker de Meta Ads y TikTok Ads</strong> con experiencia gestionando presupuestos CBO y ABO, optimizando ROAS y CPA, y llevando marcas de belleza y ecommerce desde la estrategia de contenido hasta el cierre de venta por WhatsApp.",
    en: "<strong>Meta Ads and TikTok Ads trafficker</strong> experienced in managing CBO and ABO budgets, optimizing ROAS and CPA, and taking beauty and ecommerce brands from content strategy to closing sales over WhatsApp."
  },
  "about.p2": {
    es: "Mi diferencial es que uso inteligencia artificial no solo para apoyar la ejecución de pauta, sino para <strong>construir mis propias herramientas</strong>: sistemas de gestión, paneles de control y automatizaciones de reportes mediante APIs que agilizan la atención y el seguimiento a clientes.",
    en: "My edge is that I use AI not just to support media buying execution, but to <strong>build my own tools</strong>: management systems, control panels and reporting automations via APIs that speed up client follow-up and support."
  },
  "about.p3": {
    es: "Busco una posición donde pueda gestionar cuentas publicitarias, automatizar procesos operativos y aportar directamente a la rentabilidad de la marca.",
    en: "I'm looking for a role where I can manage ad accounts, automate operational processes and directly contribute to a brand's profitability."
  },
  "about.f1l": { es: "Ubicación", en: "Location" },
  "about.f1v": { es: "Floridablanca / Bucaramanga, Santander, Colombia", en: "Floridablanca / Bucaramanga, Santander, Colombia" },
  "about.f2l": { es: "Disponibilidad", en: "Availability" },
  "about.f2v": { es: "Remoto o presencial", en: "Remote or on-site" },
  "about.f3l": { es: "Plataformas", en: "Platforms" },
  "about.f4l": { es: "Diferencial", en: "Edge" },
  "about.f4v": { es: "Construyo software con IA para automatizar operación", en: "I build AI-powered software to automate operations" },
  "about.f5l": { es: "Idiomas", en: "Languages" },
  "about.f5v": { es: "Español nativo · Inglés B2", en: "Native Spanish · B2 English" },

  "exp.kicker": { es: "Experiencia", en: "Experience" },
  "exp.title": { es: "Experiencia laboral", en: "Work experience" },
  "exp.note": {
    es: "Desde pauta digital hasta cierre de ventas — cada rol sumó una pieza del sistema completo que opero hoy.",
    en: "From paid media to closing sales — every role added a piece of the full system I run today."
  },

  "exp.job1.date": { es: "May. 2025 — Ene. 2026", en: "May 2025 — Jan 2026" },
  "exp.job1.role": { es: "Especialista en Pauta Digital (Trafficker)", en: "Digital Advertising Specialist (Media Buyer)" },
  "exp.job1.company": { es: "Mafe Velásquez Estética", en: "Mafe Velásquez Estética" },
  "exp.job1.b1": {
    es: "Diseñé y optimicé campañas en Meta Ads (Facebook e Instagram) orientadas a WhatsApp para un negocio de maquillaje y peinado a domicilio, ajustando presupuesto CBO y reiniciando la fase de aprendizaje según el comportamiento de cada conjunto de anuncios.",
    en: "Designed and optimized Meta Ads campaigns (Facebook and Instagram) driving WhatsApp conversations for a mobile makeup and hairstyling business, adjusting CBO budget and resetting the learning phase based on each ad set's behavior."
  },
  "exp.job1.b2": {
    es: "Reposicioné la estrategia de Instagram, moviendo el enfoque de tratamientos faciales hacia maquillaje y peinado de eventos, con plan de bio, historias destacadas, patrón de grid y plantillas de copy.",
    en: "Repositioned the Instagram strategy, shifting focus from facial treatments to event makeup and hairstyling, with a bio plan, story highlights, grid pattern and copy templates."
  },
  "exp.job1.b3": {
    es: "Redacté mensajes de cierre de venta y recordatorios de citas por WhatsApp con tono cálido y enfoque de urgencia, mejorando la tasa de respuesta y el agendamiento.",
    en: "Wrote closing messages and WhatsApp appointment reminders with a warm, urgency-driven tone, improving response rate and bookings."
  },
  "exp.job1.b4": {
    es: "Resolví la configuración de publicación cruzada entre Instagram y Facebook a través del Centro de Cuentas de Meta, eliminando errores de sincronización de campañas.",
    en: "Fixed cross-posting configuration between Instagram and Facebook through Meta's Accounts Center, eliminating campaign sync errors."
  },

  "exp.job2.date": { es: "Ene. 2025", en: "Jan 2025" },
  "exp.job2.role": { es: "Media Buyer &amp; Gestor de E-commerce", en: "Media Buyer &amp; E-commerce Manager" },
  "exp.job2.company": { es: "House&amp;Buy", en: "House&amp;Buy" },
  "exp.job2.b1": {
    es: "Construí el ecosistema de venta en Shopify, desde landing page hasta checkout, integrando tráfico pago y seguimiento de conversiones.",
    en: "Built the Shopify sales ecosystem, from landing page to checkout, integrating paid traffic and conversion tracking."
  },
  "exp.job2.b2": {
    es: "Gestioné la inversión publicitaria y optimicé el retorno de inversión (ROI) ajustando públicos, presupuestos y creativos.",
    en: "Managed ad spend and optimized ROI by adjusting audiences, budgets and creatives."
  },

  "exp.job3.date": { es: "Jul. 2023 — Ene. 2024", en: "Jul 2023 — Jan 2024" },
  "exp.job3.role": { es: "Ejecutivo de Ventas (Closer)", en: "Sales Executive (Closer)" },
  "exp.job3.company": { es: "Grafikar SAS", en: "Grafikar SAS" },
  "exp.job3.b1": {
    es: "Cerré ventas de alto impacto gestionando objeciones y seguimiento estructurado a prospectos.",
    en: "Closed high-impact sales by handling objections and structured prospect follow-up."
  },
  "exp.job3.b2": {
    es: "Optimicé el último tramo del embudo de conversión, elevando la tasa de cierre sobre los leads calificados.",
    en: "Optimized the final stage of the conversion funnel, raising the closing rate on qualified leads."
  },

  "dev.kicker": { es: "Portafolio de proyectos", en: "Project portfolio" },
  "dev.title": { es: "El software que construyo para operar mejor", en: "The software I build to operate better" },
  "dev.note": {
    es: "No solo ejecuto pauta: construyo las herramientas que automatizan la operación detrás de ella.",
    en: "I don't just run ads: I build the tools that automate the operation behind them."
  },
  "dev.p1.title": { es: "Sistema de Gestión — Mafe Velásquez Estética", en: "Management System — Mafe Velásquez Estética" },
  "dev.p1.desc": {
    es: "Panel de administración a medida para un negocio de maquillaje y peinado a domicilio: agenda de citas, control de caja, gestión de clientes y recordatorios automáticos por WhatsApp. Reemplazó hojas de cálculo y mensajes manuales por un flujo centralizado.",
    en: "Custom admin panel for a mobile makeup and hairstyling business: appointment calendar, cash control, client management and automatic WhatsApp reminders. Replaced spreadsheets and manual messages with one centralized flow."
  },
  "dev.p1.t1": { es: "Automatización WhatsApp", en: "WhatsApp automation" },
  "dev.p1.t2": { es: "Agenda &amp; CRM", en: "Booking &amp; CRM" },
  "dev.p1.t3": { es: "Control de caja", en: "Cash control" },

  "dev.p2.desc": {
    es: "Panel de control construido para un negocio de dropshipping: pedidos, devoluciones, gasto en ads y ROAS, cierre mensual, CRM y plantillas de WhatsApp, hooks creativos y semáforo de KPIs con benchmarks de la industria.",
    en: "Control panel built for a dropshipping business: orders, returns, ad spend and ROAS, monthly close, CRM and WhatsApp templates, creative hooks, and a KPI traffic-light system with industry benchmarks."
  },
  "dev.p2.t1": { es: "E-commerce", en: "E-commerce" },
  "dev.p2.t2": { es: "CRM &amp; WhatsApp", en: "CRM &amp; WhatsApp" },
  "dev.p2.t3": { es: "Dropshipping", en: "Dropshipping" },

  "dev.p3.title": { es: "Finanzas / Libro Mayor", en: "Finance / Ledger" },
  "dev.p3.desc": {
    es: "Aplicación de finanzas personales que sincroniza automáticamente transacciones de tarjetas y cuentas bancarias directamente desde el correo del usuario, categoriza gastos y presenta el balance mensual en un dashboard claro.",
    en: "Personal finance app that automatically syncs card and bank account transactions straight from the user's email, categorizes spending, and presents the monthly balance in a clear dashboard."
  },
  "dev.p3.t1": { es: "Automatización", en: "Automation" },
  "dev.p3.t2": { es: "Finanzas personales", en: "Personal finance" },

  "results.kicker": { es: "Resultados de campañas", en: "Campaign results" },
  "results.title": { es: "Resultados de campañas reales", en: "Real campaign results" },
  "results.note": { es: "Capturas directas de Meta Ads Manager, sin editar.", en: "Direct, unedited screenshots from Meta Ads Manager." },
  "results.active": { es: "● Activa", en: "● Active" },
  "results.spend": { es: "Invertido", en: "Spent" },
  "results.results": { es: "Resultados", en: "Results" },
  "results.cpr": { es: "Costo/resultado", en: "Cost/result" },
  "results.msg": { es: "Tasa de mensajes", en: "Message rate" },
  "results.clicks": { es: "Clics únicos", en: "Unique clicks" },

  "testi.kicker": { es: "Lo que dicen mis clientes", en: "What my clients say" },
  "testi.title": { es: "Testimonios", en: "Testimonials" },
  "testi.t1.quote": {
    es: "La verdad fue un antes y un después para mi negocio. Venía de meses justos de ingresos, y fue un salto del cielo a la tierra gracias a ti.",
    en: "It really was a before-and-after for my business. I was barely getting by, and it felt like a leap from the ground to the sky thanks to you."
  },
  "testi.t2.quote": {
    es: "Me impresionó tu trabajo, la verdad nunca pensé que me fuera a ir bien también. Me arrepiento de no habértelo dicho antes, ¡muchas gracias!",
    en: "Your work impressed me — honestly, I never thought it would go well for me too. I regret not telling you sooner, thank you so much!"
  },
  "testi.t2.role": { es: "Colorista independiente", en: "Independent hair colorist" },
  "testi.t3.quote": {
    es: "Me ayudaste mucho con la gestión de mi tienda y a cuadrar el píxel. Te lo agradezco mucho, tanto como con las automatizaciones que me creaste — me ahorraste mucho trabajo. ¡Mil gracias, Carlos!",
    en: "You helped me a lot with managing my store and setting up the pixel correctly. I really appreciate it, along with the automations you built for me — you saved me a lot of work. Thank you so much, Carlos!"
  },
  "testi.t3.role": { es: "E-commerce", en: "E-commerce" },

  "collab.kicker": { es: "Colaboraciones", en: "Collaborations" },
  "collab.title": { es: "Proyectos y colaboraciones", en: "Projects & collaborations" },
  "collab.c1": {
    es: "Desarrollo de identidad de marca, naming de producto y estrategia de redes para una marca de accesorios artesanales, incluyendo hoja de ruta de lanzamiento en siete etapas.",
    en: "Brand identity development, product naming and social strategy for a handmade accessories brand, including a seven-stage launch roadmap."
  },
  "collab.c2": {
    es: "Apoyo a Arte Capilar, una colorista independiente, en mensajes de marketing y captación de clientas por WhatsApp.",
    en: "Supported Arte Capilar, an independent hair colorist, with marketing messaging and client acquisition over WhatsApp."
  },
  "collab.c3": {
    es: "Creación de contenido UGC (User Generated Content) para colaboraciones de marca, gestionando entregas y comunicación de forma remota.",
    en: "Created UGC (User Generated Content) for brand collaborations, managing deliverables and communication remotely."
  },

  "skills.kicker": { es: "Habilidades técnicas", en: "Technical skills" },
  "skills.title": { es: "Habilidades", en: "Skills" },
  "skills.g1": { es: "Pauta digital", en: "Paid media" },
  "skills.g1.t1": { es: "Segmentación de públicos", en: "Audience segmentation" },
  "skills.g2": { es: "Automatización &amp; IA", en: "Automation &amp; AI" },
  "skills.g2.t1": { es: "Desarrollo asistido por IA", en: "AI-assisted development" },
  "skills.g2.t2": { es: "Flujos WhatsApp", en: "WhatsApp flows" },
  "skills.g3": { es: "Herramientas", en: "Tools" },
  "skills.g4": { es: "Comunicación &amp; ventas", en: "Communication &amp; sales" },
  "skills.g4.t1": { es: "Copywriting persuasivo", en: "Persuasive copywriting" },
  "skills.g4.t2": { es: "Cierre de ventas", en: "Sales closing" },
  "skills.g4.t3": { es: "Manejo de objeciones", en: "Objection handling" },

  "edu.kicker": { es: "Formación académica", en: "Academic background" },
  "edu.title": { es: "Educación y certificaciones", en: "Education & certifications" },
  "edu.e1n": { es: "Certificado Oficial Meta Ads", en: "Official Meta Ads Certificate" },
  "edu.e2n": { es: "Creación de Landing Pages en Shopify y fundamentos de Meta Ads", en: "Shopify Landing Page Creation & Meta Ads Fundamentals" },
  "edu.e2o": { es: "Comunidad Iván Caicedo", en: "Iván Caicedo Community" },
  "edu.e3n": { es: "Inglés intermedio B2", en: "Intermediate English B2" },

  "contact.kicker": { es: "Contacto", en: "Contact" },
  "contact.title": {
    es: "Busco un equipo donde la pauta y la automatización <em>sumen</em>, no compitan.",
    en: "Looking for a team where media buying and automation <em>add up</em>, not compete."
  },
  "contact.whatsapp": { es: "Escríbeme por WhatsApp", en: "Message me on WhatsApp" },
  "contact.email": { es: "Enviar un correo", en: "Send an email" },
  "contact.cv": { es: "Descargar CV en PDF", en: "Download PDF resume" }
};

const STORAGE_KEY = "cc-portfolio-lang";

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry && entry[lang] != null) {
      el.innerHTML = entry[lang];
    }
  });
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
  localStorage.setItem(STORAGE_KEY, lang);
}

function initLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = saved === "en" ? "en" : "es";
  applyLang(lang);
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn")));
  });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll(".js-count");
  if (counters.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target"), 10) || 0;
      el.textContent = target.toLocaleString("es-CO");
    });
    return;
  }

  const animate = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(target * ease(progress));
      el.textContent = value.toLocaleString("es-CO");
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => io.observe(el));
}

function initMobileNav() {
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav-links");
  if (!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.style.display === "flex";
    links.style.display = open ? "none" : "flex";
    links.style.position = "absolute";
    links.style.top = "100%";
    links.style.left = "0";
    links.style.right = "0";
    links.style.flexDirection = "column";
    links.style.background = "rgba(10,11,15,0.98)";
    links.style.padding = "20px 32px";
    links.style.borderBottom = "1px solid var(--border)";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initReveal();
  initCounters();
  initMobileNav();
});
