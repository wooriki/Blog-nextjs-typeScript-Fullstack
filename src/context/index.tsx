"use client";

import Spinner from "@/components/spinner";
import { initialBlogFormData } from "@/utils";
import { BlogFormData } from "@/utils/types";
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
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
};

export const GlobalCotext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialBlogFormData);
  const { data: session } = useSession();

  if (session === undefined) return <Spinner />;

  return (
    <GlobalCotext.Provider
      value={{ loading, setLoading, formData, setFormData }}
    >
      {children}
    </GlobalCotext.Provider>
  );
}
