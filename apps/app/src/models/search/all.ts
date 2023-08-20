export interface SearchAll {
  sections?: Section[];
}

export interface Section {
  type?: string;
  hits?: Hit[];
}

export interface Hit {
  highlights?: Highlight[];
  index?:      string;
  type?:       HitType;
  result?:     Result;
}

export enum HitType {
  top_hit = "top_hit",
  song = "song",
  lyric = "lyric",
  artist = "artist",
  album = "album",
  video = "video",
  article = "article",
  user = "user"
}

export interface Highlight {
  property?: string;
  value?:    string;
  snippet?:  boolean;
  ranges?:   Range[];
}

export interface Range {
  start?: number;
  end?:   number;
}

export interface Result {
  _type?:                                           string;
  annotation_count?:                                number | null;
  api_path?:                                        string;
  artist_names?:                                    null | string;
  full_title?:                                      null | string;
  header_image_thumbnail_url?:                      null | string;
  header_image_url?:                                null | string;
  id?:                                              number;
  instrumental?:                                    boolean | null;
  lyrics_owner_id?:                                 number | null;
  lyrics_state?:                                    null | string;
  lyrics_updated_at?:                               number | null;
  path?:                                            null | string;
  pyongs_count?:                                    number | null;
  relationships_index_url?:                         null | string;
  release_date_components?:                         ReleaseDateComponents | null;
  release_date_for_display?:                        null | string;
  release_date_with_abbreviated_month_for_display?: null | string;
  song_art_image_thumbnail_url?:                    null | string;
  song_art_image_url?:                              null | string;
  stats?:                                           Stats | null;
  title?:                                           null | string;
  title_with_featured?:                             null | string;
  updated_by_human_at?:                             number | null;
  url?:                                             string;
  featured_artists?:                                Artist[] | null;
  primary_artist?:                                  Artist | null;
  image_url?:                                       null | string;
  index_character?:                                 null | string;
  is_meme_verified?:                                boolean | null;
  is_verified?:                                     boolean | null;
  name?:                                            null | string;
  slug?:                                            null | string;
  cover_art_thumbnail_url?:                         null | string;
  cover_art_url?:                                   null | string;
  name_with_artist?:                                null | string;
  artist?:                                          Artist | null;
  article_url?:                                     null | string;
  author_list_for_display?:                         null | string;
  dek?:                                             null | string;
  description?:                                     null | string;
  dfp_kv?:                                          DfpKv[] | null;
  duration?:                                        number | null;
  poster_attributes?:                               PosterAttributes | null;
  poster_url?:                                      null | string;
  provider?:                                        null | string;
  provider_id?:                                     null | string;
  provider_params?:                                 ProviderParam[] | null;
  short_title?:                                     null | string;
  type?:                                            null | string;
  video_attributes?:                                PosterAttributes | null;
  current_user_metadata?:                           CurrentUserMetadata | null;
  published_at?:                                    number | null;
  view_count?:                                      number | null;
  author?:                                          Author | null;
  sponsorship?:                                     Sponsorship | null;
  article_type?:                                    null | string;
  draft?:                                           boolean | null;
  featured_slot?:                                   null;
  for_homepage?:                                    boolean | null;
  for_mobile?:                                      boolean | null;
  generic_sponsorship?:                             boolean | null;
  preview_image?:                                   null | string;
  sponsor_image?:                                   null;
  sponsor_image_style?:                             null | string;
  sponsor_link?:                                    null | string;
  sponsor_phrase?:                                  null | string;
  sponsored?:                                       boolean | null;
  votes_total?:                                     number | null;
  about_me_summary?:                                null | string;
  avatar?:                                          Avatar | null;
  human_readable_role_for_display?:                 null | string;
  iq?:                                              number | null;
  login?:                                           null | string;
  role_for_display?:                                null | string;
}

export interface Artist {
  _type?:            Type;
  api_path?:         string;
  header_image_url?: string;
  id?:               number;
  image_url?:        string;
  index_character?:  IndexCharacter;
  is_meme_verified?: boolean;
  is_verified?:      boolean;
  name?:             string;
  slug?:             string;
  url?:              string;
  iq?:               number | null;
}

export enum Type {
  Artist = "artist",
}

export enum IndexCharacter {
  A = "a",
  E = "e",
  T = "t",
}

export interface Author {
  _type?:                           string;
  about_me_summary?:                string;
  api_path?:                        string;
  avatar?:                          Avatar;
  header_image_url?:                string;
  human_readable_role_for_display?: string;
  id?:                              number;
  iq?:                              number;
  is_meme_verified?:                boolean;
  is_verified?:                     boolean;
  login?:                           string;
  name?:                            string;
  role_for_display?:                string;
  url?:                             string;
  current_user_metadata?:           CurrentUserMetadata;
}

export interface Avatar {
  tiny?:   Medium;
  thumb?:  Medium;
  small?:  Medium;
  medium?: Medium;
}

export interface Medium {
  url?:          string;
  bounding_box?: PosterAttributes;
}

export interface PosterAttributes {
  height?: number;
  width?:  number;
}

export interface CurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: ExcludedPermission[];
  interactions?:         Interactions | null;
}

export enum ExcludedPermission {
  Follow = "follow",
  ViewRelevanceReason = "view_relevance_reason",
}

export interface Interactions {
  following?: boolean;
}

export interface DfpKv {
  name?:   string;
  values?: string[];
}

export interface ProviderParam {
  name?:  string;
  value?: string;
}

export interface ReleaseDateComponents {
  year?:  number;
  month?: number;
  day?:   number;
}

export interface Sponsorship {
  _type?:               string;
  api_path?:            string;
  sponsor_image?:       null;
  sponsor_image_style?: string;
  sponsor_link?:        null | string;
  sponsor_phrase?:      null | string;
  sponsored?:           boolean;
}

export interface Stats {
  unreviewed_annotations?: number;
  concurrents?:            number | null;
  hot?:                    boolean;
  pageviews?:              number;
}
