CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL CHECK (service IN ('domain', 'web-hosting', 'vps', 'reseller', 'general')),
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'closed')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries (status);
