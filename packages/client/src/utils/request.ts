export const request = async <T = never>(
  input: RequestInfo | URL,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init?: Omit<RequestInit, "body"> & { body?: any },
): Promise<T extends never ? Response : { data: T }> => {
  const response = await fetch(input, {
    ...init,
    ...(init?.body && { body: JSON.stringify(init.body) }),
    headers: { ...init?.headers, "Content-Type": "application/json" },
  });

  if (response.status === 200) {
    return await response.json();
  }

  return response as never;
};
