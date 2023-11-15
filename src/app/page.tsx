import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full container mx-auto p-20 flex items-end justify-center">
        <NavbarComponent />
      </div>
    </main>
  );
};

export default App;
