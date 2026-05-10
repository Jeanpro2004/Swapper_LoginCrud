"use client";

import { useState } from "react";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const endpoint =
      mode === "login" ? "/api/auth/login" : "/api/auth/register";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button type="submit" className="primary-btn">
          {mode === "login" ? "Ingresar" : "Registrarse"}
        </button>
      </fieldset>

      <div className="auth-switch">
        <p>
          {mode === "login"
            ? "¿No tienes cuenta?"
            : "¿Ya tienes cuenta?"}
        </p>
        <button
          type="button"
          className="text-btn"
          onClick={() =>
            setMode(mode === "login" ? "register" : "login")
          }
        >
          {mode === "login" ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </div>
    </form>
  );
}