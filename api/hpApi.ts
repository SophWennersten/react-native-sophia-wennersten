import { Spells } from "../data/spells";

//root of API
export const BASE = 'https://hp-api.onrender.com/api';




async function fetchJson<T>(url: string, timeout = 10000): Promise<T> {
  const controller = new AbortController(); //Cancel fetch request
  const id = setTimeout(() => controller.abort(), timeout); // if request takes more then set timout
  const res = await fetch(url, { signal: controller.signal }); // Passes signal to abort fetch if timeout hits
  clearTimeout(id); //Remove timer after request is finished
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

//API function
export function getSpells(): Promise<Spells[]> {
  return fetchJson<Spells[]>(`${BASE}/spells`);
}
