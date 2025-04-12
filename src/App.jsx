import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <div className="grid grid-cols-[200px,_1fr] gap-3">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
