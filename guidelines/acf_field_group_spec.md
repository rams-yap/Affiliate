# Headless WordPress Integration & ACF Field Group Specification

This document contains the exact Advanced Custom Fields (ACF) Field Group JSON export, REST API field mapping, data migration script, and Next.js integration strategy for Pantry & Pan (`pantryandpan.com`).

---

## 1. ACF Field Group JSON Specification

Import this JSON directly into **WordPress Admin -> Custom Fields -> Tools -> Import Field Groups** (or create matching fields via the ACF GUI/PHP register code).

```json
{
  "key": "group_pantryandpan_article",
  "title": "Article Fields (Pantry & Pan)",
  "fields": [
    {
      "key": "field_article_hero_image",
      "label": "Hero Image Path",
      "name": "hero_image",
      "type": "text",
      "instructions": "Relative path to image in GitHub public folder (e.g. /assets/hero.jpg)",
      "required": 0,
      "default_value": "/assets/about_hero_tabletop.jpg",
      "placeholder": "/assets/hero-kitchen.jpg"
    },
    {
      "key": "field_article_author_name",
      "label": "Author Name",
      "name": "author_name",
      "type": "text",
      "required": 0,
      "default_value": "Sarah Jenkins"
    },
    {
      "key": "field_article_author_initials",
      "label": "Author Initials",
      "name": "author_initials",
      "type": "text",
      "required": 0,
      "default_value": "SJ"
    },
    {
      "key": "field_article_author_role",
      "label": "Author Role",
      "name": "author_role",
      "type": "text",
      "required": 0,
      "default_value": "Founder, Pantry & Pan"
    },
    {
      "key": "field_article_read_minutes",
      "label": "Read Minutes",
      "name": "read_minutes",
      "type": "number",
      "required": 0,
      "default_value": 5
    },
    {
      "key": "field_article_related_product_ids",
      "label": "Related Product IDs",
      "name": "related_product_ids",
      "type": "textarea",
      "instructions": "Comma-separated or newline-separated product IDs matching lib/catalog.ts (e.g. caraway-12pc, greenpan-valencia)",
      "rows": 3
    },
    {
      "key": "field_article_sections",
      "label": "Article Sections",
      "name": "sections",
      "type": "repeater",
      "layout": "block",
      "button_label": "Add Section",
      "sub_fields": [
        {
          "key": "field_section_id",
          "label": "Section ID / Anchor Slug",
          "name": "id",
          "type": "text",
          "required": 1
        },
        {
          "key": "field_section_title",
          "label": "Section Title",
          "name": "title",
          "type": "text",
          "required": 1
        },
        {
          "key": "field_section_paragraphs",
          "label": "Paragraphs",
          "name": "paragraphs",
          "type": "textarea",
          "instructions": "Separate paragraphs with double line breaks (\\n\\n)",
          "rows": 6
        },
        {
          "key": "field_section_product_id",
          "label": "Product ID (Optional)",
          "name": "product_id",
          "type": "text",
          "instructions": "Product ID string from lib/catalog.ts (e.g. glass-oil-sprayer)"
        }
      ]
    },
    {
      "key": "field_article_faqs",
      "label": "FAQs",
      "name": "faqs",
      "type": "repeater",
      "layout": "block",
      "button_label": "Add FAQ",
      "sub_fields": [
        {
          "key": "field_faq_question",
          "label": "Question",
          "name": "question",
          "type": "text",
          "required": 1
        },
        {
          "key": "field_faq_answer",
          "label": "Answer",
          "name": "answer",
          "type": "textarea",
          "required": 1,
          "rows": 3
        }
      ]
    },
    {
      "key": "field_article_seo_title",
      "label": "SEO Title",
      "name": "seo_title",
      "type": "text",
      "instructions": "Custom page title override. Fallback to WP post title."
    },
    {
      "key": "field_article_seo_description",
      "label": "SEO Meta Description",
      "name": "seo_description",
      "type": "textarea",
      "instructions": "Custom meta description override. Fallback to post excerpt.",
      "rows": 2
    }
  ],
  "location": [
    [
      {
        "param": "post_type",
        "operator": "==",
        "value": "post"
      }
    ]
  ],
  "menu_order": 0,
  "position": "normal",
  "style": "default",
  "label_placement": "top",
  "instruction_placement": "label",
  "hide_on_screen": "",
  "active": true,
  "show_in_rest": true
}
```

---

## 2. WordPress REST API Exposure

Ensure ACF fields are exposed in REST API responses (`/wp-json/wp/v2/posts`).

If using ACF Pro, setting `"show_in_rest": true` automatically places custom fields under `post.acf`.

---

## 3. Implementation Roadmap

1. **Phase 2 (ACF Field Group)**: Import JSON into WordPress (`pap.ramsyap.com`).
2. **Phase 3 (Migration Tool)**: Run `scratch/export_catalog_to_wp.js` to output JSON payloads for REST API import.
3. **Phase 4 (Next.js Client)**: Implement `lib/wordpress.ts` with 3x exponential backoff retry and fallback to `GUIDES` in `lib/catalog.ts`.
4. **Phase 5 (Verification)**: Build with `npm run build` and confirm all pages generate cleanly.
