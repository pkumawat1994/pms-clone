
import { ToastContainer } from 'react-toastify';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (<>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <PublicRoutes />
    </>);
}

export default App;
