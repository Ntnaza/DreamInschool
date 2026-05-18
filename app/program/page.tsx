import { prisma } from "@/lib/prisma";
import { getSelectedPeriodeId } from "@/lib/actions";
import ProgramClient from "./ProgramClient";

export const dynamic = "force-dynamic";

async function getProgramData() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay
  const selectedPeriodeId = await getSelectedPeriodeId();
  return await prisma.programKerja.findMany({
    where: { periodeId: selectedPeriodeId || undefined },
    orderBy: [
      { startDate: 'asc' },
      { createdAt: 'asc' }
    ]
  });
}

export default function ProgramPage() {
  const programsPromise = getProgramData();
  return <ProgramClient programsPromise={programsPromise} />;
}