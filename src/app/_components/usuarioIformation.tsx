'use client';

import { useSession } from 'next-auth/react';

export default function UserInformation() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <img src={session.user.image ?? ''} alt="User Image" />
      <h1>{session.user.name}</h1>
    </div>
  );
}


