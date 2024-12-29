
import Dropzone from '@/components/ui/Dropzone';
import { auth } from '@clerk/nextjs/server'


async function DashboardContent() {
  const { userId }: { userId: string | null } = await auth();

  if (!userId) return null;
  return <div>{userId}</div>;
}

function Dashboard() {
  return (
    <div>
     <Dropzone />
    </div>
  );
}

export default Dashboard;

