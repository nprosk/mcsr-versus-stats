import { minotarBaseUrl, mojangApiBaseUrl, rankedApiBaseUrl } from "../constants";

const apiFetch = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}: ${url}`);
  return res.json();
};

export const mcsrRankedApiFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(rankedApiBaseUrl + url);
  return data;
};

export const minotarFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(minotarBaseUrl + url);
  return data;
};

export const mojangApiFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(mojangApiBaseUrl + url);
  return data;
};