import React, { useState, useEffect } from "react";

const ProfileCards = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfileInfomation();
  }, []);

  const loadProfileInfomation = () => {
    setAccounts([{ id: 1, name: "test" }]);
    setLoading(false);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {accounts.length > 1 ? <h1>accounts here</h1> : <p>No test here</p>}
    </div>
  );
};

export default ProfileCards;
