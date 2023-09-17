# generated by datamodel-codegen:
#   filename:  song.json
#   timestamp: 2023-08-09T03:07:54+00:00

from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field
from src.models.search import Artist


class Description(BaseModel):
    plain: Optional[str] = None


class Stats(BaseModel):
    accepted_annotations: Optional[int] = None
    contributors: Optional[int] = None
    iq_earners: Optional[int] = None
    transcribers: Optional[int] = None
    unreviewed_annotations: Optional[int] = None
    verified_annotations: Optional[int] = None
    concurrents: Optional[int] = None
    hot: bool
    pageviews: Optional[int] = None


class Interactions(BaseModel):
    pyong: Optional[bool] = None
    following: Optional[bool] = None


class CurrentUserMetadata(BaseModel):
    permissions: List[str]
    excluded_permissions: List[str]
    interactions: Optional[Interactions] = None
    relationships: Optional[Dict[str, Any]] = None
    iq_by_action: Dict[str, Any]


class Album(BaseModel):
    api_path: Optional[str] = None
    cover_art_url: Optional[str] = None
    full_title: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    release_date_for_display: Optional[str] = None
    url: Optional[str] = None
    artist: Artist


class CustomPerformance(BaseModel):
    label: Optional[str] = None
    artists: List[Artist]


class Range(BaseModel):
    content: Optional[str] = None


class ClientTimestamps(BaseModel):
    updated_by_human_at: Optional[int] = None
    lyrics_updated_at: Optional[int] = None


class Annotatable(BaseModel):
    api_path: Optional[str] = None
    client_timestamps: ClientTimestamps
    context: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    link_title: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str] = None


class Body(BaseModel):
    plain: Optional[str] = None


class Interactions1(BaseModel):
    cosign: bool
    pyong: bool
    vote: None


class BoundingBox(BaseModel):
    width: Optional[int] = None
    height: Optional[int] = None


class Tiny(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Thumb(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Small(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Medium(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Avatar(BaseModel):
    tiny: Tiny
    thumb: Thumb
    small: Small
    medium: Medium


class Interactions2(BaseModel):
    following: bool


class CurrentUserMetadata2(BaseModel):
    permissions: List
    excluded_permissions: List[str]
    interactions: Interactions2


class User(BaseModel):
    api_path: Optional[str] = None
    avatar: Avatar
    header_image_url: Optional[str] = None
    human_readable_role_for_display: Optional[str] = None
    id: Optional[int] = None
    iq: Optional[int] = None
    login: Optional[str] = None
    name: Optional[str] = None
    role_for_display: Optional[str] = None
    url: Optional[str] = None
    current_user_metadata: CurrentUserMetadata2


class Author(BaseModel):
    attribution: float
    pinned_role: None
    user: User


class Annotation(BaseModel):
    api_path: Optional[str] = None
    body: Body
    comment_count: Optional[int] = None
    community: bool
    custom_preview: None
    has_voters: bool
    id: Optional[int] = None
    pinned: bool
    share_url: Optional[str] = None
    source: None
    state: Optional[str] = None
    url: Optional[str] = None
    verified: bool
    votes_total: Optional[int] = None
    current_user_metadata: CurrentUserMetadata
    authors: List[Author]
    cosigned_by: List
    rejection_comment: None
    verified_by: None


class DescriptionAnnotation(BaseModel):
    field_type: str = Field(..., alias='_type')
    annotator_id: Optional[int] = None
    annotator_login: Optional[str] = None
    api_path: Optional[str] = None
    classification: Optional[str] = None
    fragment: Optional[str] = None
    id: Optional[int] = None
    is_description: bool
    path: Optional[str] = None
    range: Range
    song_id: Optional[int] = None
    url: Optional[str] = None
    verified_annotator_ids: List
    annotatable: Annotatable
    annotations: List[Annotation]


class CurrentUserMetadata3(BaseModel):
    permissions: List
    excluded_permissions: List[str]
    interactions: Interactions2


class LyricsMarkedStaffApprovedBy(BaseModel):
    api_path: Optional[str] = None
    avatar: Avatar
    header_image_url: Optional[str] = None
    human_readable_role_for_display: Optional[str] = None
    id: Optional[int] = None
    iq: Optional[int] = None
    login: Optional[str] = None
    name: Optional[str] = None
    role_for_display: Optional[str] = None
    url: Optional[str] = None
    current_user_metadata: CurrentUserMetadata3


class MediaItem(BaseModel):
    attribution: Optional[str] = None
    provider: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str] = None
    start: Optional[int] = None


class PrimaryArtist(BaseModel):
    api_path: Optional[str] = None
    header_image_url: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    is_meme_verified: bool
    is_verified: bool
    name: Optional[str] = None
    url: Optional[str] = None
    iq: Optional[int] = None


class ProducerArtist(BaseModel):
    api_path: Optional[str] = None
    header_image_url: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    is_meme_verified: bool
    is_verified: bool
    name: Optional[str] = None
    url: Optional[str] = None
    iq: Optional[int] = None


class ReleaseDateComponent(BaseModel):
    year: Optional[int] = None
    month: Optional[int] = None
    day: Optional[int] = None


class Song1(BaseModel):
    annotation_count: Optional[int] = None
    api_path: Optional[str] = None
    artist_names: Optional[str] = None
    full_title: Optional[str] = None
    header_image_thumbnail_url: Optional[str] = None
    header_image_url: Optional[str] = None
    id: Optional[int] = None
    lyrics_owner_id: Optional[int] = None
    lyrics_state: Optional[str] = None
    lyrics_marked_complete_by: Optional[User] = None
    path: Optional[str] = None
    pyongs_count: Optional[int]
    relationships_index_url: Optional[str] = None
    release_date_components: Optional[ReleaseDateComponent]
    release_date_for_display: Optional[str]
    release_date_with_abbreviated_month_for_display: Optional[str]
    song_art_image_thumbnail_url: Optional[str] = None
    song_art_image_url: Optional[str] = None
    stats: Stats
    title: Optional[str] = None
    title_with_featured: Optional[str] = None
    url: Optional[str] = None
    featured_artists: List
    primary_artist: PrimaryArtist


class SongRelationship(BaseModel):
    relationship_type: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str]
    songs: List[Song1]


class TranslationSong(BaseModel):
    api_path: Optional[str] = None
    id: Optional[int] = None
    language: Optional[str] = None
    lyrics_state: Optional[str] = None
    path: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None



class Tiny2(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Thumb2(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Small2(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class Medium2(BaseModel):
    url: Optional[str] = None
    bounding_box: BoundingBox


class CurrentUserMetadata4(BaseModel):
    permissions: List
    excluded_permissions: List[str]
    interactions: Interactions2


class User1(BaseModel):
    api_path: Optional[str] = None
    avatar: Avatar
    header_image_url: Optional[str] = None
    human_readable_role_for_display: Optional[str] = None
    id: Optional[int] = None
    iq: Optional[int] = None
    login: Optional[str] = None
    name: Optional[str] = None
    role_for_display: Optional[str] = None
    url: Optional[str] = None
    current_user_metadata: CurrentUserMetadata4


class VerifiedContributor(BaseModel):
    contributions: List[str]
    artist: Artist
    user: User1


class WriterArtist(BaseModel):
    api_path: Optional[str] = None
    header_image_url: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    is_meme_verified: bool
    is_verified: bool
    name: Optional[str] = None
    url: Optional[str] = None
    iq: Optional[int] = None


class Song(BaseModel):
    annotation_count: Optional[int] = None
    api_path: Optional[str] = None
    apple_music_id: Optional[str] = None
    apple_music_player_url: Optional[str] = None
    artist_names: Optional[str] = None
    description: Description
    embed_content: Optional[str] = None
    featured_video: bool
    full_title: Optional[str] = None
    header_image_thumbnail_url: Optional[str] = None
    header_image_url: Optional[str] = None
    id: Optional[int] = None
    language: Optional[str] = None
    lyrics_owner_id: Optional[int] = None
    lyrics_placeholder_reason: None
    lyrics_state: Optional[str] = None
    path: Optional[str] = None
    pyongs_count: Optional[int] = None
    recording_location: Optional[str] = None
    relationships_index_url: Optional[str] = None
    release_date: Optional[str] = None
    release_date_for_display: Optional[str] = None
    release_date_with_abbreviated_month_for_display: Optional[str] = None
    song_art_image_thumbnail_url: Optional[str] = None
    song_art_image_url: Optional[str] = None
    stats: Stats
    title: Optional[str] = None
    title_with_featured: Optional[str] = None
    url: Optional[str] = None
    current_user_metadata: CurrentUserMetadata
    album: Album
    custom_performances: List[CustomPerformance]
    description_annotation: DescriptionAnnotation
    featured_artists: List
    lyrics_marked_complete_by: Optional[User] = None
    lyrics_marked_staff_approved_by: Optional[LyricsMarkedStaffApprovedBy] = None
    media: List[MediaItem]
    primary_artist: PrimaryArtist
    producer_artists: List[ProducerArtist]
    song_relationships: List[SongRelationship]
    translation_songs: List[TranslationSong]
    verified_annotations_by: List
    verified_contributors: List[VerifiedContributor]
    verified_lyrics_by: List
    writer_artists: List[WriterArtist]


class Model(BaseModel):
    song: Song
