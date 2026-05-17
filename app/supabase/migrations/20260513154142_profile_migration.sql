DROP TABLE IF EXISTS public.profiles CASCADE;

CREATE TABLE public.profiles (
  clerk_id TEXT PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  target_language TEXT,
  language_level TEXT,
  motivations TEXT[] DEFAULT '{}',
  onboarding_completed BOOLEAN DEFAULT false,
  total_xp INTEGER DEFAULT 0,
  hearts INTEGER DEFAULT 5,
  level_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies using clerk_id
CREATE POLICY "Users can read own profile"
ON public.profiles
FOR SELECT
USING (clerk_id = current_setting('app.current_user_id', true));

CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (clerk_id = current_setting('app.current_user_id', true));

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
USING (clerk_id = current_setting('app.current_user_id', true))
WITH CHECK (clerk_id = current_setting('app.current_user_id', true));

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;