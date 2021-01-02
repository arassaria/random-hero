export async function getRole(role) {
  const results = await fetch(`/api/overwatch?role=${role}`);
  const heroes = await results.json();
  return heroes;
}
