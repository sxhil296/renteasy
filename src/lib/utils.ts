import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function setUserInSessionStorage(user: any) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("user", JSON.stringify(user))
  }
}
export function getUserFromSessionStorage() {
  if (typeof window !== "undefined") {
    const user = sessionStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }
}
export function removeUserFromSessionStorage() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("user")
  }
}