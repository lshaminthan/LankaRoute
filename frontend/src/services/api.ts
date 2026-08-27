const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AuthUser = {
  id: string;
  name: string;
  email: string;
};

type AuthResponse = {
  success: boolean;
  message: string;
  data?: { user: AuthUser };
  error?: { message: string };
};

async function postAuth(path: string, body: unknown): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });
  return response.json();
}

export function signup(name: string, email: string, password: string) {
  return postAuth("/api/user/auth/signup", { name, email, password });
}

export function login(email: string, password: string) {
  return postAuth("/api/user/auth/login", { email, password });
}

export function googleSignIn(idToken: string) {
  return postAuth("/api/user/auth/google", { idToken });
}

function clearBrowserStorage() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.clear();
  } catch (error) {
    console.warn("Failed to clear localStorage on logout", error);
  }

  try {
    window.sessionStorage.clear();
  } catch (error) {
    console.warn("Failed to clear sessionStorage on logout", error);
  }
}

export function logout() {
  clearBrowserStorage();
  return postAuth("/api/user/auth/logout", {});
}
