import { minotarProxyBaseUrl, playerdbApiProxyBaseUrl, rankedProxyBaseUrl } from "../constants";

const apiFetch = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}: ${url}`);
  return res.json();
};

export const mcsrRankedApiFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(rankedProxyBaseUrl + url);
  return data;
};

export const minotarFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(minotarProxyBaseUrl + url);
  return data;
};

export const playerdbApiFetch = async <T>(url: string): Promise<T> => {
  const { data } = await apiFetch<{ status: string; data: T }>(playerdbApiProxyBaseUrl + url);
  return data;
};