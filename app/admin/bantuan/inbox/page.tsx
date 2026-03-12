import { prisma } from "@/lib/prisma";
import InboxClient from "./InboxClient";

export default async function SupportInboxPage() {
  const tickets = await prisma.helpTicket.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <InboxClient initialTickets={tickets} />;
}
