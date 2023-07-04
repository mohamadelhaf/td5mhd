const fetchData = require('./index');

test('fetchData returns data with festival names', async () => {
  const data = await fetchData();
  const festivalNames = data.map((festival) => festival.festivalName);

  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
  expect(festivalNames).toContain('Art Danse');
  expect(festivalNames).toContain('DETOURS DE CHANT');
});
