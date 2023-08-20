import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar } from "@ionic/react";

import { closeOutline } from "ionicons/icons";

function Activity() {
  return (
    <IonMenu className="max-w-xs" side="end">
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon src={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle>Friends Activity</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Activity;