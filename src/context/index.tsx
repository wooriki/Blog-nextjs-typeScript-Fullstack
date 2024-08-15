"use client";

import Spinner from "@/components/spinner";
import { useSession } from "next-auth/react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
};

export const GlobalCotext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  if (session === undefined) return <Spinner />;

  return (
    <GlobalCotext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalCotext.Provider>
  );
}
