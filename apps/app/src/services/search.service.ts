import { SearchAll } from "../models/search/all";
import { lg } from "./http.service"

export const Service = {
  searchAll: async (q: string) => {
    const res = await lg.get<SearchAll>(`/search/all?q=${q}`)
    return res.data;
  }
}