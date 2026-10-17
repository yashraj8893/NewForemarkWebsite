# Business Automation Server Rack Tech Stack Visual Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the static technology cards on the Business Automation service detail page (`/services/business-automation`) with a high-impact, interactive visual component (`TechStackServerRackVisual`) featuring a datacenter server rack / blade infrastructure center surrounded by 16 floating technology badges, matching the aesthetic fidelity of the laptop visual in Website & Software Development.

**Architecture:** Create `src/components/TechStackServerRackVisual.tsx` following the proven interactive pattern of `TechStackLaptopVisual.tsx`. It will render a central 42U datacenter server rack chassis with multiple server blades, pulsing telemetry OLED screens, activity LEDs, cooling vents, and animated data conduits. Surrounding the rack will be 16 automation technology badges (n8n, Temporal, Make, Zapier, Python, Node.js, BullMQ, FastAPI, OpenAI, Claude, LangChain, Salesforce, HubSpot, Stripe, Slack, Webhooks) with bespoke brand SVGs in Foremark's palette, interactive category filtering, and floating micro-animations. Update `src/pages/ServiceDetail.tsx` to conditionally render this component when `activeSlug === 'business-automation'`.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4, Lucide React, Framer Motion, Vanilla CSS keyframes (already defined in `index.css`).

---

### Task 1: Create `TechStackServerRackVisual.tsx` Component

**Files:**
- Create: `src/components/TechStackServerRackVisual.tsx`

**Step 1: Define Technology Stack Items and Custom SVGs**
- Create 16 tech items matching `servicesData.ts` for Business Automation:
  - **Category: 'engine'**: `n8n` (Self-Hosted Workflow Engine), `Temporal.io` (Durable Execution Orchestrator), `Make.com` (Multi-Step Scenario Automation), `Zapier` (Ecosystem Webhook Trigger)
  - **Category: 'code'**: `Node.js / TS` (High-Throughput Event Runner), `Python` (Data Transforms & Scripting), `BullMQ` (Redis Job Queues & Retries), `FastAPI` (Sub-millisecond Webhook Ingestion)
  - **Category: 'ai'**: `OpenAI API` (GPT-4o Reasoning & Classification), `Claude API` (Anthropic Document Extraction), `LangChain` (Document RAG & Agent Tools), `Tesseract OCR` (Document Text Digitization)
  - **Category: 'integration'**: `HubSpot` (CRM Pipeline Automation), `Salesforce` (Enterprise Record Synchronization), `Stripe` (Automated Invoicing & Webhooks), `Slack` (Operations Bots & Real-Time Alerts)
- Implement custom SVGs strictly in Foremark's brand palette: Foremark Orange (`#ea7008`), Obsidian Black (`#121110`), and Crisp White (`#ffffff`).
- Define exact 2D coordinates (`posDesktop`, `posMobile`) and floating animation classes (`animate-tech-float-1` to `6`) for symmetrical arrangement around the central rack.

**Step 2: Construct the Server Rack / Datacenter Infrastructure Centerpiece**
- **42U Server Chassis Frame**:
  - Outer enclosure with dark metallic gradient (`bg-gradient-to-b from-[#1c1a17] via-[#121110] to-[#0a0805]`), precision rack rail U-notches (`U42` through `U01`), metallic mounting bolt accents, and amber bevel highlights.
  - Top ventilation module with dual rotating exhaust cooling fans and ambient orange LED backlight.
- **Blade 1 (Top): Automation Orchestrator Blade (n8n & Temporal)**:
  - Miniature OLED terminal monitor with live telemetry:
    - Line 1: `[n8n::ORCHESTRATOR] ACTIVE WORKFLOWS: 142`
    - Line 2: `[TEMPORAL] STATE: RUNNING | LATENCY: 2.4ms`
  - Blinking LED status cluster (amber, emerald green, cool white).
  - Power rocker switch and activity sensor dot.
- **Blade 2: Distributed Event & Queue Matrix Blade (BullMQ & Redis)**:
  - Real-time LED VU-meter throughput bar with pulsing energy gradient.
  - 8-port high-speed optical fiber transceiver cluster with flashing `TX/RX` traffic indicators.
  - Laser sweep scanline running horizontally across the blade (`animate-tech-scan`).
- **Blade 3: Neural & Document Inference Engine (AI & OCR Unit)**:
  - Real-time processing readout: `OCR: 99.8% ACCURACY | TOKENS: 24.6k/s`.
  - Precision heatsink ventilation grills with glowing interior orange dissipation.
  - Hexagonal neural processor badge with ambient backlight.
- **Blade 4 (Bottom): Redundant Power & Enterprise Gateway Bus**:
  - Dual hot-swappable enterprise PSU handles with active status indicators (`PSU-A: ONLINE`, `PSU-B: STANDBY`).
  - Laser-etched Foremark Datacenter branding badge.
- **Cable Management & Datacenter Floor Ambient Reflection**:
  - Twin vertical cable raceways with illuminated orange data conduits running alongside the chassis.
  - Soft floor drop-shadow and ambient orange underglow on the surface.

**Step 3: Background Rotating Engineering Circles and Filter Pills**
- Ambient orange radial halos (`blur-[100px]`).
- Dual concentric rotating circuit nodes (`animate-tech-spin-slow` and `animate-tech-spin-reverse`) matching the design system of `TechStackLaptopVisual`.
- Category filter buttons:
  - `All Engines & Stacks (16)`
  - `Automation Engines`
  - `Code & Queues`
  - `AI & Document Parsing`
  - `Enterprise Integrations`
- Smooth opacity/scale filtering transitions when clicking pills.

---

### Task 2: Integrate Component in `src/pages/ServiceDetail.tsx`

**Files:**
- Modify: `src/pages/ServiceDetail.tsx:10-25, 270-320`

**Step 1: Import `TechStackServerRackVisual` in `ServiceDetail.tsx`**
```tsx
import { TechStackServerRackVisual } from '../components/TechStackServerRackVisual';
```

**Step 2: Update conditional rendering in the Technology Stack section**
```tsx
{/* ─── Technology Stack ───────────────────────────────── */}
{activeSlug === 'website-software-development' ? (
    <TechStackLaptopVisual />
) : activeSlug === 'business-automation' ? (
    <TechStackServerRackVisual />
) : (
    <section className="py-20 sm:py-28 border-t border-[#ebe5df]">
    ...
```

---

### Task 3: Build Verification & Visual Quality Testing

**Files:**
- Test: `npm run build`
- Browser: Navigate to `http://localhost:5173/services/business-automation` and verify:
  1. Header renders with extra bold title ("Right Technology Stacks For Business Automation").
  2. Server rack visual renders centered, sharp, and correctly proportioned on desktop and mobile.
  3. All 16 floating automation badges float smoothly with Foremark Orange SVGs.
  4. Clicking category pills dims non-matching badges and highlights selected ones.
  5. Telemetry display, LEDs, and laser beam animate without lag.
  6. Website & Software Development page (`/services/website-software-development`) continues rendering its laptop visual properly.

---

### Task 4: Git Commit

**Step 1: Check status and stage files**
```powershell
git add src/components/TechStackServerRackVisual.tsx src/pages/ServiceDetail.tsx
```

**Step 2: Commit changes**
```powershell
git commit -m "feat(services): add datacenter server rack tech stack visual for business automation"
```
