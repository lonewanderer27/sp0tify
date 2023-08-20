import "./Tab2.css";

import { HitType, SearchAll } from "../models/search/all";
import {
  InputCustomEvent,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Album } from "../services/album.service";
import SearchSections from "../components/SearchSections";
import SearchTags from "../components/SeachTags";
import { Service } from "../services/search.service";
import { Song } from "../services/song.service";
import { camera } from "ionicons/icons";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Search: React.FC = () => {
  const qc = useQueryClient();

  const [q, setQ] = useState("");
  const handleChange = (e: InputCustomEvent) => {
    console.log(e.target.value?.toString());
    setQ(e.target.value?.toString() || "");
  };

  const query = useQuery({
    queryKey: ["search", q],
    queryFn: async () => {
      const res = await Service.searchAll(q);
      prefetchTopResults(res);
      return res;
    },
    refetchOnWindowFocus: false,
    enabled: q.length > 0,
  });

  const prefetchTopResults = async (res: SearchAll) => {
    if (!res.sections) {
      console.log("No sections found");
      return;
    }

    res.sections
      .filter((i) => i.type == HitType.top_hit || i.type == HitType.lyric)
      .forEach((section) => {
        section?.hits?.forEach((hit) => {
          console.log("Prefetching song: ", hit?.result?.id);
          qc.prefetchQuery({
            queryKey: [hit.type, hit?.result?.id],
            queryFn: async () => {
              console.log(`${hit.type}: ${hit?.result?.id}`)
              switch (hit?.type) {
                case HitType.song: {
                  return await Song.get(hit?.result?.id!+"");
                }
                case HitType.album:
                  return await Album.get(hit?.result?.id!);
              }
            }
        });
      });
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={camera} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          debounce={500}
          fill="solid"
          placeholder="What do you want to listen to?"
          onIonInput={handleChange}
        />
        <SearchTags sections={query.data?.sections} />
        <SearchSections sections={query.data?.sections} />
      </IonContent>
    </IonPage>
  );
};

export default Search;
