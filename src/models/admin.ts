import {Role} from "./role";

export interface Admin {
  id: number
  mobile: string
  avatar?: string | null
  role?: Role | null
}