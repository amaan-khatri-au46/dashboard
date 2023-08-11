import React from 'react';

import BalanceOverviewChart from '../Chart/BalanceOverviewChart';

import Income from '../Chart/Income';

import DealTypeChart from '../Chart/DealType';
import { DashboardTable } from '../components/DashboardTable';

export const Dashboard = () => {
  const balanceData = [
    { month: 'Jan', balance: 1000 },

    { month: 'Feb', balance: 1200 },

    { month: 'Mar', balance: 900 },

    { month: 'Apr', balance: 1500 },

    { month: 'May', balance: 1300 },

    { month: 'Jun', balance: 1100 },

    { month: 'Jul', balance: 1400 },

    { month: 'Aug', balance: 1600 },

    { month: 'Sep', balance: 1800 },
    { month: 'Oct', balance: 1700 },
    { month: 'Nov', balance: 1900 },
    { month: 'Dec', balance: 2000 },
  ];

  const incomeData = [
    { month: 'Jan', income: 1500 },
    { month: 'Feb', income: 1800 },
    { month: 'Mar', income: 1300 },
    { month: 'Apr', income: 1600 },
    { month: 'May', income: 1900 },
    { month: 'Jun', income: 1400 },
    { month: 'Jul', income: 1700 },
    { month: 'Aug', income: 2000 },
    { month: 'Sep', income: 1500 },
    { month: 'Oct', income: 1800 },
    { month: 'Nov', income: 1200 },
    { month: 'Dec', income: 1600 },
  ];

  const dealTypeData = [
    { type: 'Type A', count: 15 },
    { type: 'Type B', count: 10 },
    { type: 'Type C', count: 20 },
  ];

  return (
    // <div className="dashboard-container">
    <>
      {/* <Card> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <BalanceOverviewChart balanceData={balanceData} />
        <Income incomeData={incomeData} />
        <DealTypeChart dealTypeData={dealTypeData} />
      </div>
      <DashboardTable />
      {/* </Card> */}
    </>
    // </div>
  );
};
