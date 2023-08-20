export interface AlbumTracks {
  tracks?:    Track[];
  next_page?: number;
}

export interface Track {
  number?: number | null;
  song?:   Song;
}

export interface Song {
  _type?:                                           string;
  annotation_count?:                                number;
  api_path?:                                        string;
  artist_names?:                                    string;
  full_title?:                                      string;
  header_image_thumbnail_url?:                      string;
  header_image_url?:                                string;
  id?:                                              number;
  instrumental?:                                    boolean;
  lyrics_owner_id?:                                 number;
  lyrics_state?:                                    string;
  lyrics_updated_at?:                               number;
  path?:                                            string;
  pyongs_count?:                                    number;
  relationships_index_url?:                         string;
  release_date_components?:                         ReleaseDateComponents;
  release_date_for_display?:                        string;
  release_date_with_abbreviated_month_for_display?: string;
  song_art_image_thumbnail_url?:                    string;
  song_art_image_url?:                              string;
  stats?:                                           Stats;
  title?:                                           string;
  title_with_featured?:                             string;
  updated_by_human_at?:                             number;
  url?:                                             string;
  featured_artists?:                                Artist[];
  primary_artist?:                                  Artist;
}

export interface Artist {
  _type?:            string;
  api_path?:         string;
  header_image_url?: string;
  id?:               number;
  image_url?:        string;
  index_character?:  string;
  is_meme_verified?: boolean;
  is_verified?:      boolean;
  name?:             string;
  slug?:             string;
  url?:              string;
  iq?:               number;
}

export interface ReleaseDateComponents {
  year?:  number;
  month?: number;
  day?:   number;
}

export interface Stats {
  unreviewed_annotations?: number;
  hot?:                    boolean;
  pageviews?:              number;
  concurrents?:            number | null;
}
