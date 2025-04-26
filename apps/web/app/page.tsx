// import { prisma } from "db/client"

// export default async function Home() {
//   try {
//     const users = await prisma.user.findMany();
//     console.log(process.env.DATABASE_URL);

//     return (
//       <div>
//         users : {JSON.stringify(users)}
//       </div>
//     );
//   } catch (error) {
//     console.error("Failed to fetch users:", error);
//     return (
//       <div>
//         Error loading users: {error instanceof Error ? error.message : String(error)}
//       </div>
//     );
//   }
// }

import styles from "./page.module.css";
import { prisma } from "db/client";

export default async function Home() {
  const user = await prisma.user.findMany()
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}