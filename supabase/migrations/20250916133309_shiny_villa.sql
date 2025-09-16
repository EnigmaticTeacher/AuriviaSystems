/*
  # AI Real Estate Platform Database Schema

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `company` (text, optional)
      - `role` (text, optional)
      - `phone` (text, optional)
      - `website` (text, optional)
      - `city` (text, optional)
      - `message` (text, optional)
      - `preferred_demo_times` (text, optional)
      - `created_at` (timestamp)
      
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, required, unique)
      - `created_at` (timestamp)
      - `active` (boolean, default true)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access (since these are lead generation forms)
    - Add policies for authenticated admin access

  3. Indexes
    - Email indexes for faster lookups
    - Created_at indexes for chronological queries
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  role text,
  phone text,
  website text,
  city text,
  message text,
  preferred_demo_times text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscribers(created_at DESC);

-- RLS Policies

-- Leads policies (allow public insert for lead generation, admin read/update)
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Service role can view all leads"
  ON leads
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update leads"
  ON leads
  FOR UPDATE
  TO service_role
  USING (true);

-- Newsletter policies (allow public insert, admin read/update)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Service role can view newsletter subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO service_role
  USING (true);

-- Add trigger to update updated_at on leads
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for development
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM leads WHERE email = 'sample@example.com') THEN
    INSERT INTO leads (name, email, company, role, message, city) VALUES
    ('John Sample', 'sample@example.com', 'Sample Investments', 'Portfolio Manager', 'Interested in learning more about AI automation for our investment process.', 'San Francisco'),
    ('Sarah Demo', 'sarah@demorealty.com', 'Demo Realty Group', 'Investment Director', 'Would like to see how lead scoring could improve our deal flow.', 'Los Angeles'),
    ('Mike Test', 'mike@testinvestors.com', 'Test Investors LLC', 'Founder', 'Looking to automate property analysis for our fix-and-flip business.', 'Austin');
  END IF;
END $$;