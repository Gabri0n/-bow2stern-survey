const STORE_KEY = "bow2stern-survey-v1";
const PHOTO_KEY = "bow2stern-survey-photos-v1";
const DB_NAME = "bow2stern-survey";
const DB_STORE = "photos";

const sections = [
  ["cover", "Cover"],
  ["general", "General"],
  ["moisture", "Moisture"],
  ["hull", "Hull and Deck"],
  ["cockpit", "Cockpit and Helm"],
  ["navigation", "Navigation"],
  ["propulsion", "Propulsion"],
  ["systems", "Mechanical"],
  ["fuel", "Fuel and Electrical"],
  ["comfort", "Interior"],
  ["safety", "Safety"],
  ["findings", "Findings"]
];

const photoLabels = {
  coverPhoto: "Boat image",
  registrationPhoto: "Registration image",
  hinPhoto: "H.I.N. image",
  cockpitPhoto: "Cockpit image",
  helmPhoto: "Helm image",
  navigationPhoto: "Navigation image",
  propulsionPhoto: "Propulsion image",
  propShaftPhoto: "Propeller / shaft image",
  fuelPhoto: "Fuel system image",
  electricalPhoto: "Electrical system image",
  generatorPhoto: "Generator image",
  salonPhoto: "Salon image",
  galleyPhoto: "Galley image",
  headPhoto: "Head image",
  aftCabinPhoto: "Aft cabin image",
  safetyPhoto: "Safety equipment image"
};

const moisturePoints = {
  Powerboat: [
    { x: 20.1, y: 4.87, w: 6.69, h: 5.15 },
    { x: 69.27, y: 4.73, w: 6.83, h: 5.3 },
    { x: 28.74, y: 8.7, w: 9.11, h: 4.54 },
    { x: 57.45, y: 8.45, w: 9.11, h: 4.54 },
    { x: 19.96, y: 12.31, w: 6.83, h: 5.15 },
    { x: 69.27, y: 12.06, w: 6.83, h: 5.15 },
    { x: 28.61, y: 18.17, w: 9.11, h: 4.39 },
    { x: 59.88, y: 18.52, w: 8.97, h: 4.69 },
    { x: 19.84, y: 24.04, w: 6.83, h: 5.15 },
    { x: 69.27, y: 23.28, w: 6.83, h: 5.15 },
    { x: 27.98, y: 30.63, w: 8.97, h: 4.69 },
    { x: 60.28, y: 31.01, w: 8.54, h: 4.69 },
    { x: 19.7, y: 40.68, w: 6.97, h: 5.15 },
    { x: 69.39, y: 40.81, w: 6.83, h: 5.15 },
    { x: 27.93, y: 47.41, w: 9.96, h: 4.54 },
    { x: 60.13, y: 47.68, w: 8.97, h: 4.39 },
    { x: 19.58, y: 54.3, w: 6.97, h: 5.15 },
    { x: 69.39, y: 54.55, w: 6.97, h: 5.15 },
    { x: 28.02, y: 60.78, w: 10.67, h: 4.54 },
    { x: 58.96, y: 61.03, w: 9.53, h: 4.54 },
    { x: 19.71, y: 65.9, w: 6.83, h: 5.15 },
    { x: 69.39, y: 65.78, w: 6.97, h: 5.15 },
    { x: 28.13, y: 70.74, w: 10.96, h: 4.54 },
    { x: 58.42, y: 71.02, w: 10.1, h: 4.24 },
    { x: 19.71, y: 74.74, w: 6.83, h: 4.99 },
    { x: 69.39, y: 75.11, w: 6.83, h: 5.15 },
    { x: 28.41, y: 79.32, w: 10.53, h: 4.54 },
    { x: 58.4, y: 79.7, w: 10.39, h: 4.54 },
    { x: 19.7, y: 83.93, w: 6.97, h: 5.15 },
    { x: 69.39, y: 84.17, w: 6.97, h: 5.3 },
    { x: 19.58, y: 89.23, w: 6.97, h: 5.15 },
    { x: 69.39, y: 89.86, w: 6.97, h: 5.15 },
  ],
  Sailboat: [
    { x: 41.34, y: 8.12, w: 4.17, h: 3.01 },
    { x: 21.62, y: 10.16, w: 4.03, h: 3.01 },
    { x: 56.48, y: 11.47, w: 4.03, h: 3.01 },
    { x: 70.87, y: 16.73, w: 4.17, h: 3.01 },
    { x: 11.32, y: 16.97, w: 4.03, h: 3.01 },
    { x: 40.07, y: 17.09, w: 4.72, h: 3.01 },
    { x: 56.35, y: 22.24, w: 4.17, h: 3.01 },
    { x: 21.62, y: 24.15, w: 4.03, h: 3.01 },
    { x: 41.46, y: 25.71, w: 4.17, h: 3.01 },
    { x: 41.48, y: 33.85, w: 6.25, h: 2.87 },
    { x: 58.23, y: 53.7, w: 6.25, h: 3.01 },
    { x: 43.4, y: 77.27, w: 5.14, h: 2.87 },
    { x: 6.48, y: 80.01, w: 4.17, h: 3.01 },
    { x: 18.28, y: 81.57, w: 6.11, h: 3.01 },
    { x: 32.01, y: 82.76, w: 4.59, h: 3.01 },
    { x: 41.35, y: 83.13, w: 4.03, h: 2.87 },
    { x: 17.9, y: 86.23, w: 6.25, h: 3.01 },
    { x: 40.61, y: 89.0, w: 6.25, h: 2.87 },
  ]
};

const reportSections = [
  {
    title: "General Information",
    fields: [
      ["Type of survey", "surveyType"],
      ["Make of vessel", "vesselMake"],
      ["Year of vessel", "vesselYear"],
      ["Date of manufacturing", "manufactureDate"],
      ["Registration number", "registrationNumber"],
      ["Hull identification number", "hin"],
      ["Length", "length"],
      ["Beam", "beam"],
      ["Draft", "draft"],
      ["Boat weight", "displacement"]
    ],
    photos: ["registrationPhoto", "hinPhoto"]
  },
  {
    title: "Hull and Deck Superstructure",
    fields: [
      ["Bottom information", "bottomInfo"],
      ["Topsides", "topsides"],
      ["Transom", "transom"],
      ["Deck", "deck"],
      ["Hull to deck joint", "hullDeckJoint"],
      ["Stringers and bulkheads", "structureNotes"],
      ["Antifouling", "antifouling"],
      ["High moisture noted", "highMoisture"],
      ["Delamination noted", "delamination"]
    ]
  },
  {
    title: "Cockpit and Helm",
    fields: [
      ["Cockpit", "cockpit"],
      ["Helm", "helm"],
      ["Trim tabs", "trimTabs"],
      ["Way-point", "waypoint"],
      ["VHF", "vhfHelm"],
      ["Stereo", "stereoHelm"],
      ["GPS", "gpsHelm"],
      ["Spotlight", "spotlight"],
      ["Compass", "compassHelm"],
      ["Depth sounder", "depthSounderHelm"]
    ],
    photos: ["cockpitPhoto", "helmPhoto"]
  },
  {
    title: "Navigation Equipment",
    fields: [
      ["Navigation lights", "navLights"],
      ["Compass", "compass"],
      ["Radar", "radar"],
      ["Radar manufacturer", "radarMfg"],
      ["Radar reflector", "radarReflector"],
      ["GPS", "gps"],
      ["Depth finder", "depthFinder"],
      ["Sound signaling", "soundSignal"],
      ["Signaling type", "signalingType"],
      ["Knot/log", "knotLog"],
      ["VHF radio", "vhf"],
      ["Auto pilot", "autoPilot"],
      ["Wipers", "wipers"],
      ["Search light", "searchLight"]
    ],
    photos: ["navigationPhoto"]
  },
  {
    title: "Propulsion",
    fields: [
      ["Engine layout", "engineCount"],
      ["Port / single engine make", "engineMakePort"],
      ["Port / single engine model", "engineModelPort"],
      ["Port / single engine HP", "engineHpPort"],
      ["Port / single engine hours", "engineHoursPort"],
      ["Port / single engine serial number", "engineSerialPort"],
      ["Port / single flame arrester", "flameArresterPort"],
      ["Starboard engine make", "engineMakeStarboard"],
      ["Starboard engine model", "engineModelStarboard"],
      ["Starboard engine HP", "engineHpStarboard"],
      ["Starboard engine hours", "engineHoursStarboard"],
      ["Starboard engine serial number", "engineSerialStarboard"],
      ["Starboard flame arrester", "flameArresterStarboard"],
      ["Propulsion comments", "propulsionComments"]
    ],
    photos: ["propulsionPhoto"]
  },
  {
    title: "Mechanical Systems",
    fields: [
      ["Cooling system", "coolingSystem"],
      ["Ventilation system", "ventilationSystem"],
      ["Transmissions / outdrives", "transmissions"],
      ["Propellers / shafts", "propellerShafts"],
      ["Steering system", "steeringSystem"],
      ["Thrusters / trim tabs", "thrustersTrimTabs"]
    ],
    photos: ["propShaftPhoto"]
  },
  {
    title: "Fuel and Electrical Systems",
    fields: [
      ["Fuel tanks", "fuelTanks"],
      ["Fuel lines", "fuelLines"],
      ["Fuel ventilation", "fuelVentilation"],
      ["Anti-siphon / shut offs / filters", "fuelSafety"],
      ["DC system", "dcSystem"],
      ["AC system", "acSystem"]
    ],
    photos: ["fuelPhoto", "electricalPhoto"]
  },
  {
    title: "Generator, Air Conditioning and Interior",
    fields: [
      ["Generator", "generatorStatus"],
      ["Generator make", "generatorMake"],
      ["Generator model", "generatorModel"],
      ["Air conditioner", "airConditionerStatus"],
      ["Air conditioner make", "airConditionerMake"],
      ["Air conditioner model", "airConditionerModel"],
      ["Air conditioner condition", "airConditionerCondition"],
      ["Fresh water system", "freshWater"],
      ["Head and holding tanks", "headHolding"],
      ["Salon", "salon"],
      ["Galley", "galley"],
      ["Head", "head"],
      ["Aft cabin and entertainment", "aftCabin"]
    ],
    photos: ["generatorPhoto", "salonPhoto", "galleyPhoto", "headPhoto", "aftCabinPhoto"]
  },
  {
    title: "Safety Equipment",
    fields: [
      ["Gas fume detector", "gasFumeDetector"],
      ["CO detector", "coDetector"],
      ["LPG detector", "lpgDetector"],
      ["Smoke detector", "smokeDetector"],
      ["Fixed fire extinguisher", "fixedFireExtinguisher"],
      ["Re-boarding ladder", "reboardingLadder"],
      ["Fire suppression system", "fireSuppression"],
      ["Safety notes", "safetyNotes"]
    ],
    photos: ["safetyPhoto"]
  },
  {
    title: "Findings, Recommendations and Valuation",
    fields: [
      ["Safety deficiencies", "safetyDeficiencies"],
      ["Safety recommendations", "safetyRecommendations"],
      ["Other deficiencies", "otherDeficiencies"],
      ["Other recommendations", "otherRecommendations"],
      ["Surveyor notes and observations", "surveyorNotes"],
      ["Overall vessel rating", "overallRating"],
      ["Fair market value", "fairMarketValue"],
      ["Estimated replacement value", "replacementValue"],
      ["Conclusion date", "conclusionDate"]
    ]
  }
];

const form = document.querySelector("#surveyForm");
const report = document.querySelector("#report");
const savedState = document.querySelector("#savedState");
let photos = {};
let saveTimer = null;

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function openPhotoDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is unavailable."));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(DB_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadPhotos() {
  try {
    const db = await openPhotoDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readonly");
      const store = tx.objectStore(DB_STORE);
      const result = {};
      const request = store.openCursor();
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) {
          resolve(result);
          return;
        }
        result[cursor.key] = cursor.value;
        cursor.continue();
      };
      request.onerror = () => reject(request.error);
    });
  } catch {
    return loadJson(PHOTO_KEY, {});
  }
}

async function savePhoto(name, value) {
  photos[name] = value;
  try {
    const db = await openPhotoDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).put(value, name);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    localStorage.setItem(PHOTO_KEY, JSON.stringify(photos));
  }
}

async function saveAllPhotos(nextPhotos) {
  photos = nextPhotos;
  try {
    const db = await openPhotoDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      const store = tx.objectStore(DB_STORE);
      store.clear();
      Object.entries(photos).forEach(([name, value]) => store.put(value, name));
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    localStorage.removeItem(PHOTO_KEY);
  } catch {
    localStorage.setItem(PHOTO_KEY, JSON.stringify(photos));
  }
}

async function clearPhotos() {
  photos = {};
  localStorage.removeItem(PHOTO_KEY);
  try {
    const db = await openPhotoDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).clear();
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // The localStorage fallback was already cleared.
  }
}

function shrinkPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Image could not be opened."));
      image.onload = () => {
        const maxSide = 1600;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function setSaved(text) {
  savedState.textContent = text;
}

function valueFor(name) {
  const field = form.elements[name];
  if (!field) return "";
  if (field instanceof RadioNodeList) {
    const checked = [...field].find(item => item.checked);
    return checked ? checked.value : "";
  }
  if (field.type === "checkbox") return field.checked ? "Yes" : "No";
  return field.value || "";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function collectData() {
  const data = {};
  for (const field of form.elements) {
    if (!field.name) continue;
    if (field.type === "radio") {
      if (field.checked) data[field.name] = field.value;
    } else if (field.type === "checkbox") {
      data[field.name] = field.checked;
    } else if (field.type !== "file") {
      data[field.name] = field.value;
    }
  }
  return data;
}

function applyData(data) {
  for (const field of form.elements) {
    if (!field.name || !(field.name in data)) continue;
    if (field.type === "radio") {
      field.checked = data[field.name] === field.value;
    } else if (field.type === "checkbox") {
      field.checked = Boolean(data[field.name]);
    } else if (field.type !== "file") {
      field.value = data[field.name] || "";
    }
  }
}

function saveSoon() {
  setSaved("Saving...");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(collectData()));
    setSaved("Saved");
  }, 250);
}

function photoFigure(name) {
  if (!photos[name]) return "";
  return `
    <figure>
      <img src="${photos[name]}" alt="">
      <figcaption>${escapeHtml(photoLabels[name] || "Photo")}</figcaption>
    </figure>`;
}

function reportField(label, name) {
  const value = valueFor(name);
  if (!value) return "";
  return `<p class="report-field"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function renderReport() {
  const coverImage = photos.coverPhoto
    ? `<img src="${photos.coverPhoto}" alt="">`
    : `<p class="empty">No boat image added yet.</p>`;

  const cover = `
    <section class="report-cover">
      <p class="report-brand">Bow 2 Stern Surveys</p>
      <h2>${escapeHtml(valueFor("boatSummary") || "Marine Survey Report")}</h2>
      ${coverImage}
      <div class="report-meta">
        ${reportField("Prepared for", "preparedFor")}
        ${reportField("Inspection date", "inspectionDate")}
        ${reportField("Report number", "reportNumber")}
        ${reportField("Place of survey", "placeOfSurvey")}
      </div>
      <p>info@bow2sternsurveys.com | www.bow2sternsurveys.com | 416-788-6281</p>
    </section>`;

  const sectionBlocks = reportSections.map(section => {
    const fields = section.fields.map(([label, name]) => reportField(label, name)).join("");
    const photoHtml = (section.photos || []).map(photoFigure).join("");
    if (!fields && !photoHtml) return "";
    return `
      <section class="report-section">
        <h3>${escapeHtml(section.title)}</h3>
        ${fields || '<p class="empty">No entries yet.</p>'}
        ${photoHtml ? `<div class="report-photos">${photoHtml}</div>` : ""}
      </section>`;
  });
  sectionBlocks.splice(1, 0, moistureReportBlock());
  const body = sectionBlocks.join("");

  report.innerHTML = cover + body;
}

function syncMoistureVisibility() {
  const checked = form.querySelector('input[name="vesselType"]:checked');
  const vessel = checked ? checked.value : "Powerboat";
  document.querySelectorAll(".moisture-diagram").forEach(diagram => {
    diagram.hidden = diagram.dataset.vesselDiagram !== vessel;
  });
}

function setupMoisture() {
  document.querySelectorAll(".moisture-diagram").forEach(diagram => {
    const vessel = diagram.dataset.vesselDiagram;
    const points = moisturePoints[vessel] || [];
    points.forEach((point, index) => {
      const input = document.createElement("input");
      input.type = "text";
      input.inputMode = "decimal";
      input.name = `moisture${vessel}${String(index + 1).padStart(2, "0")}`;
      input.className = "moisture-input";
      input.style.left = `${point.x}%`;
      input.style.top = `${point.y}%`;
      input.style.width = `${point.w}%`;
      input.style.height = `${point.h}%`;
      input.setAttribute("aria-label", `${vessel} moisture reading ${index + 1}`);
      diagram.append(input);
    });
  });
  form.querySelectorAll('input[name="vesselType"]').forEach(radio => {
    radio.addEventListener("change", syncMoistureVisibility);
  });
  syncMoistureVisibility();
}

function moistureReportBlock() {
  const checked = form.querySelector('input[name="vesselType"]:checked');
  const vessel = checked ? checked.value : "Powerboat";
  const points = moisturePoints[vessel] || [];
  const src = vessel === "Sailboat" ? "moisture-sailboat.png" : "moisture-powerboat.png";
  const overlays = points.map((point, index) => {
    const name = `moisture${vessel}${String(index + 1).padStart(2, "0")}`;
    const value = valueFor(name);
    if (!value) return "";
    const style = `left:${point.x}%;top:${point.y}%;width:${point.w}%;height:${point.h}%`;
    return `<span class="report-moisture-value" style="${style}">${escapeHtml(value)}</span>`;
  }).join("");
  const notes = reportField("Moisture notes", "moistureNotes");
  return `
    <section class="report-section">
      <h3>Moisture (${escapeHtml(vessel)})</h3>
      <div class="report-moisture-diagram" data-vessel-diagram="${vessel}">
        <img src="${src}" alt="${escapeHtml(vessel)} moisture reading chart">
        ${overlays}
      </div>
      ${notes || '<p class="empty">No moisture notes yet.</p>'}
    </section>`;
}

function setupNavigation() {
  const nav = document.querySelector(".section-nav");
  nav.innerHTML = sections.map(([id, label]) => `<a href="#${id}" data-target="${id}">${label}</a>`).join("");
  for (const panel of document.querySelectorAll(".panel")) {
    panel.id = panel.dataset.section;
  }

  const links = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => link.classList.toggle("active", link.dataset.target === visible.target.id));
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .2, .5, 1] });

  document.querySelectorAll(".panel").forEach(panel => observer.observe(panel));
}

function setupPhotos() {
  document.querySelectorAll(".photo-slot").forEach(slot => {
    const name = slot.dataset.photo;
    const input = slot.querySelector("input");
    const img = slot.querySelector("img");

    if (photos[name]) {
      img.src = photos[name];
      slot.classList.add("has-photo");
    }

    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      shrinkPhoto(file).then(async imageData => {
        await savePhoto(name, imageData);
        img.src = photos[name];
        slot.classList.add("has-photo");
        renderReport();
        saveSoon();
      }).catch(() => alert("That photo could not be added. Please try another photo."));
    });
  });
}

function download(filename, text) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
}

function setupActions() {
  form.addEventListener("input", () => {
    renderReport();
    saveSoon();
  });
  form.addEventListener("change", () => {
    renderReport();
    saveSoon();
  });

  document.querySelector("#printReport").addEventListener("click", () => {
    renderReport();
    window.print();
  });

  document.querySelector("#exportJson").addEventListener("click", () => {
    const backup = { data: collectData(), photos, savedAt: new Date().toISOString() };
    const client = valueFor("preparedFor") || "survey";
    const safeClient = client.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "survey";
    download(`bow2stern-${safeClient}-backup.json`, JSON.stringify(backup, null, 2));
  });

  document.querySelector("#importJson").addEventListener("change", event => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const backup = JSON.parse(reader.result);
        applyData(backup.data || {});
        syncMoistureVisibility();
        await saveAllPhotos(backup.photos || {});
        document.querySelectorAll(".photo-slot").forEach(slot => {
          const name = slot.dataset.photo;
          const img = slot.querySelector("img");
          if (photos[name]) {
            img.src = photos[name];
            slot.classList.add("has-photo");
          } else {
            img.removeAttribute("src");
            slot.classList.remove("has-photo");
          }
        });
        renderReport();
        saveSoon();
      } catch {
        alert("That backup file could not be opened.");
      }
    };
    reader.readAsText(file);
  });

  document.querySelector("#clearForm").addEventListener("click", async () => {
    const ok = confirm("Start a new blank survey and clear this one from this device? Use Save Work first if you want to keep it.");
    if (!ok) return;
    localStorage.removeItem(STORE_KEY);
    await clearPhotos();
    form.reset();
    syncMoistureVisibility();
    document.querySelectorAll(".photo-slot").forEach(slot => {
      slot.classList.remove("has-photo");
      slot.querySelector("img").removeAttribute("src");
    });
    renderReport();
    setSaved("Cleared");
  });
}

async function init() {
  photos = await loadPhotos();
  setupNavigation();
  setupMoisture();
  applyData(loadJson(STORE_KEY, {}));
  syncMoistureVisibility();
  setupPhotos();
  setupActions();
  renderReport();
}

init();
