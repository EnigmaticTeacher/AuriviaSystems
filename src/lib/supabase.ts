import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our database
export interface Lead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  city?: string;
  message?: string;
  phone?: string;
  website?: string;
  role?: string;
  preferred_demo_times?: string;
  created_at?: string;
}

export interface Newsletter {
  id?: string;
  email: string;
  created_at?: string;
}

// Lead management functions
export const createLead = async (lead: Lead) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select();
  
  if (error) throw error;
  return data[0];
};

export const subscribeNewsletter = async (email: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select();
  
  if (error) throw error;
  return data[0];
};