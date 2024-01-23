"use client"
import React, { useState, useEffect } from 'react';

interface ApiResponse {
  data: {
    firstname: string;
  };
}

export default function Profile() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('api/fetch')
      .then((res) => res.json())
      .then((apiData: ApiResponse) => {
        setData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data.data);

  return (
    <div>
      <h1>Profile of {data.data.firstname}</h1>
    </div>
  );
}
