'use client'

export default function HomePage() {

  function handleClick(){
    console.log('teste');
  }

  return (
    <main>
      <h1>Home</h1>
      <button onClick={handleClick}>Definir Cookie</button>
    </main>
  );
}
