# Design System Specification: Kinetic Precision

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Pulse"**
This design system moves away from the static, boxy nature of traditional logistics platforms. To capture the energy of a last-mile delivery service, we employ a philosophy of **Kinetic Precision**. This means the UI should feel like it’s in motion—not through chaotic animation, but through intentional asymmetry, weighted typography, and layered depth.

We break the "template" look by treating the screen as a high-end editorial canvas. By utilizing oversized display type and a "layer-first" approach to containers, we create an experience that feels premium, authoritative, and impossibly fast.

---

## 2. Color Philosophy
Our palette balances the high-energy "Warning Yellow" of the street with a deep, sophisticated "Trust Blue."

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define boundaries, designers must use background color shifts. For example, a `surface-container-low` card should sit on a `surface` background. If you feel the need for a line, you haven't used your tonal tiers effectively.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. 
*   **Base Layer:** `surface` (#fff5e5) - Warm, paper-like foundation.
*   **Secondary Sections:** `surface-container-low` (#ffefcd).
*   **Interactive Cards:** `surface-container` (#ffe6a7).
*   **High-Priority Floating Elements:** `surface-container-highest` (#fbda80).

### The "Glass & Gradient" Rule
To inject "soul" into the digital experience, use Glassmorphism for floating action buttons or navigation bars. Apply `surface-container-highest` at 80% opacity with a `24px` backdrop blur. 
*   **Signature Gradient:** For primary CTAs, use a linear gradient from `primary` (#785500) to `primary-container` (#feb700) at a 135-degree angle. This adds a metallic, high-speed sheen that flat colors lack.

---

## 3. Typography: The Editorial Edge
We use **Plus Jakarta Sans** for headlines to provide a modern, slightly geometric character, paired with **Inter** for industrial-grade readability.

*   **Display (L/M/S):** Plus Jakarta Sans. Bold (700). Use these for hero stats (e.g., "ETA: 4 MINS"). Use `tight` letter spacing (-0.02em) to create a "heavy" visual impact.
*   **Headline (L/M/S):** Plus Jakarta Sans. Semi-Bold (600). Used for page titles.
*   **Title (L/M/S):** Inter. Medium (500). Used for card headers.
*   **Body (L/M/S):** Inter. Regular (400). All body text uses `on-surface-variant` (#6c5a22) to reduce harsh contrast and improve long-form legibility.
*   **Label (M/S):** Inter. Bold (700). Uppercase. Used for micro-copy like "OUT FOR DELIVERY."

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Avoid shadows for static elements. Instead, place a `surface-container-lowest` (#ffffff) card on a `surface-dim` (#f3d173) background to create a natural "lift."
*   **Ambient Shadows:** For "Active" states or floating modals, use a shadow with a 32px blur, 0px offset, and 6% opacity using the `on-surface` color (#3b2d00). This mimics natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#c3ab6b) at **15% opacity**. A solid 1px border is a failure of the design language.

---

## 5. Components

### Buttons: The "Engine" of the UI
*   **Primary:** High-gloss gradient (`primary` to `primary-container`). `full` roundedness. No border. Text is `on-primary-fixed` (#392700).
*   **Secondary:** `secondary-container` (#c1d1fb) background. No border. Softly rounded (`md` - 0.75rem).
*   **Tertiary:** Ghost style. No background. Use `label-md` typography with a `primary` color icon.

### Cards & Lists
*   **The Rule of Flow:** Forbid divider lines. Separate list items using `16px` of vertical white space or by alternating background tones between `surface-container-low` and `surface-container`.
*   **Delivery Cards:** Use a `surface-container-highest` header area that bleeds into a `surface-container` body to indicate a change in data priority.

### Input Fields
*   **State Styling:** Use `surface-container-low` as the fill. On focus, the background shifts to `surface-container-lowest` with a `2px` "Ghost Border" of `primary`.
*   **Error State:** Use `error_container` (#f95630) for the background fill and `error` (#b02500) for the label text.

### Logistics-Specific Components
*   **The Velocity Bar:** A custom progress indicator for delivery status using a thick 8px track of `surface-variant` and a `tertiary` (#006a35) fill that glows using a subtle ambient shadow.
*   **The "Flash" Chip:** For urgent updates, use a `primary-fixed` (#feb700) chip with `label-sm` text.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., more padding on the left than the right) to create a sense of forward motion.
*   **Do** use `on-tertiary-container` for success messages to ensure they feel "Safe" yet "Modern."
*   **Do** stack `surface` tiers to create hierarchy.

### Don't:
*   **Don't** use 1px solid black or grey borders. This instantly "cheapens" the high-end editorial feel.
*   **Don't** use standard "Drop Shadows." Use Tonal Layering or Ambient Shadows.
*   **Don't** crowd the interface. If the map or delivery data feels cramped, increase the scale of your `display` typography and add more `surface` space.