export function handleSubmit<T = any>(event: Event, callback: (data: T) => void) {
  event.preventDefault();

  const target = event.target as HTMLFormElement;
  const formData = new FormData(target);
  const object = Object.fromEntries(formData) as Record<string, string>;

  callback(object as T);
}