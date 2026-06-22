CREATE TABLE clicks (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  page TEXT NOT NULL,
  gclid TEXT,
  user_agent TEXT
);

CREATE TABLE outbound_clicks (
  id TEXT PRIMARY KEY,
  click_id TEXT NOT NULL,
  offer_slug TEXT NOT NULL,
  created_at TEXT NOT NULL
);