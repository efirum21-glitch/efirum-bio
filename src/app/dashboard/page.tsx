'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Dashboard() {
  const [session, setSession] = useState<any>(null);

  // Escucha cambios de sesión (login/logout)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Si no hay sesión → muestra login
  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold text-center">Efirum.bio</h1>
          <p className="text-gray-600 text-center mb-4">
            Ingresa tu correo para recibir el enlace mágico de acceso.
          </p>

          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            view="magic_link"
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Correo electrónico',
                  email_input_placeholder: 'tucorreo@gmail.com',
                  button_label: 'Enviar enlace mágico',
                },
              },
            }}
          />

          <p className="text-xs text-gray-400 text-center mt-4">
            Se enviará un enlace seguro a tu correo.
          </p>
        </div>
      </main>
    );
  }

  // Si hay sesión activa → muestra mensaje temporal
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a tu Dashboard ⚡</h1>
      <p className="text-gray-600 mb-6">
        Sesión activa con <strong>{session.user.email}</strong>
      </p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="border rounded-md px-4 py-2 hover:bg-gray-100"
      >
        Cerrar sesión
      </button>
    </main>
  );
}
