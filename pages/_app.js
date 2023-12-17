import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  const API =
    "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";

  const contextValue = {
    data,
    msg,
    setData,
    setMsg,
  };
  async function fetchData() {
    await fetch(API)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
