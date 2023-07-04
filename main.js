const fetchData = require('./index');

async function main() {
  try {
    const festivalData = await fetchData();

    console.log('Tous les festivals :', festivalData);

    const festivalsByRegion = festivalData.filter((festival) => festival.region === 'Île-de-France');
    console.log('Festivals par région :', festivalsByRegion);

    const festivalsByDepartment = festivalData.filter((festival) => festival.departement === '75');
    console.log('Festivals par département :', festivalsByDepartment);

    const festivalsByStartMonth = festivalData.filter((festival) => new Date(festival.startDate).getMonth() + 1 === 7);
    console.log('Festivals par mois de début :', festivalsByStartMonth);

    const filteredFestivals = festivalData.filter((festival) => (
      festival.region === 'Provence-Alpes-Côte dAzur' &&
      festival.departement === '13' &&
      new Date(festival.startDate).getMonth() + 1 === 8
    ));
    console.log('Festivals avec filtres :', filteredFestivals);
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

main();
