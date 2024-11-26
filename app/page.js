import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Button>Click</Button>
      <UserButton/>
    </div>
  );
}
