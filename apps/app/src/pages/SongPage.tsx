import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { heart, play } from "ionicons/icons";
import { useLocation, useParams } from "react-router";

import { Album } from "../services/album.service";
import AuthorChip from "../components/ArtistPill";
import InfoPills from "../components/InfoPills";
import { Song } from "../services/song.service";
import { useIonLoading } from "@ionic/react";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function SongPage() {
  const queryClient = useQueryClient();
  const [loading, dismiss] = useIonLoading();

  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const { id } = useParams<{ id: string }>();

  const query = useQuery({
    queryKey: ["song", id],
    queryFn: async () => {
      const res = await Song.get(id);
      prefetchAlbum(res.song?.album?.id);
      return res;
    },
    enabled: id.length > 0,
    refetchOnWindowFocus: false,
  });

  const prefetchAlbum = async (id?: number) => {
    if (!id) return;
    queryClient.prefetchQuery({
      queryKey: ["album", id],
      queryFn: async () => Album.get(id)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{query.data?.song?.full_title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol sizeXs="12" sizeLg="6" sizeXl="4" className="flex sm:justify-center">
              <img
                src={
                  query.data?.song?.header_image_url
                }
                className="h-48 md:h-72 lg:h-96 w-auto"
              />
            </IonCol>
            <IonCol className="flex flex-col justify-end" sizeXs="12" sizeLg="6">
              <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                  {query.data?.song?.title}
                </h1>
                <AuthorChip
                  name={query.data?.song?.primary_artist?.name}
                  avatar={query.data?.song?.primary_artist?.image_url}
                />
                <InfoPills
                  date={
                    query.data?.song
                      ?.release_date_with_abbreviated_month_for_display
                  }
                  songCount={1}
                  album={query.data?.song?.album}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonButton size="large" color="success">
                <IonIcon icon={play} />
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton size="large" color="success">
                <IonIcon icon={heart} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default SongPage;
