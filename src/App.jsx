import AppRoutes from './routes/AppRoutes';


export default function App() {
  return (
    <div className=" flex flex-col  ">
     
      <main className="flex-grow">
        <AppRoutes />
      </main>
     
    </div>
  );
}