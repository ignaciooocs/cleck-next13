import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface Cookie {
  value: string;
}

// Tipado para el payload del token JWT
interface TokenPayload {
  azp: string;
  exp: number;
  iat: number;
  iss: string;
  nbf: number;
  sid: string;
  sub: string;
}

export function getCookie(): string | null {
  // Obtener el token de las cookies
  const jwtCookie: Cookie | undefined = cookies().get('__session');

  if (!jwtCookie) {
    return null; // Manejar el caso en el que no existe la cookie o el token
  }

  // Decodificar el token
  const jwt: string = jwtCookie.value;
  const decoded: TokenPayload | null = decode(jwt);

  if (!decoded) {
    return null; // Manejar el caso en el que el token no pueda ser decodificado
  }

  // Extraer el ID de usuario
  const userId: string = decoded.sub;

  return userId;
}