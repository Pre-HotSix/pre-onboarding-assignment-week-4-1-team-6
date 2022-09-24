const storage = {
  get: (key: string) => localStorage.getItem(key),
  set: ({ key, data }: { key: string; data: string }) =>
    localStorage.setItem(key, data),
  remove: (key: string) => localStorage.removeItem(key),
};

export default storage;
