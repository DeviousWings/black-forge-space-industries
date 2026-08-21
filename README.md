# black-forge-space-industries

# BLACK FORGE // SPACE INDUSTRIES
*Tactical Hardware & SLA Fabrication Hub*

> **Operational Status:** Active Home-Workshop Production Node  
> **Live Site:** [https://black-forge-space-industries.vercel.app](https://black-forge-space-industries.vercel.app) *(Update with your exact production URL)*

---

## 🛠️ Tech Stack & Architecture
* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS (Custom Monospace / Industrial Dark Theme)
* **Deployment Pipeline:** GitHub repository connected to Vercel (with `npm install --legacy-peer-deps` build command override)
* **Routing State:** Component-driven tab switching managed in `src/App.jsx`

---

## 📂 Project Directory Structure
```text
src/
├── components/          # Reusable layout shells
│   ├── Navbar.jsx       # Top navigation header & telemetry indicator
│   └── Footer.jsx       # Global footer & sister enterprise links
├── pages/               # Core application views
│   ├── Home.jsx         # Hero section & core SLA/simulation value propositions
│   ├── Catalog.jsx      # Hardware manifest (BF-ID-01, BF-DATA-01, etc.) & custom prototyping services
│   └── About.jsx        # Home-workshop reality ethos + interactive BSI Lore & Clearance Database
└── App.jsx              # Main structural router and view coordinator
```

## ⚙️ Hardware & Workshop Specs
* **Printer:** Anycubic Photon Mono (SLA Resin)
* **Capabilities:** High-detail geometric prototyping, serialized nameplates, desktop simulation gear, and ruggedized component enclosures.
* **Operational Alignment:** Sister enterprise collaboration with Steele Tech infrastructure.

---

## 🚀 Quick Reference / Maintenance
* **Local Development:** Run `npm run dev` in your local terminal.
* **Vercel Build Override:** If dependencies throw peer resolution errors on Vercel, ensure the build setting uses `npm install --legacy-peer-deps`.
* **Adding New Pages:** 
  * Create the page inside `src/pages/YourPage.jsx`.
  * Import it into `src/App.jsx`.
  * Map a state tab check inside the `<main>` router block.
