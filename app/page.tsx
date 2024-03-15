"use client"

export default function Home() {

  const activeChain = process.env.NEXT_PUBLIC_ACTIVE_CHAIN;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-10 items-center">
        <div className="font-medium text-5xl">Welcome to Nomos!</div>
        <div className="font-medium text-xl">active chain : {activeChain}</div>
        <select
          className="text-black"
          value={activeChain}
          onChange={(e) => {
            console.log(e.target.value);
            switch (e.target.value) {
              case 'archway-1':
                window.location.replace(process.env.NEXT_PUBLIC_CHAIN_SUBDOMAIN_ARCHWAY!);
                break;
              case 'constantine-3':
                window.location.replace(process.env.NEXT_PUBLIC_CHAIN_SUBDOMAIN_ARCHWAY_TESTNET!);
                break;

              default:
                break;
            }
          }}
        >
          <option value={"archway-1"}>Archway</option>
          <option value={"constantine-3"}>Archway Testnet</option>
        </select>
      </div>
    </main>
  );
}
