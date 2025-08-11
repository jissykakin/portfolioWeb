import AppRoutes from './routes/AppRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className=" flex flex-col  ">
     
      <main className="flex-grow">
        <AppRoutes />
      </main>
     
    </div>
  );
}