export interface AlbumModel {
  album?: Album;
}

export interface Album {
  _type?:                    string;
  api_path?:                 string;
  comment_count?:            number;
  cover_art_thumbnail_url?:  string;
  cover_art_url?:            string;
  custom_header_image_url?:  null;
  description_preview?:      string;
  full_title?:               string;
  header_image_url?:         string;
  id?:                       number;
  lock_state?:               string;
  name?:                     string;
  name_with_artist?:         string;
  pyongs_count?:             number;
  release_date?:             Date;
  release_date_components?:  ReleaseDateComponents;
  release_date_for_display?: string;
  tracking_paths?:           TrackingPaths;
  url?:                      string;
  current_user_metadata?:    AlbumCurrentUserMetadata;
  song_pageviews?:           number;
  artist?:                   Artist;
  cover_arts?:               CoverArt[];
  description_annotation?:   DescriptionAnnotation;
  performance_groups?:       PerformanceGroup[];
  song_performances?:        PerformanceGroup[];
}

export interface Artist {
  _type?:            Type;
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

export enum Type {
  Artist = "artist",
}

export interface CoverArt {
  _type?:                 string;
  annotated?:             boolean;
  api_path?:              string;
  id?:                    number;
  image_url?:             string;
  thumbnail_image_url?:   string;
  url?:                   string;
  current_user_metadata?: CoverArtCurrentUserMetadata;
}

export interface CoverArtCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
}

export interface AlbumCurrentUserMetadata {
  permissions?:          string[];
  excluded_permissions?: string[];
  interactions?:         PurpleInteractions;
}

export interface PurpleInteractions {
  pyong?: boolean;
}

export interface DescriptionAnnotation {
  _type?:                  string;
  annotator_id?:           number;
  annotator_login?:        string;
  api_path?:               string;
  classification?:         string;
  fragment?:               string;
  id?:                     number;
  ios_app_url?:            string;
  is_description?:         boolean;
  is_image?:               boolean;
  path?:                   string;
  range?:                  Range;
  song_id?:                null;
  url?:                    string;
  verified_annotator_ids?: any[];
  current_user_metadata?:  DescriptionAnnotationCurrentUserMetadata;
  tracking_paths?:         TrackingPaths;
  twitter_share_message?:  string;
  annotatable?:            Annotatable;
  annotations?:            Annotation[];
}

export interface Annotatable {
  _type?:      string;
  api_path?:   string;
  context?:    string;
  id?:         number;
  image_url?:  string;
  link_title?: string;
  title?:      string;
  type?:       string;
  url?:        string;
}

export interface Annotation {
  _type?:                 string;
  api_path?:              string;
  being_created?:         boolean;
  body?:                  Body;
  comment_count?:         number;
  community?:             boolean;
  created_at?:            number;
  custom_preview?:        null;
  deleted?:               boolean;
  embed_content?:         string;
  has_voters?:            boolean;
  id?:                    number;
  needs_exegesis?:        boolean;
  pinned?:                boolean;
  proposed_edit_count?:   number;
  pyongs_count?:          null;
  referent_id?:           number;
  share_url?:             string;
  source?:                null;
  state?:                 string;
  twitter_share_message?: string;
  url?:                   string;
  verified?:              boolean;
  votes_total?:           number;
  current_user_metadata?: AnnotationCurrentUserMetadata;
  accepted_by?:           AcceptedBy;
  authors?:               Author[];
  cosigned_by?:           any[];
  created_by?:            AcceptedBy;
  rejection_comment?:     null;
  top_comment?:           TopComment;
  verified_by?:           null;
}

export interface AcceptedBy {
  _type?:                           string;
  about_me_summary?:                string;
  api_path?:                        string;
  avatar?:                          Avatar;
  header_image_url?:                string;
  human_readable_role_for_display?: null | string;
  id?:                              number;
  iq?:                              number;
  is_meme_verified?:                boolean;
  is_verified?:                     boolean;
  login?:                           string;
  name?:                            string;
  role_for_display?:                null | string;
  url?:                             string;
  current_user_metadata?:           AcceptedByCurrentUserMetadata;
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

export interface AcceptedByCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
  interactions?:         FluffyInteractions;
}

export interface FluffyInteractions {
  following?: boolean;
}

export interface Author {
  _type?:       string;
  attribution?: number;
  pinned_role?: null;
  user?:        AcceptedBy;
}

export interface Body {
  plain?: string;
}

export interface AnnotationCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
  interactions?:         TentacledInteractions;
  iq_by_action?:         Relationships;
}

export interface TentacledInteractions {
  cosign?: boolean;
  pyong?:  boolean;
  vote?:   null;
}

export interface Relationships {
}

export interface TopComment {
  _type?:                 string;
  api_path?:              string;
  body?:                  Body;
  commentable_id?:        number;
  commentable_type?:      string;
  created_at?:            number;
  has_voters?:            boolean;
  id?:                    number;
  pinned_role?:           null;
  votes_total?:           number;
  current_user_metadata?: TopCommentCurrentUserMetadata;
  anonymous_author?:      null;
  author?:                AcceptedBy;
  reason?:                null;
}

export interface TopCommentCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
  interactions?:         StickyInteractions;
}

export interface StickyInteractions {
  vote?: null;
}

export interface DescriptionAnnotationCurrentUserMetadata {
  permissions?:          any[];
  excluded_permissions?: string[];
  relationships?:        Relationships;
}

export interface Range {
  content?: string;
}

export interface TrackingPaths {
  aggregate?:  string;
  concurrent?: string;
}

export interface PerformanceGroup {
  label?:   string;
  artists?: Artist[];
}

export interface ReleaseDateComponents {
  year?:  number;
  month?: number;
  day?:   number;
}
