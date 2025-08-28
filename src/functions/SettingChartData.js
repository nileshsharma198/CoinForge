// export const SettingChartData = (setChartData, prices1,prices2,days) => {
//     const formattedLabels = prices1.map((price) => {
//           const date = new Date(prices1[0]);
//           const day = date.getDate();
//           const month = date.toLocaleString("en-US", { month: "short" });
//           if (days >= 365) {
//             const year = date.getFullYear();
//             return `${day}-${month}-${year}`;
//           }
//           return `${day}-${month}`;
//         });

//         if(prices2){
//           setChartData({
//           labels: formattedLabels,
//           datasets: [
//             {
//               data: prices1.map((price) => price[1]),
//               borderColor: "#FF6A00",
//               backgroundColor: "rgba(255, 165, 0, 0.15)",
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 2,
//             },
//           ],
//           datasets: [
//             {
//               data: prices2.map((price) => price[1]),
//               borderColor: "#FF6A00",
//               backgroundColor: "rgba(255, 165, 0, 0.15)",
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 2,
//             },
//           ],
//         });
//         }else{
//           setChartData({
//           labels: formattedLabels,
//           datasets: [
//             {
//               label: label1,
//               data: prices1.map((price) => price[1]),
//               borderColor: "#FF6A00",
//               backgroundColor: "rgba(255, 165, 0, 0.15)",
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 2,
//             },
//           ],
//         });
//         }
        
// }

// functions/SettingChartData.jsx

// export const SettingChartData = (
//   setChartData,
//   prices1,
//   days,
//   prices2 = null, // optional for compare
//   label1 = "Coin 1",
//   label2 = "Coin 2"
// ) => {
//   // ✅ Format labels from first dataset
//   const formattedLabels = prices1.map((price) => {
//     const date = new Date(price[0]);
//     const day = date.getDate();
//     const month = date.toLocaleString("en-US", { month: "short" });
//     if (days >= 365) {
//       const year = date.getFullYear();
//       return `${day}-${month}-${year}`;
//     }
//     return `${day}-${month}`;
//   });

//   // ✅ Datasets (always at least 1)
//   const datasets = [
//     {
//       label: label1,
//       data: prices1.map((p) => p[1]),
//       borderColor: "#FF6A00",
//       backgroundColor: "rgba(255, 165, 0, 0.15)",
//       borderWidth: 2,
//       fill: true,
//       tension: 0.25,
//       pointRadius: 2,
//     },
//   ];

//   // ✅ Add second dataset if provided (Compare Page)
//   if (prices2) {
//     datasets.push({
//       label: label2,
//       data: prices2.map((p) => p[1]),
//       borderColor: "#005CFF",
//       backgroundColor: "rgba(0, 92, 255, 0.15)",
//       borderWidth: 2,
//       fill: true,
//       tension: 0.25,
//       pointRadius: 2,
//     });
//   }

//   // ✅ Finally set chart data
//   setChartData({
//     labels: formattedLabels,
//     datasets,
//   });
// };

// export const SettingChartData = (
//   setChartData,
//   prices1,
//   days,
//   prices2 = null, // optional for compare
//   label1 = "Coin 1",
//   label2 = "Coin 2"
// ) => {
//   const formattedLabels = prices1.map((price) => {
//     const date = new Date(price[0]);
//     const day = date.getDate();
//     const month = date.toLocaleString("en-US", { month: "short" });
//     if (days >= 365) {
//       const year = date.getFullYear();
//       return `${day}-${month}-${year}`;
//     }
//     return `${day}-${month}`;
//   });

//   const datasets = [
//     {
//       label: label1,
//       data: prices1.map((p) => p[1]),
//       borderColor: "#FF6A00",
//       backgroundColor: "rgba(255, 165, 0, 0.15)",
//       borderWidth: 2,
//       fill: true,
//       tension: 0.25,
//       pointRadius: 2,
//       yAxisID: "y1",   // 👈 Left Y-axis
//     },
//   ];

//   if (prices2) {
//     datasets.push({
//       label: label2,
//       data: prices2.map((p) => p[1]),
//       borderColor: "#005CFF",
//       backgroundColor: "rgba(0, 92, 255, 0.15)",
//       borderWidth: 2,
//       fill: true,
//       tension: 0.25,
//       pointRadius: 2,
//       yAxisID: "y2",   // 👈 Right Y-axis
//     });
//   }

//   setChartData({
//     labels: formattedLabels,
//     datasets,
//   });
// };

export const SettingChartData = (
  setChartData,
  prices1,
  days,
  prices2 = null,
  label1 = "Coin 1",
  label2 = "Coin 2"
) => {
  const formattedLabels = prices1.map((price) => {
    let ts = price[0];
    if (String(ts).length === 10) ts = ts * 1000; // convert seconds → ms
    const date = new Date(ts);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    return days >= 365
      ? `${day}-${month}-${date.getFullYear()}`
      : `${day}-${month}`;
  });

  const datasets = [
    {
      label: label1,
      data: prices1.map((p) => p[1]),
      borderColor: "#FF6A00",
      backgroundColor: "rgba(255, 165, 0, 0.15)",
      borderWidth: 2,
      fill: false,
      tension: 0.25,
      pointRadius: 2,
      yAxisID: "y1",
    },
  ];

  if (prices2) {
    datasets.push({
      label: label2,
      data: prices2.map((p) => p[1]),
      borderColor: "#FFFFFF",
      borderWidth: 2,
      fill: false,
      tension: 0.25,
      pointRadius: 2,
      yAxisID: "y2",
    });
  }

  setChartData({
    labels: formattedLabels,
    datasets,
  });
};

