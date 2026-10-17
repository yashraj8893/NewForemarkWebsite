# Implementation Plan: Isometric Architecture Stack for Business Automation "What We Build & Deliver"

## Goal
Redesign the "What We Build & Deliver" section of the Business Automation service detail page (`/services/business-automation`). Replace the static cards with an interactive 3D isometric layered architecture stack inspired by the user's reference diagram, rendered strictly in Foremark's palette (Foremark Orange `#ea7008`, Crisp White `#ffffff`, Obsidian Black `#121110`), with a 100% transparent background matching the website's pure white `#ffffff`, and content sourced directly from the website's Business Automation deliverables.

## Architecture & Visual Mapping (5 Tiers)
1. **Tier 1 (Top) // Operations & ChatOps**:
   - Title: **Slack & Teams Operations Bots**
   - Content: Interactive chat bots for team approvals, daily metric summaries, and automated alert triage.
   - 3D Isometric Plane: Crisp white surface with orange accents, chat bubbles, interactive approval buttons, and notification telemetry.
2. **Tier 2 // Cognitive Intelligence**:
   - Title: **AI Document Processing & Extraction**
   - Content: Extraction of key data from vendor PDFs, receipts, and client intake forms directly into your database.
   - 3D Isometric Plane: Radiant Foremark Orange plane with OCR scanning beams, document hierarchy, and AI neural node connectors.
3. **Tier 3 // Revenue & CRM Pipeline**:
   - Title: **CRM & Lead Pipeline Automation**
   - Content: Instant lead capture, AI qualification, routing to sales reps, and automated calendar scheduling.
   - 3D Isometric Plane: Obsidian Black plane with glowing orange pipeline funnels, lead routing trees, and calendar booking triggers.
4. **Tier 4 // Financial & Transactions**:
   - Title: **Billing & Invoicing Workflows**
   - Content: Automated Stripe, Razorpay, or QuickBooks invoice generation, reconciliation, and payment reminders.
   - 3D Isometric Plane: Champagne white plane with payment cards, invoice reconciliation badges, currency tokens, and security locks.
5. **Tier 5 (Base) // Infrastructure & Sync**:
   - Title: **Cross-Platform Sync & Webhook Microservices**
   - Content: Two-way data synchronizations between ERPs, databases, spreadsheets, and lightweight Node.js/Python microservices.
   - 3D Isometric Plane: Foundation plane with dotted guide brackets, dual database cylinders, webhook routing buses, and failover queues.

## Component Specifications (`AutomationDeliverablesStack.tsx`)
- **Left Column**: Clean typographic stack with layer indicators (`LAYER 01` - `LAYER 05`), titles, descriptions, deliverable badges, and horizontal connector lines with glowing pointer dots.
- **Right Column**: Mathematically exact SVG isometric layered rhombus stack with hover elevation (`y: -8px`), glowing orange conduit beams, and detailed technical line illustrations.
- **Interactivity**: Hovering over any layer on the left or plane on the right highlights the corresponding pair with glowing orange accents, expanding feature pills.
- **Mobile Responsive**: On mobile, layers stack cleanly with an interactive tab/card explorer.
- **Zero background / 100% transparent**: Directly over `#ffffff` website background.

## Integration in `ServiceDetail.tsx`
- Conditionally render `<AutomationDeliverablesStack />` when `activeSlug === 'business-automation'`.
- Verify compilation with `npm run build`.
