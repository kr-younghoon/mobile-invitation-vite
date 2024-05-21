import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

function MapComponent() {
    const mapContainerStyle = {
        width: '320px',
        height: '320px',
    };

    const center = useMemo(
        () => ({
            lat: 37.50020217895508,
            lng: 126.48755645751953,
        }),
        []
    );

    const myStyles = [
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
        },
    ];

    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    return (
        <LoadScriptNext googleMapsApiKey={`${googleApiKey}`}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                options={{ disableDefaultUI: true, styles: myStyles }}
                zoom={15}
            >
                <MarkerF position={center} />
            </GoogleMap>
        </LoadScriptNext>
    );
}
export default MapComponent;
