'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
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
            appearance={{ theme: ThemeSupa, style: { input: { color: 'white' } } }}
            providers={[]}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Correo electrónico',
                  email_input_placeholder: 'tucorreo@gmail.com',
                  button_label: 'Enviar enlace mágico',
                },
              },
            }}
            view="magic_link"
          />
          <p className="text-xs text-gray-500 mt-4">
            Se enviará un enlace seguro a tu correo.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white">
      <h1 className="text-3xl font-bold mb-4">Bienvenido ⚡</h1>
      <p className="text-gray-400 mb-6">
        Sesión activa con <strong>{session.user.email}</strong>
      </p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Cerrar sesión
      </button>
    </main>
  );
}
