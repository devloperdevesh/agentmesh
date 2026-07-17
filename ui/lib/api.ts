const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8080";


async function request<T>(
  endpoint: string
): Promise<T> {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      cache: "no-store",
    }
  );


  if (!response.ok) {
    throw new Error(
      `API request failed: ${endpoint}`
    );
  }


  return response.json();
}



export function getMetrics() {
  return request("/metrics");
}


export function getWorkers() {
  return request("/workers");
}


export function getCheckpoints() {
  return request("/checkpoints");
}


export function getLogs() {
  return request("/logs");
}


export function getHealth() {
  return request("/health");
}