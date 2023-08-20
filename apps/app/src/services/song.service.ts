import { Song as SongModel } from "../models/song";
import { lg } from "./http.service"

export const Song = {
  get: async (id: string) => {
    const res = await lg.get<SongModel>(`/song/${id}`)
    return res.data;
  }
}