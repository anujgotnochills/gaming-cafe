"use client";
import React, { createContext, useContext, useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import clientsData from '@/data/clients.json';

export type ClientData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  whatsappMessage: string;
};

const defaultClient = (clientsData as Record<string, ClientData>)['default'];

const ClientContext = createContext<ClientData>(defaultClient);

export const useClient = () => useContext(ClientContext);

function ClientProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [client, setClient] = useState<ClientData>(defaultClient);

  useEffect(() => {
    const clientId = searchParams.get('client');
    const clients = clientsData as Record<string, ClientData>;
    if (clientId && clients[clientId]) {
      setClient(clients[clientId]);
    } else {
      setClient(clients['default']);
    }
  }, [searchParams]);

  return (
    <ClientContext.Provider value={client}>
      {children}
    </ClientContext.Provider>
  );
}

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<ClientContext.Provider value={defaultClient}>{children}</ClientContext.Provider>}>
      <ClientProviderInner>{children}</ClientProviderInner>
    </Suspense>
  );
}
