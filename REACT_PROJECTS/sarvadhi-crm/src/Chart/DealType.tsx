import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { styles } from '../utils/Utility';

interface DealTypeData {
  type: string;
  count: number;
}

interface DealTypeChartProps {
  dealTypeData: DealTypeData[];
}

const DealTypeChart: React.FC<DealTypeChartProps> = ({ dealTypeData }) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
      height: 350,
      width: '100%', 
      background: '#fff',
    },
    labels: dealTypeData.map(data => data.type),
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts: any) {
        return `${val.toFixed(0)}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: '18px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '18px',
              formatter: function (w: any) {
                const total = w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                return `${total.toFixed(0)}%`;
              },
            },
          },
        },
      },
    },
  };

  const chartSeries = dealTypeData.map(data => data.count);

  const chartContainerStyle = {
    width: '100%',
    maxWidth: '500px', // Maximum width for the chart
    margin: '0 auto', // Center the chart horizontally
  };

  return (
    <Card style={{ ...styles.container, textAlign: 'center',  marginBottom:"30px" }}>
    <CardContent>
      <Typography variant="h6" style={styles.heading}>
        Deal Type
      </Typography>
      <div style={chartContainerStyle}>
        <ReactApexChart options={chartOptions} series={chartSeries} type="donut" width={500}/>
      </div>
    </CardContent>
  </Card>
  );
};

export default DealTypeChart;
