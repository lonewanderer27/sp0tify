import { IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonToolbar } from "@ionic/react";
import { home, library, search } from "ionicons/icons";

function SidebarMenu() {
  return (
    <IonMenu className="max-w-xs">
      <IonContent>
        <IonHeader>
          <IonToolbar></IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem routerLink="/home">
            <IonIcon slot="start" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem routerLink="/search">
            <IonIcon slot="start" icon={search} />
            <IonLabel>Search</IonLabel>
          </IonItem>
          <IonItem routerLink="/library">
            <IonIcon slot="start" icon={library} />
            <IonLabel>Your Library</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter translucent={true}>
        
      </IonFooter>
    </IonMenu>
  );
}

export default SidebarMenu;
