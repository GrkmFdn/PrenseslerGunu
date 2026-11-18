/* ==========================================================================
   KİŞİSELLEŞTİRME ALANI (SITE_CONFIG)
   Yazıları dilediğiniz gibi buradan güncelleyebilirsiniz.
   ========================================================================== */

const SITE_CONFIG = {
  dateBadge: "18 KASIM • DÜNYA PRENSESLER GÜNÜ",
  envelopeTo: "En Güzelim İçin",
  message: "Prensesler Günün Kutlu Olsun En Güzelim"
};

function createSvgEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, String(value));
  }
  return el;
}

function applyConfigToDOM() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (key && typeof SITE_CONFIG[key] === "string") {
      el.textContent = SITE_CONFIG[key];
    }
  });
}

/**
 * Kök ve gövde path uzunluklarını hesaplayıp CSS çizim animasyonu için --len olarak atar.
 */
function prepareStrokeLengths() {
  document.querySelectorAll(".root-path, .stem-path").forEach((path) => {
    if (typeof path.getTotalLength === "function") {
      const length = Math.ceil(path.getTotalLength()) + 2;
      path.style.setProperty("--len", String(length));
    }
  });
}

/**
 * 4 halkalı (68 taç yapraklı) gerçekçi SVG Kasımpatı başını oluşturur.
 */
function buildChrysanthemumPetals() {
  const container = document.getElementById("flower-petals-group");
  if (!container) return;

  container.innerHTML = "";

  const rings = [
    {
      count: 22,
      length: 92,
      width: 11.5,
      fill: "#C3496E",
      stroke: "rgba(95, 24, 50, 0.2)",
      angleOffset: 0,
      baseDelay: 2.35
    },
    {
      count: 18,
      length: 74,
      width: 10.2,
      fill: "#DB698B",
      stroke: "rgba(110, 30, 58, 0.16)",
      angleOffset: 9,
      baseDelay: 2.65
    },
    {
      count: 16,
      length: 55,
      width: 8.8,
      fill: "#EC92AE",
      stroke: "rgba(130, 42, 74, 0.14)",
      angleOffset: 17,
      baseDelay: 2.95
    },
    {
      count: 12,
      length: 36,
      width: 7.2,
      fill: "#F7C0D1",
      stroke: "rgba(150, 58, 92, 0.12)",
      angleOffset: 24,
      baseDelay: 3.22
    }
  ];

  rings.forEach((ring) => {
    for (let i = 0; i < ring.count; i++) {
      const angle = (360 / ring.count) * i + ring.angleOffset;
      const stagger = ((i % 4) * 0.065).toFixed(3);
      const delay = (ring.baseDelay + Number(stagger)).toFixed(3);

      const rotator = createSvgEl("g", {
        transform: `rotate(${angle.toFixed(1)})`
      });

      const L = ring.length;
      const W = ring.width;
      const d = `M 0,-4 C ${(W * 0.85).toFixed(1)},${(-L * 0.28).toFixed(1)} ${W},${(-L * 0.72).toFixed(1)} 0,${-L} C ${-W},${(-L * 0.72).toFixed(1)} ${(-W * 0.85).toFixed(1)},${(-L * 0.28).toFixed(1)} 0,-4 Z`;

      const petal = createSvgEl("path", {
        class: "petal-shape",
        d,
        fill: ring.fill,
        stroke: ring.stroke,
        "stroke-width": "0.7"
      });
      petal.style.setProperty("--petal-delay", `${delay}s`);

      rotator.appendChild(petal);
      container.appendChild(rotator);
    }
  });

  // Altın Polen Merkezi
  const centerGroup = createSvgEl("g", { class: "center-disc" });
  centerGroup.appendChild(
    createSvgEl("circle", {
      cx: 0,
      cy: 0,
      r: 15,
      fill: "#E5B85C",
      stroke: "#C8922D",
      "stroke-width": "1.2"
    })
  );
  centerGroup.appendChild(
    createSvgEl("circle", {
      cx: 0,
      cy: 0,
      r: 10.2,
      fill: "#EFCA72"
    })
  );

  for (let i = 0; i < 10; i++) {
    const rad = (Math.PI * 2 * i) / 10;
    const dist = i % 2 === 0 ? 7.4 : 4.6;
    centerGroup.appendChild(
      createSvgEl("circle", {
        cx: (Math.cos(rad) * dist).toFixed(2),
        cy: (Math.sin(rad) * dist).toFixed(2),
        r: 1.5,
        fill: "#FFF6D1"
      })
    );
  }

  centerGroup.appendChild(
    createSvgEl("circle", {
      cx: 0,
      cy: 0,
      r: 2.1,
      fill: "#FFF8DC"
    })
  );

  container.appendChild(centerGroup);
}

/**
 * Mühre dokunulduğunda zarfı kaldırır, kasımpatıyı kökten büyütür ve yazıyı gösterir.
 */
function initExperience() {
  const sealStage = document.getElementById("seal-stage");
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const waxSealBtn = document.getElementById("wax-seal-btn");
  const sealHint = document.getElementById("seal-hint");
  const bloomStage = document.getElementById("bloom-stage");

  if (!sealStage || !envelopeWrapper || !waxSealBtn || !bloomStage) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let started = false;

  waxSealBtn.addEventListener("click", () => {
    if (started) return;
    started = true;

    envelopeWrapper.classList.add("is-opening");
    if (sealHint) sealHint.style.opacity = "0";

    const transitionDelay = reducedMotion ? 80 : 620;
    const messageDelay = reducedMotion ? 120 : 4100;

    setTimeout(() => {
      sealStage.classList.add("is-leaving");

      setTimeout(() => {
        sealStage.classList.add("is-hidden");
        bloomStage.classList.remove("is-hidden");
        bloomStage.setAttribute("aria-hidden", "false");

        requestAnimationFrame(() => {
          bloomStage.classList.add("is-growing");
        });

        setTimeout(() => {
          bloomStage.classList.add("is-message-visible");
        }, messageDelay);
      }, reducedMotion ? 50 : 520);
    }, transitionDelay);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfigToDOM();
  prepareStrokeLengths();
  buildChrysanthemumPetals();
  initExperience();
});
