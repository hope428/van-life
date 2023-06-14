import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, []);

 
  

  return (
    vans.map((van) => {
        
      })
  );
}
