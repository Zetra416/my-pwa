import React from 'react';
import Chart from 'react-apexcharts';

export default function DonutChart() {
  return (
    <>
      <Chart
        type='donut'
        width={360}
        height={400}
        series={[40, 10, 20, 10, 4, 6, 10]}
        options={{
          labels: [
            'Offline',
            'AloDoc',
            'Halodoc',
            'SehatQ',
            'GrabHealt',
            'Tokopedia',
            'Shopee',
          ],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          horizontalAlign: 'center', 
        }}
      />
    </>
  );
}

