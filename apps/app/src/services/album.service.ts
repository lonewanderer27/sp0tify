import { AlbumModel } from "../models/album";
import { AlbumTracks } from "../models/album/tracks";
import { lg } from "./http.service"

export const Album = {
  get: async (id: number) => {
    const res = await lg.get<AlbumModel>(`/album/${id}`)
    return res.data;
  },
  tracks: async (id: number) => {
    const res = await lg.get<AlbumTracks>(`/album/${id}/tracks`)
    return res.data;
  }
}