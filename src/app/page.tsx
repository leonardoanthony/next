import { Acesso } from "@/components/acesso";
import ServerFetch from "@/components/server-fetch";

export default async function Home() {
  return (
    <main>
      <h1>Olá NextJS</h1>
      <Acesso />
      <h2>Server Fetch</h2>
      <ServerFetch />
    </main>
  );
}
