-- db/schema.sql

PRAGMA foreign_keys = ON;

-- =====================================================
-- MERCHANTS
-- =====================================================

CREATE TABLE merchants (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  website_url TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX idx_merchants_name
ON merchants(name);

-- =====================================================
-- OFFERS
-- =====================================================

CREATE TABLE offers (
  id TEXT PRIMARY KEY,
  merchant_id TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  destination_url TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,

  FOREIGN KEY (merchant_id)
    REFERENCES merchants(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_offers_slug
ON offers(slug);

CREATE INDEX idx_offers_merchant
ON offers(merchant_id);

-- =====================================================
-- PAGE VIEWS
-- =====================================================

CREATE TABLE page_views (
  id TEXT PRIMARY KEY,
  page TEXT NOT NULL,
  gclid TEXT,
  user_agent TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX idx_page_views_page
ON page_views(page);

CREATE INDEX idx_page_views_created_at
ON page_views(created_at);

-- =====================================================
-- OUTBOUND CLICKS
-- =====================================================

CREATE TABLE outbound_clicks (
  id TEXT PRIMARY KEY,
  page_view_id TEXT,
  offer_id TEXT NOT NULL,
  created_at TEXT NOT NULL,

  FOREIGN KEY (page_view_id)
    REFERENCES page_views(id)
    ON DELETE SET NULL,

  FOREIGN KEY (offer_id)
    REFERENCES offers(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_outbound_clicks_offer
ON outbound_clicks(offer_id);

CREATE INDEX idx_outbound_clicks_created_at
ON outbound_clicks(created_at);

CREATE INDEX idx_outbound_clicks_page_view
ON outbound_clicks(page_view_id);