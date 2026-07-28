# Interactive Tools & Calculators Registry

This document serves as the authoritative registry for all reusable Next.js interactive Client Components (`"use client"`) built for **Pantry & Pan** (`pantryandpan.com`). 

Whenever authoring, updating, or expanding editorial guides, AI agents **MUST** inspect this registry first to reuse existing tools and match them to relevant guide contexts.

---

## Tool 1: Pantry Storage & Container Capacity Matcher (`PantryStapleCalculator`)

* **File Location**: `file:///d:/_Career/Workflow/Affiliate/components/tools/PantryStapleCalculator.tsx`
* **Import Path**: `@/components/tools/PantryStapleCalculator`
* **Description**: Density-based dry staple volume calculator (Flour, Sugar, Rice, Oats, Coffee Beans). Converts weight (`lbs` or `kg`) into volume (`Liters` and `Quarts`), calculates portion/meal yields, and dynamically matches the ideal non-toxic storage product with Amazon affiliate button.
* **Supported Props**:
  * `defaultStaple?: "rice" | "flour" | "sugar" | "oats" | "coffee"` (Default: `"rice"`)
  * `initialWeight?: number` (Default: staple default, e.g., 10 for rice, 5 for flour)
* **Usage Example**:
  ```tsx
  import { PantryStapleCalculator } from "@/components/tools/PantryStapleCalculator";

  // Default focus on Rice
  <PantryStapleCalculator />

  // Custom focus for Flour / Baking guides
  <PantryStapleCalculator defaultStaple="flour" initialWeight={5} />

  // Custom focus for Coffee / Morning Rituals guides
  <PantryStapleCalculator defaultStaple="coffee" initialWeight={2} />
  ```
* **Best Target Guides**:
  * `aesthetic-pantry-organization-guide`
  * `plastic-free-sunday-meal-prep-workflow`
  * `space-saving-minimalist-baker`
  * Any pantry storage, grain storage, or bulk ingredient guides.

---

## Tool 2: Heirloom Pan Selector & Interactive Suggestions (`HeirloomPanQuiz`)

* **File Location**: `file:///d:/_Career/Workflow/Affiliate/components/tools/HeirloomPanQuiz.tsx`
* **Import Path**: `@/components/tools/HeirloomPanQuiz`
* **Description**: Interactive 3-question decision framework matching home chefs to Raw Cast Iron, Carbon Steel, or Enameled Cast Iron based on primary cooking style, pan weight tolerance, and cleaning preferences.
* **Usage Example**:
  ```tsx
  import { HeirloomPanQuiz } from "@/components/tools/HeirloomPanQuiz";

  <HeirloomPanQuiz />
  ```
* **Best Target Guides**:
  * `cast-iron-vs-carbon-steel-vs-enameled`
  * `wok-cooking-toxin-free`
  * Any cookware material comparison or pan selection guides.

---

## Tool 3: "Is My Pan Safe?" Non-Toxic Marketing Decoder & Safety Audit (`NonToxicPanDecoder`)

* **File Location**: `file:///d:/_Career/Workflow/Affiliate/components/tools/NonToxicPanDecoder.tsx`
* **Import Path**: `@/components/tools/NonToxicPanDecoder`
* **Description**: Interactive cookware safety audit tool that decodes nonstick marketing labels ("Granite", "Diamond", "PTFE", "Sol-Gel Ceramic"), assigns a Safety Grade (A+ to F), checks chemical off-gassing temperature thresholds, and matches the ideal non-toxic pan swap.
* **Usage Example**:
  ```tsx
  import { NonToxicPanDecoder } from "@/components/tools/NonToxicPanDecoder";

  <NonToxicPanDecoder />
  ```
* **Best Target Guides**:
  * `ceramic-granite-stone-cookware-explained`
  * `non-toxic-kitchen-blueprint`
  * Any non-toxic cookware safety audit or material breakdown guides.

---

## Tool 4: Air Fryer Oil Spray vs. Chemical Aerosol Savings Calculator (`OilSprayerCalculator`)

* **File Location**: `file:///d:/_Career/Workflow/Affiliate/components/tools/OilSprayerCalculator.tsx`
* **Import Path**: `@/components/tools/OilSprayerCalculator`
* **Description**: Interactive cost savings and waste reduction calculator comparing aerosol spray cans against a 2-in-1 refillable glass oil mister. Calculates annual dollar savings, aerosol cans eliminated, and propellants avoided.
* **Usage Example**:
  ```tsx
  import { OilSprayerCalculator } from "@/components/tools/OilSprayerCalculator";

  <OilSprayerCalculator />
  ```
* **Best Target Guides**:
  * `multifunctional-kitchen-gadgets-guide`
  * Any air fryer, non-toxic prep, or chemical swap guides.

---

## Tool 5: Kitchen Cabinet Volume & Space Savings Calculator (`SpaceSavingCalculator`)

* **File Location**: `file:///d:/_Career/Workflow/Affiliate/components/tools/SpaceSavingCalculator.tsx`
* **Import Path**: `@/components/tools/SpaceSavingCalculator`
* **Description**: Interactive cabinet volume and stack height calculator comparing traditional fixed-handle cookware sets against stackable click-off handle sets. Calculates percentage of cabinet volume saved (up to 70%) and nested stack height.
* **Usage Example**:
  ```tsx
  import { SpaceSavingCalculator } from "@/components/tools/SpaceSavingCalculator";

  <SpaceSavingCalculator />
  ```
* **Best Target Guides**:
  * `space-saving-cookware-guide`
  * Any small kitchen, RV, apartment, or modular cookware guides.

---

## Instructions for AI Agents & Developers

1. **Check Before Creating New Tools**: Before writing new interactive widgets or calculators, consult `directives/interactive_tools_registry.md` to verify if an existing tool can be reused or extended with new props.
2. **Component Location**: All interactive client tools live inside `d:/_Career/Workflow/Affiliate/components/tools/`.
3. **Register New Tools**: When a new interactive tool or calculator is created, immediately log its name, location, props, and target guide contexts in this directive.
4. **Style Constraints**: All tool components must adhere to `directives/brand_identity.md` styling (HSL color tokens, `SageBadge`, soft shadows, rounded-3xl cards) and **MUST NOT contain em dashes (`—`)** anywhere in text or UI labels.
