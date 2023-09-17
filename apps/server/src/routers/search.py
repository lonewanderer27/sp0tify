from fastapi import APIRouter, Depends, Query
from typing import Union, Literal, Annotated
from ..genius import genius
from pprint import pprint
from .utils import verify_query
from src.models.search import Search, Section

router = APIRouter(
    prefix="/search", dependencies=[Depends(verify_query)], tags=["Search"])


@router.get("/", description="Searches Genius.", response_model=Search)
async def search(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 50.", le=50, ge=0)] = None,
    page: Union[int, None] = Query(
        None, description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)"),
    type: Literal['song', 'lyric', 'artist', 'album', 'video', 'article', 'multi'] = Query(
        'song', description="Type of item to search for")):
    res = genius.search(q, per_page, page, type)
    return res


@router.get(
        "/all", 
        description="Searches all types. Including: albums, articles, lyrics, songs, users and videos.",
        response_model=Search)
async def search_all(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 5 for this method.", le=50, ge=0)] = None,
    page: Union[int, None] = Query(
        None, description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)")
):
    res = genius.search_all(q, per_page, page)

    pprint(res, indent=2)
    return res


@router.get("/albums", response_model=Search)
async def search_albums(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 50.", le=50, ge=0)] = None,
    page: Annotated[Union[int, None], Query(
        description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)")] = None
):
    res = genius.search_albums(q, per_page, page)

    pprint(res, indent=2)
    return res


@router.get("/artists", description="Searches the artists on Genius.", response_model=Search)
async def search_artists(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 50.", le=50, ge=0)] = None,
    page: Union[int, None] = Query(
        None, description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)"),
):
    res = genius.search_artists(q, per_page, page)

    pprint(res, indent=2)
    return res


@router.get("/songs", response_model=Search)
async def search_songs(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 5 for this method.", le=50, ge=0)] = None,
    page: Union[int, None] = Query(
        None, description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)"),
):
    res = genius.search_songs(q, per_page, page)

    pprint(res, indent=2)
    return res


@router.get("/lyrics", description="Searches songs using lyrics", response_model=Search)
async def search_lyrics(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 50.", le=50, ge=0)] = None,
    page: Annotated[Union[int, None], Query(
        description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)")] = None
):
    res = genius.search_lyrics(q, per_page, page)

    pprint(res, indent=2)
    return res


@router.get("/videos", description="Searches videos on Genius.", response_model=Search)
async def search_videos(
    q=Query(description="A term to search"),
    per_page: Annotated[Union[int, None], Query(
        description="Number of results to return per page. It can’t be more than 50.", le=50, ge=0)] = None,
    page: Annotated[Union[int, None], Query(
        description="Paginated offset (e.g., per_page=5&page=3 returns songs 11-15)")] = None
):
    res = genius.search_videos(q, per_page, page)

    pprint(res, indent=2)
    return res
