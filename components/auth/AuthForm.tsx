"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/browser";

export default function AuthForm() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (result.error) {
      alert(result.error.message);
      return;
    }

    alert(mode === "login" ? "Inicio de sesión exitoso" : "Cuenta creada");
    router.push("/wardrobe");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <fieldset>
        <legend>{mode === "login" ? "Iniciar sesión" : "Crear cuenta"}</legend>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button type="submit" className="primary-btn">
          {mode === "login" ? "Ingresar" : "Registrarse"}
        </button>
      </fieldset>

      <div className="auth-switch">
        <p>{mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}</p>

        <button
          type="button"
          className="text-btn"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </div>
    </form>
  );
}