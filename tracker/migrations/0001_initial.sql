-- migrations/0001_initial.sql

-- ============================================================
-- Tabel: landing_pages
-- ============================================================
CREATE TABLE IF NOT EXISTS landing_pages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    template TEXT NOT NULL DEFAULT 'default',
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    offer_id TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    og_image TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    published_at DATETIME,
    FOREIGN KEY (offer_id) REFERENCES offers(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_landing_pages_slug ON landing_pages(slug);
CREATE INDEX IF NOT EXISTS idx_landing_pages_status ON landing_pages(status);
CREATE INDEX IF NOT EXISTS idx_landing_pages_offer ON landing_pages(offer_id);

-- ============================================================
-- Tabel: sections
-- ============================================================
CREATE TABLE IF NOT EXISTS sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    landing_page_id INTEGER NOT NULL,
    type TEXT NOT NULL CHECK (type IN (
        'hero', 'benefits', 'problem', 'solution', 'features',
        'faq', 'cta', 'comparison', 'gallery', 'pricing',
        'testimonials', 'video'
    )),
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT 1,
    settings TEXT NOT NULL DEFAULT '{}',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (landing_page_id) REFERENCES landing_pages(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sections_landing_page ON sections(landing_page_id);
CREATE INDEX IF NOT EXISTS idx_sections_type ON sections(type);
CREATE INDEX IF NOT EXISTS idx_sections_sort ON sections(landing_page_id, sort_order);