import { useSelectedLayoutSegment } from "next/navigation";

async function getTeam() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  export default async function TeamPage({ team }: { team: React.ReactNode }) {
    const data = await getTeam();    

    return (
      <div>
        <h1>setting...</h1>
      </div>
    );
  }
  