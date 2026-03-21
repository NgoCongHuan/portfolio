import { Outlet } from "react-router";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}