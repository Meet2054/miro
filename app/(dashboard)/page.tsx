// DashbardRoutpage.tsx

"use client";
import { useOrganization } from '@clerk/nextjs';
import EmptyOrg from './_components/empty-org';

interface DashbardPageProps {
  searchParams: {
    favorites?: string;
    search?: string;
  };
}

const DashbardRoutpage = ({ searchParams }: DashbardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {JSON.stringify(searchParams)}
      {!organization ? (
        <EmptyOrg />
      ) : (
        <div>
          <h1>Board List</h1>
        </div>
      )}
    </div>
  );
}

export default DashbardRoutpage;
