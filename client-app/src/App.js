// import logo from './logo.svg';
// import './App.css';

// import { useEffect, useState } from 'react';

// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function refresh() {
//       const refresh = '';
//       const config = {
//         method: 'post',
//         url: 'http://localhost:8000/api/token/refresh/',
//         data: {
//           "refresh": refresh
//         },
//       };
//       const response = await axios(config);
//       return response.data.access;
//     }

//     function fetchData(token) {
//         const config = {
//           method: 'get',
//           url: 'http://localhost:8000/api/v1/posts/',
//           headers: { 
//             'Authorization': `Bearer ${token}`
//           }
//         };
        
//         axios(config)
//         .then(res => setData(res.data))
//         .catch(function (error) {
//           console.log(error);
//           refresh().then((access) => {
//             fetchData(access);
//           })
//         });
//     }

//     fetchData();
//   }, []);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
