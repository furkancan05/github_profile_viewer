import { User } from "@/types/userDatas";
import { createContext } from "react";

export const PersonContext = createContext<User>(null!);
