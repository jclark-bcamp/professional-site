import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import About from './components/about/index.jsx';
import Contact from './components/contact/index.jsx';
import Portfolio from './components/portfolio/index.jsx';
import Resume from './components/resume/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
                ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);