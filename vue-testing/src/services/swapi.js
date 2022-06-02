export async function getMessage() {
  const url = "https://swapi.dev/api/people/1";
  try {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  } catch {
    return "something went wrong";
  }
}
