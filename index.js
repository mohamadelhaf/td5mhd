const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut');
    const jsonData = response.data;
    const festivalData = jsonData.records.map((record) => ({
      festivalName: record.fields.nom_de_la_manifestation,
      region: record.fields.region,
      startDate: record.fields.date_debut_ancien,
      endDate: record.fields.date_de_fin_ancien,
      website: record.fields.site_web,
    }));
    return festivalData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = fetchData;
