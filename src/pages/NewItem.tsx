import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle

} from '@ionic/react';

import React from 'react';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
      <IonCardHeader>
          <IonCardTitle>Tell me your idea!</IonCardTitle>
        </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput placeholder="Your Idea"></IonInput>
            </IonItem >
            <IonButton  expand="block">
              Save!
           </IonButton>
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
