'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function DashboardClient() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white">
        <div className="bg-[#111] p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-2">Efirum.bio</h1>
          <p className="text-gray-400 mb-4">
            Ingresa tu correo para recibir el enlace mágico y acceder a tu dashboard.
          </p>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            view="magic_link"
          />
          <p className="text-xs text-gray-500 mt-4">Te enviaremos un enlace seguro a tu correo.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white">
      <h1 className="text-3xl font-bold mb-4">Bienvenido ⚡</h1>
      <p className="text-gray-400 mb-6">Sesión activa con <strong>{session.user.email}</strong></p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Cerrar sesión
      </button>
    </main>
  );
}
