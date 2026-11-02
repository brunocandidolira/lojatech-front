import { Link } from "react-router-dom";
import type { FormEvent } from "react";
import { useState } from "react";
import { LoginBanner } from "../components/LoginBanner/LoginBanner";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!username.trim() || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    console.log("Tentativa de login:", username);

    // Futuramente, enviaremos os dados para sua API.
  }

  function handleGoogleLogin() {
    console.log("Login com Google ainda não configurado.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">

      {/* CONTAINER PRINCIPAL */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* BANNER À ESQUERDA */}
        <LoginBanner />

        {/* FORMULÁRIO À DIREITA */}
        <div className="flex w-full items-center justify-center p-6 sm:p-10 md:w-1/2">

          <form
            onSubmit={handleLogin}
            className="w-full max-w-sm"
          >

            {/* TÍTULO */}
            <h1 className="mb-2 text-center text-3xl font-bold text-purple-700">
              LojaTech
            </h1>

            <p className="mb-8 text-center text-gray-500">
              Entre na sua conta
            </p>

            {/* USUÁRIO */}
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Usuário
              </label>

              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Digite seu usuário"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            {/* SENHA */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Senha
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            {/* ESQUECEU A SENHA */}
            <div className="mb-6 text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* BOTÃO ENTRAR */}
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Entrar
            </button>

            {/* SEPARADOR */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-sm text-gray-400">
                ou
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* LOGIN GOOGLE */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Entrar com Google
            </button>

            {/* CRIAR CONTA */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">
                Ainda não possui uma conta?{" "}
              </span>

              <Link
                to="/register"
                className="text-sm font-semibold text-purple-600 hover:underline"
              >
                Criar conta
              </Link>
            </div>

            {/* VOLTAR */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-sm text-gray-500 transition hover:text-purple-600"
              >
                ← Voltar à loja
              </Link>
            </div>

          </form>

        </div>
      </div>
    </main>
  );
}