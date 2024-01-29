"use client";

import { Loading } from "@/components/loading";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function ProfilePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;

  if (error) return <div>{error.message}</div>;

  console.log(user);

  return (
    user && (
      <div>
        <Image src={user?.picture} alt={user?.name} width={30} height={30} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
