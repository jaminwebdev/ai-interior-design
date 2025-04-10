import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getUserCredits } from '@/supabase/helpers';
import { createClient } from '@/supabase/server';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { credits } = await getUserCredits(createClient);

  return (
    <div className="min-h-screen">
      <Header credits={credits} />
      {children}
      <Footer />
    </div>
  );
}
