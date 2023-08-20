export interface Song {
  song?: SongSong;
}

export interface SongSong {
  annotation_count?:                                number;
  api_path?:                                        string;
  apple_music_id?:                                  string;
  apple_music_player_url?:                          string;
  artist_names?:                                    string;
  description?:                                     Description;
  embed_content?:                                   string;
  featured_video?:                                  boolean;
  full_title?:                                      string;
  header_image_thumbnail_url?:                      string;
  header_image_url?:                                string;
  id?:                                              number;
  language?:                                        string;
  lyrics_owner_id?:                                 number;
  lyrics_placeholder_reason?:                       null;
  lyrics_state?:                                    string;
  path?:                                            string;
  pyongs_count?:                                    number;
  recording_location?:                              null;
  relationships_index_url?:                         string;
  release_date?:                                    Date;
  release_date_for_display?:                        string;
  release_date_with_abbreviated_month_for_display?: string;
  song_art_image_thumbnail_url?:                    string;
  song_art_image_url?:                              string;
  stats?:                                           Stats;
  title?:                                           string;
  title_with_featured?:                             string;
  url?:                                             string;
  current_user_metadata?:                           SongCurrentUserMetadata;
  album?:                                           Album;
  custom_performances?:                             CustomPerformance[];
  description_annotation?:                          DescriptionAnnotation;
  featured_artists?:                                any[];
  lyrics_marked_complete_by?:                       null;
  lyrics_marked_staff_approved_by?:                 null;
  media?:                                           Media[];
  primary_artist?:                                  Artist;
  producer_artists?:                                Artist[];
  song_relationships?:                              SongRelationship[];
  translation_songs?:                               TranslationSong[];
  verified_annotations_by?:                         any[];
  verified_contributors?:                           any[];
  verified_lyrics_by?:                              any[];
  writer_artists?:                                  Artist[];
}

export interface Album {
  api_path?:                 string;
  cover_art_url?:            string;
  full_title?:               string;
  id?:                       number;
  name?:                     string;
  release_date_for_display?: string;
  url?:                      string;
  artist?:                   Artist;
}

export interface Artist {
  _type?:            null;
  api_path?:         string;
  header_image_url?: string;
  id?:               number;
  image_url?:        string;
  index_character?:  null;
  is_meme_verified?: boolean;
  is_verified?:      boolean;
  name?:             string;
  slug?:             null;
  url?:              string;
  iq?:               number | null;
}

export interface SongCurrentUserMetadata {
  permissions?:          string[];
  excluded_permissions?: string[];
  interactions?:         PurpleInteractions;
  relationships?:        IqByAction | null;
  iq_by_action?:         IqByAction;
}

export interface PurpleInteractions {
  pyong?:     boolean;
  following?: boolean | null;
}

export interface IqByAction {
}

export interface CustomPerformance {
  label?:   string;
  artists?: Artist[];
}

export interface Description {
  plain?: string;
}

export interface DescriptionAnnotation {
  _type?:                  string;
  annotator_id?:           number;
  annotator_login?:        string;
  api_path?:               string;
  classification?:         string;
  fragment?:               string;
  id?:                     number;
  is_description?:         boolean;
  path?:                   string;
  range?:                  Range;
  song_id?:                number;
  url?:                    string;
  verified_annotator_ids?: any[];
  annotatable?:            Annotatable;
  annotations?:            Annotation[];
}

export interface Annotatable {
  api_path?:          string;
  client_timestamps?: ClientTimestamps;
  context?:           string;
  id?:                number;
  image_url?:         string;
  link_title?:        string;
  title?:             string;
  type?:              string;
  url?:               string;
}

export interface ClientTimestamps {
  updated_by_human_at?: number;
  lyrics_updated_at?:   number;
}

export interface Annotation {
  api_path?:              string;
  body?:                  Description;
  comment_count?:         number;
  community?:             boolean;
  custom_preview?:        null;
  has_voters?:            boolean;
  id?:                    number;
  pinned?:                boolean;
  share_url?:             string;
  source?:                null;
  state?:                 string;
  url?:                   string;
  verified?:              boolean;
  votes_total?:           number;
  current_user_metadata?: SongCurrentUserMetadata;
  authors?:               Author[];
  cosigned_by?:           any[];
  rejection_comment?:     null;
  verified_by?:           null;
}

export interface Author {
  attribution?: number;
  pinned_role?: null;
  user?:        User;
}

export interface User {
  api_path?:                        string;
  avatar?:                          Avatar;
  header_image_url?:                string;
  human_readable_role_for_display?: string;
  id?:                              number;
  iq?:                              number;
  login?:                           string;
  name?:                            string;
  role_for_display?:                string;
  url?:                             string;
  current_user_metadata?:           UserCurrentUserMetadata;
}

export interface Avatar {
  tiny?:   Medium;
  thumb?:  Medium;
  small?:  Medium;
  medium?: Medium;
}

export interface Medium {
  url?:          string;
  bounding_box?: BoundingBox;
}

export interface BoundingBox {
  width?:  number;
  height?: number;
}

export interface UserCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
  interactions?:         FluffyInteractions;
}

export interface FluffyInteractions {
  following?: boolean;
}

export interface Range {
  content?: string;
}

export interface Media {
  attribution?: null | string;
  provider?:    string;
  type?:        string;
  url?:         string;
  start?:       number | null;
}

export interface SongRelationship {
  relationship_type?: string;
  type?:              string;
  url?:               null;
  songs?:             SongElement[];
}

export interface SongElement {
  annotation_count?:                                number;
  api_path?:                                        string;
  artist_names?:                                    string;
  full_title?:                                      string;
  header_image_thumbnail_url?:                      string;
  header_image_url?:                                string;
  id?:                                              number;
  lyrics_owner_id?:                                 number;
  lyrics_state?:                                    string;
  path?:                                            string;
  pyongs_count?:                                    number | null;
  relationships_index_url?:                         string;
  release_date_components?:                         ReleaseDateComponents;
  release_date_for_display?:                        string;
  release_date_with_abbreviated_month_for_display?: string;
  song_art_image_thumbnail_url?:                    string;
  song_art_image_url?:                              string;
  stats?:                                           Stats;
  title?:                                           string;
  title_with_featured?:                             string;
  url?:                                             string;
  featured_artists?:                                any[];
  primary_artist?:                                  Artist;
}

export interface ReleaseDateComponents {
  year?:  number;
  month?: number;
  day?:   number;
}

export interface Stats {
  accepted_annotations?:   number | null;
  contributors?:           number | null;
  iq_earners?:             number | null;
  transcribers?:           number | null;
  unreviewed_annotations?: number;
  verified_annotations?:   number | null;
  concurrents?:            null;
  hot?:                    boolean;
  pageviews?:              number | null;
}

export interface TranslationSong {
  api_path?:     string;
  id?:           number;
  language?:     string;
  lyrics_state?: string;
  path?:         string;
  title?:        string;
  url?:          string;
}
