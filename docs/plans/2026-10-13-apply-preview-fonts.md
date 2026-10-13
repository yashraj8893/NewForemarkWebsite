# Apply Preview Repository Fonts Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply the exact font family configuration from `amey-bauchkar/foremark-preview` to the current codebase without altering any other styles, layouts, or functionality.

**Architecture:** Tailwind CSS v4 relies on the `@theme` block defined in `src/index.css` for design tokens and CSS variables. Updating `--font-display` to `"Syne", -apple-system, BlinkMacSystemFont, sans-serif;` matches the preview repository's typography token hierarchy and applies the Syne font family to all headings (`h1` through `h6`) and `font-display` utility classes.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4, Google Fonts (Geist, Syne, JetBrains Mono).

---

### Task 1: Update Font Family Token in `src/index.css`

**Files:**
- Modify: `c:/Users/SEBIN/Desktop/foremark4/src/index.css:20-23`
- Test: Build verification (`npm run build`) and visual render inspection

**Step 1: Verify current font configuration and failing condition**

Check that `src/index.css` currently defines:
```css
  --font-geist: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
```
whereas `foremark-preview` defines:
```css
  --font-geist: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Syne", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
```

**Step 2: Apply the font token change**

In `c:/Users/SEBIN/Desktop/foremark4/src/index.css`:
```css
<<<<
  --font-geist: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
====
  --font-geist: "Geist", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Syne", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
>>>>
```

**Step 3: Run build to verify TypeScript and Vite compilation**

Run: `npm run build`
Expected: `✓ built in ...s` with zero errors.

**Step 4: Verify font rendering via browser test**

Run Playwright script to verify computed `font-family` on `h1` elements across pages:
Expected: `Syne, -apple-system, BlinkMacSystemFont, sans-serif`.

**Step 5: Commit**

```bash
git add src/index.css
git commit -m "style: apply Syne display font from foremark-preview"
```
