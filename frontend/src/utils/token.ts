import { authTokenEnum } from "@/enums/index";

export function getToken(key:string = authTokenEnum) :string | null{
  return localStorage.getItem(key);
}

export function setToken(key:string = authTokenEnum, token: string) :void{
  localStorage.setItem(key, token)
}

export function removeToken(key:string = authTokenEnum) :void{
  localStorage.removeItem(key)
}

