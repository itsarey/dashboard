import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsListCheck}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie } 
 from 'recharts';

function Home() {

    const routeData = [
      { route: 'Route A', revenue: 9000, passengers: 150 },
      { route: 'Route B', revenue: 7200, passengers: 120 },
      { route: 'Route C', revenue: 12000, passengers: 200 },
      { route: 'Route D', revenue: 6000, passengers: 100 },
      { route: 'Route E', revenue: 10800, passengers: 180 },
    ];
  

    const revenueData = [
      { name: 'Day 1', revenue: 12000, expenses: 4000, profit: 8000 },
      { name: 'Day 2', revenue: 15000, expenses: 5000, profit: 10000 },
      { name: 'Day 3', revenue: 10000, expenses: 3500, profit: 6500 },
      { name: 'Day 4', revenue: 18000, expenses: 6000, profit: 12000 },
      { name: 'Day 5', revenue: 17000, expenses: 5500, profit: 11500 },
      { name: 'Day 6', revenue: 16000, expenses: 5000, profit: 11000 },
      { name: 'Day 7', revenue: 20000, expenses: 7000, profit: 13000 },
    ];

   

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>FARE & TRANSACTIONS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>100</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TRIPS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>FUEL LOGS</h3>
                    <BsListCheck className='card_icon'/>
                </div>
                <h1>150</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={routeData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="route" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="passangers" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
  
                width={500}
                height={300}
                data={revenueData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                <Line type="monotome" dataKey="profit" stroke='#ffc658' />
                </LineChart>
            </ResponsiveContainer>



        </div>
    </main>
  )
}

export default Home