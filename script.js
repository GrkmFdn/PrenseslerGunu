/* ==========================================================================
   KİŞİSELLEŞTİRME ALANI (SITE_CONFIG)
   Kız arkadaşınıza özel hitapları, mektup cümlelerini ve kart yazılarını
   sadece aşağıdaki alanları düzenleyerek kolayca değiştirebilirsiniz.
   ========================================================================== */

const SITE_CONFIG = {
  // Genel hitap ve başlıklar
  princessTitle: "Benim Güzel Prensesim",
  envelopeTo: "Benim Güzel Prensesim İçin",
  topbarTitle: "18 Kasım Masalı",
  dateBadge: "18 KASIM • DÜNYA PRENSESLER GÜNÜ",
  heroTitle: "Dünya Prensesler Günün Kutlu Olsun",
  heroSubtitle:
    "Kasım'ın en zarif çiçeği kasımpatı, hayatımın en güzel mucizesi sensin. Gülüşünle her mevsimi bahara çevirdiğin için teşekkür ederim.",
  keepsakeBadge: "Kasım'ın Kasımpatı Masalı • Sana Özel Hazırlandı",

  // Kraliyet Mektubu
  letterGreeting: "Benim Güzel Prensesim,",
  letterParagraphs: [
    "Kasım ayı geldiğinde etrafı kasımpatılar nasıl zarifçe süslüyorsa, sen de hayatıma girdiğin günden beri her anımı öyle güzelleştiriyorsun.",
    "Bugün 18 Kasım Dünya Prensesler Günü... Ama benim için bir prensesi özel kılan şey yalnızca bu tarih değil; senin gülüşünün sıcaklığı, kalbinin inceliği ve varlığınla bana verdiğin huzur.",
    "Seninle geçen her gün, en sıradan anların bile bir masala dönüşebileceğini gösteriyor. İyi ki varsın, iyi ki hayatımın en güzel çiçeğisin."
  ],
  letterSignature: "Seni her şeyden çok seven...",
  letterDate: "18 Kasım 2026",

  // "Neden Benim Prensesimsin?" 6'lı Kart İçerikleri
  reasons: [
    {
      numeral: "I",
      palette: "rose",
      title: "Gülüşün",
      message: "En serin Kasım gününü bile sıcacık bir bahara çeviren o eşsiz gülüşün..."
    },
    {
      numeral: "II",
      palette: "gold",
      title: "Kalbinin Zarafeti",
      message: "Bir prensesin asaleti tacında değil, senin gibi tertemiz ve sevgi dolu kalbindedir."
    },
    {
      numeral: "III",
      palette: "coral",
      title: "Kasım'ın Çiçeği",
      message: "Kasımpatılar Kasım'a nasıl renk katıyorsa, sen de ömrümün her anına öyle anlam katıyorsun."
    },
    {
      numeral: "IV",
      palette: "ivory",
      title: "Bakışların",
      message: "Gözlerinin içine her baktığımda kendimi dünyanın en şanslı insanı gibi hissediyorum."
    },
    {
      numeral: "V",
      palette: "lilac",
      title: "Neşen ve Enerjin",
      message: "Yanımda olduğun her dakika, en sıradan günü bile masalsı bir kutlamaya dönüştürüyor."
    },
    {
      numeral: "VI",
      palette: "rose",
      title: "Sonsuzluğum",
      message: "Sadece 18 Kasım'da değil, aldığım her nefeste benim tek prensesim sensin."
    }
  ],

  // İnteraktif Kasımpatı Bahçesi İltifatları
  gardenCompliments: [
    "Bu kasımpatı senin o sıcacık gülüşün için açtı 🌸",
    "Kasım ayının en güzel rengi senin kalbinde saklı ✨",
    "Her açan kasımpatı, sana olan sevgimin küçük bir hatırası 💛",
    "Kasımpatılar bile senin zarafetini görünce hayran kalıyor 🌷",
    "Seninle her mevsim en güzel çiçeklerle dolu bir bahçe gibi 🌿",
    "İyi ki benim prensesimsin, iyi ki hayatımdasın 👑"
  ],

  // Final Beratı ve Alt Bilgi
  finaleMessage:
    "Bu berat; kalbimin tek sahibi, Kasım ayımın en güzel kasımpatısı ve ömrümün en değerli masalına sonsuz sevgi, hayranlık ve sadakatle sunulmuştur. Dünya Prensesler Günün kutlu olsun!",
  footerNote: "18 Kasım Dünya Prensesler Günü • Sevgi ve Kasımpatılarla Hazırlandı 🌸"
};

/* ==========================================================================
   KASIMPATI (CHRYSANTHEMUM) ÇİÇEK PALETLERİ VE SVG ÜRETİCİSİ
   ========================================================================== */

const CHRYSANTHEMUM_PALETTES = {
  rose: {
    outer: "#C95276",
    middle: "#E17B99",
    inner: "#F4B3C7",
    center: "#E5B85C",
    centerHighlight: "#FFF3C4"
  },
  coral: {
    outer: "#DC726C",
    middle: "#EE958D",
    inner: "#F9C5BE",
    center: "#E5B85C",
    centerHighlight: "#FFF4CC"
  },
  gold: {
    outer: "#C99B2B",
    middle: "#E5BC53",
    inner: "#F6DF96",
    center: "#B76B2A",
    centerHighlight: "#F9E2AE"
  },
  ivory: {
    outer: "#DFC8C3",
    middle: "#F4E7E3",
    inner: "#FFFBF9",
    center: "#E5B85C",
    centerHighlight: "#FFF8DC"
  },
  lilac: {
    outer: "#A26B98",
    middle: "#C08DB7",
    inner: "#E2BEE0",
    center: "#E5B85C",
    centerHighlight: "#FFF3C4"
  }
};

const PALETTE_KEYS = Object.keys(CHRYSANTHEMUM_PALETTES);

function createSvgEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, String(value));
  }
  return el;
}

/**
 * Çok katmanlı SVG Kasımpatı (Chrysanthemum) çiçeği üretir.
 */
function createChrysanthemumSVG(paletteKey = "rose", size = 96, withLeaves = true) {
  const palette = CHRYSANTHEMUM_PALETTES[paletteKey] || CHRYSANTHEMUM_PALETTES.rose;
  const svg = createSvgEl("svg", {
    viewBox: "-60 -60 120 120",
    width: size,
    height: size,
    "aria-hidden": "true",
    focusable: "false"
  });

  if (withLeaves) {
    const leavesGroup = createSvgEl("g", { opacity: "0.92" });
    const leafAngles = [-135, -42, 46, 138];
    leafAngles.forEach((angle, idx) => {
      const leaf = createSvgEl("path", {
        d: "M0,0 C14,-10 34,-12 48,-2 C36,10 18,12 0,0 Z",
        fill: idx % 2 === 0 ? "#6E8B74" : "#4E6D55",
        transform: `rotate(${angle}) translate(16 0)`
      });
      leavesGroup.appendChild(leaf);
    });
    svg.appendChild(leavesGroup);
  }

  const rings = [
    { count: 20, rx: 6.4, ry: 22.5, dist: 24, color: palette.outer, offset: 0 },
    { count: 14, rx: 5.5, ry: 17.5, dist: 17, color: palette.middle, offset: 12 },
    { count: 10, rx: 4.5, ry: 12.2, dist: 10.5, color: palette.inner, offset: 22 }
  ];

  rings.forEach((ring) => {
    const ringGroup = createSvgEl("g");
    for (let i = 0; i < ring.count; i++) {
      const angle = (360 / ring.count) * i + ring.offset;
      const petal = createSvgEl("ellipse", {
        cx: 0,
        cy: -ring.dist,
        rx: ring.rx,
        ry: ring.ry,
        fill: ring.color,
        stroke: "rgba(45, 22, 36, 0.08)",
        "stroke-width": "0.6",
        transform: `rotate(${angle.toFixed(1)})`
      });
      ringGroup.appendChild(petal);
    }
    svg.appendChild(ringGroup);
  });

  // Altın Polen Merkezi
  svg.appendChild(
    createSvgEl("circle", {
      cx: 0,
      cy: 0,
      r: 10.5,
      fill: palette.center,
      stroke: "rgba(158, 116, 24, 0.35)",
      "stroke-width": "1"
    })
  );

  for (let i = 0; i < 8; i++) {
    const rad = (Math.PI * 2 * i) / 8;
    svg.appendChild(
      createSvgEl("circle", {
        cx: (Math.cos(rad) * 5.2).toFixed(2),
        cy: (Math.sin(rad) * 5.2).toFixed(2),
        r: 1.7,
        fill: palette.centerHighlight
      })
    );
  }

  svg.appendChild(
    createSvgEl("circle", {
      cx: 0,
      cy: 0,
      r: 2.4,
      fill: palette.centerHighlight
    })
  );

  return svg;
}

function populateStaticChrysanthemums() {
  const slots = document.querySelectorAll("[data-chrysanthemum]");
  slots.forEach((slot) => {
    const palette = slot.getAttribute("data-chrysanthemum") || "rose";
    const size = Number(slot.getAttribute("data-size")) || 88;
    slot.innerHTML = "";
    slot.appendChild(createChrysanthemumSVG(palette, size, true));
  });
}

/* ==========================================================================
   CANVAS SÜZÜLEN KASIMPATI YAPRAKLARI & KUTLAMA PARTİKÜL MOTORU
   ========================================================================== */

class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.ambientParticles = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.lastTime = performance.now();

    this.resize();
    this.seedAmbient();
    window.addEventListener("resize", () => this.resize());
    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = Math.floor(this.width * dpr);
    this.canvas.height = Math.floor(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  seedAmbient() {
    const targetCount = this.reducedMotion ? 8 : Math.min(24, Math.max(14, Math.floor(this.width / 65)));
    this.ambientParticles = [];
    for (let i = 0; i < targetCount; i++) {
      this.ambientParticles.push(this.createAmbientItem(true));
    }
  }

  createAmbientItem(randomY = false) {
    const isSparkle = Math.random() < 0.42;
    const petalColors = ["#D96B8A", "#E88D8A", "#F4C2D0", "#E5B85C", "#F6E7D8"];
    return {
      kind: isSparkle ? "sparkle" : "petal",
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      vx: (Math.random() - 0.5) * 22,
      vy: 16 + Math.random() * 24,
      size: isSparkle ? 2 + Math.random() * 2.5 : 6 + Math.random() * 6,
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 1.4,
      swayOffset: Math.random() * Math.PI * 2,
      alpha: isSparkle ? 0.35 + Math.random() * 0.45 : 0.48 + Math.random() * 0.36,
      color: isSparkle ? "#F3E5AB" : petalColors[Math.floor(Math.random() * petalColors.length)]
    };
  }

  burst(x, y, options = {}) {
    const count = this.reducedMotion ? Math.min(12, options.count || 20) : options.count || 36;
    const speed = options.speed || 260;
    const colors = options.colors || ["#D96B8A", "#E88D8A", "#D4AF37", "#F3E5AB", "#F8C8D8"];
    const includeHearts = Boolean(options.hearts);
    const gravity = options.gravity ?? 210;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * Math.random());
      const velocity = speed * (0.35 + Math.random() * 0.85);
      const roll = Math.random();
      let kind = "petal";
      if (includeHearts && roll < 0.22) kind = "heart";
      else if (roll > 0.72) kind = "confetti";

      this.particles.push({
        kind,
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - (options.lift || 80),
        gravity,
        drag: 0.985,
        size: kind === "confetti" ? 6 + Math.random() * 5 : 7 + Math.random() * 7,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 6,
        alpha: 1,
        life: 0,
        maxLife: 1.9 + Math.random() * 1.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  drawPetal(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.45, p.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawConfetti(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size * 0.6, -p.size * 0.35, p.size * 1.2, p.size * 0.7);
    ctx.restore();
  }

  drawHeart(ctx, p) {
    const s = p.size * 0.55;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * 0.35);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.35);
    ctx.bezierCurveTo(-s, -s * 0.4, -s * 1.4, s * 0.7, 0, s * 1.5);
    ctx.bezierCurveTo(s * 1.4, s * 0.7, s, -s * 0.4, 0, s * 0.35);
    ctx.fill();
    ctx.restore();
  }

  loop(now) {
    const dt = Math.min(0.04, (now - this.lastTime) / 1000);
    this.lastTime = now;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Arka plan süzülen kasımpatı yaprakları ve ışıltılar
    for (let i = 0; i < this.ambientParticles.length; i++) {
      const item = this.ambientParticles[i];
      if (!this.reducedMotion) {
        item.x += (item.vx + Math.sin(now * 0.001 + item.swayOffset) * 14) * dt;
        item.y += item.vy * dt;
        item.rotation += item.vr * dt;
      }

      if (item.y > this.height + 24) {
        this.ambientParticles[i] = this.createAmbientItem(false);
      } else if (item.x < -30) {
        item.x = this.width + 20;
      } else if (item.x > this.width + 30) {
        item.x = -20;
      }

      if (item.kind === "sparkle") this.drawSparkle(this.ctx, item);
      else this.drawPetal(this.ctx, item);
    }

    // Aktif patlama ve kutlama partikülleri
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rotation += p.vr * dt;
      p.alpha = Math.max(0, 1 - Math.pow(p.life / p.maxLife, 1.8));

      if (p.kind === "heart") this.drawHeart(this.ctx, p);
      else if (p.kind === "confetti") this.drawConfetti(this.ctx, p);
      else this.drawPetal(this.ctx, p);
    }

    requestAnimationFrame((t) => this.loop(t));
  }
}

/* ==========================================================================
   İÇERİKLERİN SITE_CONFIG İLE DOLDURULMASI
   ========================================================================== */

function applyConfigToDOM() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (key && typeof SITE_CONFIG[key] === "string") {
      el.textContent = SITE_CONFIG[key];
    }
  });

  const letterBody = document.getElementById("letter-body");
  if (letterBody) {
    letterBody.innerHTML = "";
    SITE_CONFIG.letterParagraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      letterBody.appendChild(p);
    });
  }
}

/* ==========================================================================
   SAHNE 1: BÜYÜLÜ ZARF & MÜHÜR AÇILIŞI
   ========================================================================== */

function initEnvelopeStage(particles) {
  const stage = document.getElementById("envelope-stage");
  const wrapper = document.getElementById("envelope-wrapper");
  const sealBtn = document.getElementById("wax-seal-btn");
  const sealHint = document.getElementById("seal-hint");
  const mainEl = document.getElementById("main-experience");

  if (!stage || !wrapper || !sealBtn || !mainEl) return;

  let opened = false;

  const openEnvelope = () => {
    if (opened) return;
    opened = true;

    const rect = sealBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    wrapper.classList.add("is-opening");
    if (sealHint) sealHint.style.opacity = "0";

    particles.burst(cx, cy, {
      count: 48,
      speed: 280,
      lift: 110,
      hearts: true,
      colors: ["#D4AF37", "#F3E5AB", "#D96B8A", "#E88D8A", "#FFF4EE"]
    });

    setTimeout(() => {
      stage.classList.add("is-leaving");
      mainEl.classList.remove("is-hidden");
      mainEl.setAttribute("aria-hidden", "false");

      requestAnimationFrame(() => {
        mainEl.classList.add("is-visible");
        revealVisibleSections();
      });

      setTimeout(() => {
        stage.classList.add("is-hidden");
      }, 900);
    }, 1050);
  };

  sealBtn.addEventListener("click", openEnvelope);
}

/* ==========================================================================
   SAHNE 3: MEKTUP YAPRAK YAĞMURU
   ========================================================================== */

function initLetterSection(particles) {
  const dropBtn = document.getElementById("drop-petals-btn");
  const toast = document.getElementById("petal-toast");
  const letterCard = document.querySelector(".letter-card");
  if (!dropBtn) return;

  let dropCount = 0;

  dropBtn.addEventListener("click", () => {
    dropCount += 1;
    const cardRect = letterCard ? letterCard.getBoundingClientRect() : dropBtn.getBoundingClientRect();
    const x1 = cardRect.left + cardRect.width * 0.25;
    const x2 = cardRect.left + cardRect.width * 0.75;
    const y = Math.max(80, cardRect.top + 30);

    particles.burst(x1, y, { count: 24, speed: 210, lift: 130, hearts: true });
    particles.burst(x2, y, { count: 24, speed: 210, lift: 130, hearts: true });

    if (toast) {
      toast.textContent =
        dropCount === 1
          ? "Mektubunun üzerine taze kasımpatı yaprakları bırakıldı 🌸"
          : `${dropCount} kez kasımpatı yapraklarıyla sevgi gönderildi 🌸`;
    }
  });
}

/* ==========================================================================
   SAHNE 4: NEDEN BENİM PRENSESİMSİN? (3B KARTLAR)
   ========================================================================== */

function initReasonsSection(particles) {
  const grid = document.getElementById("reasons-grid");
  const counterEl = document.getElementById("reasons-counter");
  const flipAllBtn = document.getElementById("flip-all-btn");
  if (!grid) return;

  const cards = [];
  const total = SITE_CONFIG.reasons.length;

  const updateCounter = () => {
    const openedCount = cards.filter((c) => c.classList.contains("is-flipped")).length;
    if (counterEl) {
      counterEl.textContent = `${openedCount} / ${total} Sürpriz Açıldı`;
    }
    if (flipAllBtn) {
      flipAllBtn.textContent = openedCount === total ? "Tümünü Kapat" : "Tümünü Aç";
    }
  };

  grid.innerHTML = "";

  SITE_CONFIG.reasons.forEach((reason) => {
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = "reason-card";
    cardBtn.setAttribute("aria-pressed", "false");
    cardBtn.setAttribute("aria-label", `${reason.title} kartını çevir`);

    const inner = document.createElement("span");
    inner.className = "reason-card-inner";

    // Ön Yüz
    const front = document.createElement("span");
    front.className = "reason-card-face reason-card-front";

    const num = document.createElement("span");
    num.className = "reason-card-num";
    num.textContent = `KASIMPATI • ${reason.numeral}`;

    const crest = document.createElement("span");
    crest.className = "reason-card-crest";
    crest.appendChild(createChrysanthemumSVG(reason.palette, 78, true));

    const title = document.createElement("h3");
    title.className = "reason-card-title";
    title.textContent = reason.title;

    const hint = document.createElement("span");
    hint.className = "reason-card-hint";
    hint.textContent = "Dokun ve Aç ✦";

    front.append(num, crest, title, hint);

    // Arka Yüz
    const back = document.createElement("span");
    back.className = "reason-card-face reason-card-back";

    const backTitle = document.createElement("span");
    backTitle.className = "reason-card-back-title";
    backTitle.textContent = reason.title;

    const msg = document.createElement("p");
    msg.className = "reason-card-text";
    msg.textContent = reason.message;

    const backMark = document.createElement("span");
    backMark.className = "reason-card-back-mark";
    backMark.textContent = "👑 Benim Prensesim";

    back.append(backTitle, msg, backMark);

    inner.append(front, back);
    cardBtn.appendChild(inner);

    cardBtn.addEventListener("click", () => {
      const willOpen = !cardBtn.classList.contains("is-flipped");
      cardBtn.classList.toggle("is-flipped", willOpen);
      cardBtn.setAttribute("aria-pressed", String(willOpen));
      updateCounter();

      if (willOpen) {
        const rect = cardBtn.getBoundingClientRect();
        particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, {
          count: 18,
          speed: 190,
          lift: 75,
          hearts: true
        });
      }
    });

    cards.push(cardBtn);
    grid.appendChild(cardBtn);
  });

  if (flipAllBtn) {
    flipAllBtn.addEventListener("click", () => {
      const allOpen = cards.every((c) => c.classList.contains("is-flipped"));
      const targetState = !allOpen;
      cards.forEach((card) => {
        card.classList.toggle("is-flipped", targetState);
        card.setAttribute("aria-pressed", String(targetState));
      });
      updateCounter();
    });
  }

  updateCounter();
}

/* ==========================================================================
   SAHNE 5: İNTERAKTİF KASIMPATI BAHÇESİ
   ========================================================================== */

function initGardenSection(particles) {
  const stage = document.getElementById("garden-stage");
  const layer = document.getElementById("garden-flowers-layer");
  const complimentEl = document.getElementById("garden-compliment");
  const countBadge = document.getElementById("garden-count-badge");
  const bloomBtn = document.getElementById("bloom-flower-btn");
  const clearBtn = document.getElementById("clear-garden-btn");

  if (!stage || !layer) return;

  let totalBlooms = 0;
  let complimentIdx = 0;
  const maxVisibleFlowers = 24;

  const updateGardenUI = (showCompliment = true) => {
    if (countBadge) {
      countBadge.textContent = `Açan Kasımpatı: ${totalBlooms}`;
    }
    if (showCompliment && complimentEl && SITE_CONFIG.gardenCompliments.length > 0) {
      complimentEl.textContent =
        SITE_CONFIG.gardenCompliments[complimentIdx % SITE_CONFIG.gardenCompliments.length];
      complimentIdx += 1;
    }
  };

  const plantFlowerAt = (xPercent, yPercent, silent = false) => {
    // Bahçe sınırları içinde zarif yerleşim
    const clampedX = Math.max(8, Math.min(92, xPercent));
    const clampedY = Math.max(36, Math.min(88, yPercent));

    if (layer.children.length >= maxVisibleFlowers) {
      layer.removeChild(layer.firstElementChild);
    }

    const palette = PALETTE_KEYS[Math.floor(Math.random() * PALETTE_KEYS.length)];
    const size = Math.round(58 + Math.random() * 28);
    const stemHeight = Math.round(46 + ((clampedY - 30) / 60) * 62);
    const curveShift = Math.round((Math.random() - 0.5) * 20);

    const flowerWrap = document.createElement("div");
    flowerWrap.className = "planted-flower";
    flowerWrap.style.left = `${clampedX}%`;
    flowerWrap.style.top = `${clampedY}%`;
    flowerWrap.style.animationDelay = `${(-Math.random() * 4).toFixed(2)}s`;

    const bloomHead = document.createElement("div");
    bloomHead.className = "planted-bloom-head";
    bloomHead.appendChild(createChrysanthemumSVG(palette, size, true));

    const stemSvg = createSvgEl("svg", {
      viewBox: `0 0 40 ${stemHeight}`,
      width: 40,
      height: stemHeight,
      class: "planted-stem-svg"
    });

    stemSvg.appendChild(
      createSvgEl("path", {
        d: `M20,0 Q${20 + curveShift},${stemHeight * 0.5} 20,${stemHeight}`,
        fill: "none",
        stroke: "#5E8165",
        "stroke-width": "3.4",
        "stroke-linecap": "round"
      })
    );

    stemSvg.appendChild(
      createSvgEl("path", {
        d: `M20,${stemHeight * 0.52} Q33,${stemHeight * 0.38} 37,${stemHeight * 0.48} Q29,${stemHeight * 0.6} 20,${stemHeight * 0.55} Z`,
        fill: "#6E8B74"
      })
    );

    flowerWrap.append(bloomHead, stemSvg);
    layer.appendChild(flowerWrap);

    totalBlooms += 1;
    updateGardenUI(!silent);

    if (!silent) {
      const stageRect = stage.getBoundingClientRect();
      const px = stageRect.left + (clampedX / 100) * stageRect.width;
      const py = stageRect.top + (clampedY / 100) * stageRect.height - size * 0.5;
      particles.burst(px, py, {
        count: 14,
        speed: 150,
        lift: 60,
        colors: [CHRYSANTHEMUM_PALETTES[palette].middle, "#F3E5AB", "#FFF8EC"]
      });
    }
  };

  // Başlangıç için 3 zarif kasımpatı yerleştir
  const seedInitialFlowers = () => {
    layer.innerHTML = "";
    totalBlooms = 0;
    plantFlowerAt(26, 74, true);
    plantFlowerAt(52, 66, true);
    plantFlowerAt(76, 76, true);
    updateGardenUI(false);
  };

  seedInitialFlowers();

  stage.addEventListener("click", (e) => {
    const rect = stage.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    plantFlowerAt(xPct, yPct, false);
  });

  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      plantFlowerAt(14 + Math.random() * 72, 46 + Math.random() * 38, false);
    }
  });

  if (bloomBtn) {
    bloomBtn.addEventListener("click", () => {
      plantFlowerAt(14 + Math.random() * 72, 44 + Math.random() * 40, false);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      seedInitialFlowers();
      if (complimentEl) {
        complimentEl.textContent = "Bahçe senin için yeniden tazelendi, dilediğin yere dokun 🌸";
      }
    });
  }
}

/* ==========================================================================
   SAHNE 6: FİNAL — TAÇ TAKMA & KUTLAMA ŞOVU
   ========================================================================== */

function initFinaleSection(particles) {
  const celebrateBtn = document.getElementById("crown-celebrate-btn");
  const replayBtn = document.getElementById("replay-celebration-btn");
  const inviteBox = document.getElementById("finale-invite");
  const certBox = document.getElementById("royal-certificate");

  if (!celebrateBtn || !inviteBox || !certBox) return;

  const launchCelebrationShow = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const celebrationColors = ["#D4AF37", "#F3E5AB", "#D96B8A", "#E88D8A", "#FFF8EC", "#B17BA6"];

    particles.burst(w * 0.5, h * 0.45, {
      count: 64,
      speed: 380,
      lift: 140,
      hearts: true,
      colors: celebrationColors
    });

    setTimeout(() => {
      particles.burst(w * 0.22, h * 0.35, {
        count: 42,
        speed: 310,
        lift: 120,
        hearts: true,
        colors: celebrationColors
      });
      particles.burst(w * 0.78, h * 0.35, {
        count: 42,
        speed: 310,
        lift: 120,
        hearts: true,
        colors: celebrationColors
      });
    }, 260);

    setTimeout(() => {
      particles.burst(w * 0.5, h * 0.22, {
        count: 50,
        speed: 320,
        lift: 90,
        hearts: true,
        colors: celebrationColors
      });
    }, 580);
  };

  celebrateBtn.addEventListener("click", () => {
    inviteBox.classList.add("is-hidden");
    certBox.classList.remove("is-hidden");
    certBox.setAttribute("aria-hidden", "false");
    certBox.classList.add("is-revealed");

    launchCelebrationShow();
    certBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  if (replayBtn) {
    replayBtn.addEventListener("click", launchCelebrationShow);
  }
}

/* ==========================================================================
   SCROLL REVEAL GÖZLEMCİSİ
   ========================================================================== */

function revealVisibleSections() {
  const sections = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    sections.forEach((sec) => sec.classList.add("is-inview"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ==========================================================================
   UYGULAMA BAŞLATICI
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  applyConfigToDOM();
  populateStaticChrysanthemums();

  const canvas = document.getElementById("ambient-canvas");
  const particles = new ParticleEngine(canvas);

  initEnvelopeStage(particles);
  initLetterSection(particles);
  initReasonsSection(particles);
  initGardenSection(particles);
  initFinaleSection(particles);
});
