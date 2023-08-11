import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { styles } from '../utils/Utility';

interface IncomeData {
  month: string;
  income: number;
}

interface IncomeProps {
  incomeData: IncomeData[];
}

const Income: React.FC<IncomeProps> = ({ incomeData }) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      width: 500,
      toolbar: {
        show: false,
      },
      background: '#fff',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 3,
        blur: 5,
        opacity: 0.1,
      },
    },
    xaxis: {
      categories: incomeData.map(data => data.month),
    },
    yaxis: {
      title: {
        text: 'Income (USD)',
        style: {
          color: '#333',
        },
      },
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      colors: '#333',
    },
  };

  const chartSeries = [
    {
      name: 'Income',
      data: incomeData.map(data => data.income),
    },
  ];

  return (
    <Card style={{ ...styles.container, textAlign: 'center' ,  marginBottom:"30px"}}>
      <CardContent>
        <Typography variant="h6" style={styles.heading}>
          Income
        </Typography>
        <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={360} width={500} />
      </CardContent>
    </Card>
  );
};

export default Income;
