import { SupabaseClient } from '@supabase/supabase-js';

export async function getUser(supabaseClient: () => Promise<SupabaseClient>) {
  const { auth } = await supabaseClient();

  const userObject = await auth.getUser();

  if (userObject.error) {
    console.error(userObject.error);
    return null;
  }

  return userObject.data.user;
}

export async function getUserCredits(
  supabaseClient: () => Promise<SupabaseClient>
) {
  const supabase = await supabaseClient();

  const { data, error } = await supabase
    .from('ai_interior_design_users')
    .select('credits')
    .single();

  if (error) {
    return { credits: null, error };
  }

  return { credits: data.credits, error: null };
}
