import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data: venues } = await supabase.from("venues").select("*");

  if (!venues) {
    return <div>No data</div>;
  }

  return (
    <>
      {venues.map((venue) => (
        <ul key={venue.description}>
          <li>{venue.name}</li>
          <li>{venue.description}</li>
        </ul>
      ))}
    </>
  );
}
