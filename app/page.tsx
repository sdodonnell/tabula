export default function Home() {
  return (
    <main>
      <h1>Welcome to Tabula!</h1>
      <p>{JSON.stringify(process.env)}</p>
    </main>
  );
}
