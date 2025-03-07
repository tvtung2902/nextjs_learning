async function getAnalyticsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { visitors: 1000, sales: 500 };
  }
  
  export default async function AnalyticsPage() {
    const data = await getAnalyticsData();
    return (
      <div>
        <h1>Analytics</h1>
        <p>Visitors: {data.visitors}</p>
        <p>Sales: {data.sales}</p>
      </div>
    );
  }
  