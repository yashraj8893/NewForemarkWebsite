# Web Servers & Hosting "How We Deliver" Depth Carousel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Revamp the "How We Deliver" section on the Web Servers & Hosting service detail page (`/services/cloud-hosting`) by integrating the 3D `<DepthCarousel />` component from React Bits with bespoke hosting process steps, high-fidelity infrastructure imagery, synchronized step telemetry, and interactive controls.

**Architecture:** 
1. Create `src/components/DepthCarousel.tsx` and `src/components/DepthCarousel.css` implementing the React Bits 3D Depth Carousel with GSAP-powered depth rail mechanics, perspective warping, drag gestures, wheel scrolling, resize scaling, and keyboard controls.
2. Build `src/components/HostingProcessDepthCarousel.tsx` encapsulating the "How We Deliver" process for Web Servers & Hosting with 5 enriched delivery stages (Audit, Topology, Staging, Cutover, Patching), pairing high-resolution hosting infrastructure assets from `/hosting/` with glassmorphic depth cards and an interactive active-step telemetry spotlight.
3. Integrate the new component conditionally into `src/pages/ServiceDetail.tsx` when `activeSlug === 'cloud-hosting'`, replacing the generic static card grid.

**Tech Stack:** React 19, TypeScript, GSAP 3.15, Tailwind CSS v4, Lucide React, Framer Motion, Vite 6.

---

### Task 1: Create React Bits `DepthCarousel.css`

**Files:**
- Create: `src/components/DepthCarousel.css`

**Step 1: Write the 3D Carousel CSS**
- Implement exact perspective container, 3D stage (`transform-style: preserve-3d`), card depth rails, glassmorphic navigation arrows, and circular dot indicators.
- Include custom styling for card content overlays (gradient scrims, step chips, titles, descriptions) and responsive adjustments for mobile viewports.

**Step 2: Verification**
- Verify file exists and contains valid CSS syntax without malformed selectors.

---

### Task 2: Create React Bits `DepthCarousel.tsx` Component

**Files:**
- Create: `src/components/DepthCarousel.tsx`

**Step 1: Write the DepthCarousel TypeScript Component**
- Implement typed props:
  - `items`: `DepthCarouselItem[]`
  - `cardWidth`: number (default: 340)
  - `cardHeight`: number (default: 460)
  - `radius`: number (default: 20)
  - `tint`: string (default: "#05060a")
  - `depth`: number (default: 220)
  - `spread`: number (default: 90)
  - `tilt`: number (default: 22)
  - `tiltDirection`: "left" | "right" (default: "right")
  - `perspective`: number (default: 1400)
  - `visibleCards`: number (default: 4)
  - `falloff`: number (default: 0.2)
  - `blur`: number (default: 6)
  - `duration`: number (default: 700)
  - `ease`: string (default: "power3.out")
  - `autoplay`: boolean (default: false)
  - `autoplayDelay`: number (default: 3600)
  - `loop`: boolean (default: true)
  - `showControls`: boolean (default: true)
  - `showIndicators`: boolean (default: true)
  - `onChange`: `(index: number, item: any) => void`
  - `renderCard`: `(item: any, index: number, isActive: boolean) => React.ReactNode`
- Include GSAP 3D depth tweening, ResizeObserver container scaling, pointer drag velocity tracking, wheel step scrubbing, and keyboard arrow accessibility.
- Support rendering rich card contents when provided via `renderCard` or item content, while falling back gracefully to standard image cards.

**Step 2: Verification**
- Run `npx tsc --noEmit` to verify type safety and interface soundness.

---

### Task 3: Create `HostingProcessDepthCarousel.tsx` Process Section

**Files:**
- Create: `src/components/HostingProcessDepthCarousel.tsx`

**Step 1: Define the 5 Hosting Delivery Stages**
- **Stage 01: Infrastructure Audit & Sizing**
  - Image: `/hosting/servers.jpg`
  - Badge: `01 · Assessment`
  - Title: `Infrastructure Audit & Sizing`
  - Summary: `We analyze your workload demands, traffic patterns, security requirements, and budget constraints.`
  - Milestones: `Workload Profiling`, `Throughput Analysis`, `Cost Optimization Blueprint`
  - Metric: `< 48 hrs` (Audit turnaround)
- **Stage 02: Topology & Security Architecture**
  - Image: `/hosting/iac.jpg`
  - Badge: `02 · Architecture`
  - Title: `Topology & Security Architecture`
  - Summary: `Designing VPCs, security groups, subnets, firewall rules, and automated deployment pipelines.`
  - Milestones: `Terraform IaC`, `Multi-AZ Subnet Isolation`, `Zero-Trust Edge WAF`
  - Metric: `100% IaC` (Declarative infra)
- **Stage 03: Staging Provisioning & Dry Run**
  - Image: `/hosting/database.jpg`
  - Badge: `03 · Staging Rehearsal`
  - Title: `Staging Provisioning & Dry Run`
  - Summary: `Deploying the staging cluster with automated database seeding, SSL certificates, and rollback tests.`
  - Milestones: `Synthetic Load Spikes`, `Data Replication Test`, `Automated Rollback Verification`
  - Metric: `0 Errors` (Staging gate)
- **Stage 04: Zero-Downtime Production Cutover**
  - Image: `/hosting/cicd.jpg`
  - Badge: `04 · Production Cutover`
  - Title: `Zero-Downtime Production Cutover`
  - Summary: `Executing DNS migration, origin locking, and live health verification with zero disruption to active users.`
  - Milestones: `DNS TTL Warm-Up`, `Blue/Green Traffic Shift`, `Instant Fallback Switch`
  - Metric: `99.999%` (Cutover uptime)
- **Stage 05: Ongoing Management & Patching**
  - Image: `/hosting/observability.jpg`
  - Badge: `05 · Day-2 Reliability`
  - Title: `Ongoing Management & Patching`
  - Summary: `Continuous operating system security updates, backup verification, and 24/7 health monitoring.`
  - Milestones: `Kernel Hotpatching`, `Continuous Snapshot Restores`, `15-Min Incident SLA`
  - Metric: `24/7/365` (Proactive monitoring)

**Step 2: Construct the Section Layout**
- Section header with Foremark gold uppercase label (`PROCESS`), bold headline (`How We Deliver`), and lifecycle description.
- Stage quick-jump selector bar allowing one-click direct navigation to any phase.
- Interactive `<DepthCarousel />` viewport with customized card renderers displaying step tags, titles, glassmorphic gradient overlays, and milestone pills.
- Synchronized telemetry panel below / beside the carousel showing active phase details, milestone checklist, SLA guarantee badge, and previous/next controls.

**Step 3: Verification**
- Run `npx tsc --noEmit` to verify all imports, types, and JSX syntax.

---

### Task 4: Connect into `ServiceDetail.tsx`

**Files:**
- Modify: `src/pages/ServiceDetail.tsx`

**Step 1: Import and Wire Up Component**
- Import `HostingProcessDepthCarousel` from `../components/HostingProcessDepthCarousel`.
- In the `Delivery Process` section conditional rendering:
  - If `activeSlug === 'website-software-development'` -> `<CinematicProcessWalkthrough />`
  - Else if `activeSlug === 'cloud-hosting'` -> `<HostingProcessDepthCarousel />`
  - Else -> fallback default static process grid.

**Step 2: Verification**
- Run `npm run build` to verify clean build without bundle warnings or runtime errors.

---

### Task 5: End-to-End Verification

**Step 1: Build Test**
- Run: `npm run build`
- Expected: Build succeeds in ~5 seconds with exit code 0.

**Step 2: Interaction & Responsive Checks**
- Verify 3D carousel renders smoothly with depth, perspective, tilt, and spread.
- Verify drag gesture and mouse wheel advance cards smoothly.
- Verify arrow controls and dot indicators navigate correctly.
- Verify clicking on any card focuses it.
- Verify quick-jump stage pills focus the corresponding step.
- Verify responsive scaling on tablet and mobile viewports.

