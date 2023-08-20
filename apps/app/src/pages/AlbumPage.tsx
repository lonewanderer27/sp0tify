import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  heart,
  heartOutline,
  play,
  playOutline,
  timeOutline,
} from "ionicons/icons";
import { useLocation, useParams } from "react-router";
import { useMemo, useRef, useState } from "react";

import { Album } from "../services/album.service";
import AuthorChip from "../components/ArtistPill";
import InfoPills from "../components/InfoPills";
import { Track } from "../models/album/tracks";
import { useHover } from "usehooks-ts";
import { useIonLoading } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";

function AlbumPage() {
  const { id } = useParams<{ id: string }>();

  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  const info = useQuery({
    queryKey: ["album", id],
    queryFn: async () => Album.get(Number(id)),
    enabled: id.length > 0,
    refetchOnWindowFocus: false,
  });

  const tracks = useQuery({
    queryKey: ["album", id, "tracks"],
    queryFn: async () => Album.tracks(Number(id)),
    enabled: id.length > 0,
    refetchOnWindowFocus: false,
  });

  console.log("album: ", info.data);
  console.log("tracks: ", tracks.data);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{info.data?.album?.full_title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="md:ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol
              sizeXs="12"
              sizeLg="5"
              sizeXl="3"
              size="3"
              className="flex sm:justify-center"
            >
              <img
                src={info.data?.album?.cover_art_url}
                className="h-32 md:h-64 lg:h-72 xl:mr-auto"
              />
            </IonCol>
            <IonCol className="flex flex-col justify-end">
              <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                  {info.data?.album?.name}
                </h1>
                <AuthorChip
                  name={info.data?.album?.artist?.name}
                  avatar={info.data?.album?.artist?.image_url}
                />
                <InfoPills
                  date={info.data?.album?.release_date_for_display}
                  songCount={tracks.data?.tracks?.length}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="py-4">
            <IonCol size="auto">
              <IonFabButton color="success">
                <IonIcon icon={play} />
              </IonFabButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton
                color="success"
                fill="clear"
                size="large"
                onClick={toggleLike}
              >
                <IonIcon icon={like ? heart : heartOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <table className="table table-lg table-pin-rows table-pin-cols w-full text-left m-2">
              <thead>
                <tr className="text-slate-300">
                  <th className="px-4">#</th>
                  <th>Title</th>

                  <th></th>
                  <th className="hidden sm:visible">Plays</th>
                  {/* <th>
                    <IonIcon icon={timeOutline} />
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {tracks.data?.tracks
                  ?.filter((t) => t.number != null)
                  .map((track) => (
                    <SongItem key={track.number} track={track} />
                  ))}
              </tbody>
            </table>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

function SongItem(props: { track: Track }) {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  const hoverRef = useRef(null);
  const hovered = useHover(hoverRef);

  return (
    <tr ref={hoverRef} className="hover:bg-slate-800 rounded">
      <td className="px-4">{props.track.number}</td>
      <td className="py-2">
        <div className="flex flex-col">
          <span className="py-1">{props.track.song?.title}</span>
          <div className="text-slate-300">
            <span className={`text-sm hover:underline cursor-pointer`}>
              {props.track.song?.primary_artist?.name}
            </span>
            {props.track.song?.featured_artists?.map((artist) => (
              <span key={artist.id} className="text-sm">
                ,{" "}
                <span className={`hover:underline cursor-pointer`}>
                  {artist.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </td>
      <td>
        <IonButton
          className={`${hovered || like ? "visible" : "invisible"}`}
          shape="round"
          fill="clear"
          size="large"
          color="success"
          onClick={toggleLike}
        >
          <IonIcon icon={like ? heart : heartOutline} />
        </IonButton>
      </td>
      <td className="hidden sm:visible">
        {props.track.song?.stats?.pageviews}
      </td>

      {/* <td>0.0.0</td> */}
    </tr>
  );
}

export default AlbumPage;
