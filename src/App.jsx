import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import Router from "@/router/Router";

const App = () => {
  // animasi loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <section className="h-full border-none outline-none text-gray-200">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader
            size={50}
            color={"#ffffff"}
            loading={loading}
          />
        </div>)
        : (
          <Router />
        )
      }
    </section>
  )
}

export default App;