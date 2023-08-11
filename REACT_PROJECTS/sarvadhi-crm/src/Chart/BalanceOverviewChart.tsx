import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { styles } from '../utils/Utility';

interface BalanceData {
  month: string;
  balance: number;
}

interface BalanceOverviewChartProps {
  balanceData: BalanceData[];
}

const BalanceOverviewChart: React.FC<BalanceOverviewChartProps> = ({ balanceData }) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      background: '#fff',
    },
    xaxis: {
      categories: balanceData.map(data => data.month),
    },
    yaxis: {
      title: {
        text: 'Balance (USD)',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Balance',
      data: balanceData.map(data => data.balance),
    },
  ];

  const chartContainerStyle = {
    maxWidth: '500px', // Maximum width for the chart
    margin: '0 auto', // Center the chart horizontally
  };

  return (
    <Card style={{ ...styles.container, textAlign: 'center',  marginBottom:"30px" }}>
      <CardContent>
        <Typography variant="h6" style={styles.heading}>
          Balance Overview
        </Typography>
        <div style={chartContainerStyle}>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={360}
            width={500}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceOverviewChart;
