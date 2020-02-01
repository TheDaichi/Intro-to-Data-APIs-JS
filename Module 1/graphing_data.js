/**Working with CSV */
/** Zonal Temparature Data: https://data.giss.nasa.gov/gistemp/ */
/** Add Chart.js CDN in HTML head : https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js */

const xlabels = [];
const ytemps = [];

chartIt();

async function chartIt() {
    await getData();
    const ctx = document.getElementById('Chart').getContext('2d');
    const xlabels = [];
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [
                {
                    label: 'Combined Land-Surface Air and Sea-Surface Water Temperature',
                    data: ytemps,
                    fill: false,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1
                }
            ]
        }
    });
};

async function getData() {
    const response = await fetch('ZonAnn.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const cols = row.split(',');
        const year = cols[0];
        xlabels.push(year);
        const temp = cols[1];
        ytemps.push(parseFloat(temp) + 14);
    });

}


