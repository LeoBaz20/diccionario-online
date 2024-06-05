import { authConfig } from "@/lib/auth";
import {Signin} from "../../components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// sections

export default async function Campaign() {
  const session = await getServerSession(authConfig);

  if (session) return redirect("/");

  return (
    <>
      <Signin/>
    </>
  );
}
