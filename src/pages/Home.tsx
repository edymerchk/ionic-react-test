import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonBadge,
  IonNote,
  IonFab,
  IonFabButton,
  IonIcon

} from '@ionic/react';

import { add } from 'ionicons/icons';
import { RouteComponentProps } from "react-router";

import React from 'react';

const Home: React.FC<RouteComponentProps> = (props) => {

  let markes = [
    {name: "Tienda de la esquina", lat: 6.149831, long: -75.608522 },
    {name: "Parque de Sabaneta", lat: 6.159831, long: -75.61231 },
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Markers List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <IonList>
       {markes.map((marker) => (
         <IonItem>
          <IonLabel>
            <h1>{marker.name}</h1>
            <IonNote>{marker.lat} - {marker.long}</IonNote>
          </IonLabel>
          <IonBadge color="success" slot="end">
            5 Days
          </IonBadge>
        </IonItem>
      ))}

    </IonList>
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
  </IonContent>
    </IonPage>
  );
};

export default Home;
