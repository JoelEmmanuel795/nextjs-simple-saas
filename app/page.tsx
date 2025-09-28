"use client";

import Feature from "@/app/components/Feature";
import { useEffect, useState } from "react";

export default function Home() {
  const [ping, setPing] = useState<{ ok: boolean; ts: number } | null>(null);
  const [features, setFeatures] = useState<
    { name: string; enabled: boolean }[]
  >([]);

  useEffect(() => {
    fetch("/api/ping")
      .then((res) => res.json())
      .then(setPing);
  }, []);

  useEffect(() => {
    fetch("/api/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data.features));
  }, []);

  return (
    <main>
      <h1>Welcome to My SaaS!</h1>
      <p>Ping response: {ping ? JSON.stringify(ping) : "Loading..."}</p>
      <h2>Features:</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.name}>
            {feature.name} {feature.enabled ? "✅" : "❌"}
          </li>
        ))}
      </ul>
      <Feature />
    </main>
  );
}
