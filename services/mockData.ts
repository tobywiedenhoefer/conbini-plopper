import { LocationObject } from "expo-location";

import { Place } from "~/interfaces/mapInterfaces";
import { Region } from "~/types/mapTypes";

const USE_MOCK_DATA = true;
export default USE_MOCK_DATA;

export const TOKYO_REGION: Region = {
  latitude: 35.6595,
  longitude: 139.7006,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export const TOKYO_LOCATION_OBJ: LocationObject = {
  coords: {
    latitude: TOKYO_REGION.latitude,
    longitude: TOKYO_REGION.longitude,
    altitude: null,
    accuracy: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: 0,
};

type MockUserLocation = {
  austin: LocationObject;
  tokyo: LocationObject;
};

export const mockUserLocation: MockUserLocation = {
  austin: {
    coords: {
      accuracy: 14.238308719174041,
      altitude: 184.5040377229452,
      altitudeAccuracy: 10.084215294835358,
      heading: -1,
      latitude: 30.298405554326774,
      longitude: -97.7002121591571,
      speed: 0,
    },
    timestamp: 0,
  },
  tokyo: TOKYO_LOCATION_OBJ,
};

type MockNearbyPlaces = {
  austin: Array<Place>;
  tokyo: Array<Place>;
};

export const mockNearbyPlaces: MockNearbyPlaces = {
  austin: [
    {
      coords: {
        latitude: 30.30390109999999,
        longitude: -97.71577529999999,
      },
      geometry: {
        location: {
          lat: 30.30390109999999,
          lng: -97.71577529999999,
        },
        viewport: {
          northeast: {
            lat: 0,
            lng: 0,
          },
          southwest: {
            lat: 0,
            lng: 0,
          },
        },
      },
      id: "ChIJIQUltgvKRIYR4UJ4yaRJkec",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: {
            lat: 0,
            lng: 0,
          },
          viewport: {
            northeast: {
              lat: 0,
              lng: 0,
            },
            southwest: {
              lat: 0,
              lng: 0,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Highland Market",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJIQUltgvKRIYR4UJ4yaRJkec",
        plus_code: {
          compound_code: "873M+HP Austin, Texas",
          global_code: "8624873M+HP",
        },
        rating: 4.1,
        reference: "ChIJIQUltgvKRIYR4UJ4yaRJkec",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 29,
        vicinity: "4511 Airport Blvd, Austin",
        address_components: undefined,
        adr_address: undefined,
        formatted_address: undefined,
        icon_mask_uri: undefined,
        url: undefined,
      },
      name: "Highland Market",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.297707, longitude: -97.686944 },
      geometry: {
        location: { lat: 30.297707, lng: -97.686944 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJrbZBthy2RIYRX_fN2zMlXFw",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "E Z Stop Grocery & Gas",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJrbZBthy2RIYRX_fN2zMlXFw",
        plus_code: {
          compound_code: "78X7+36 Austin, Texas",
          global_code: "862478X7+36",
        },
        rating: 3.2,
        reference: "ChIJrbZBthy2RIYRX_fN2zMlXFw",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "atm",
          "finance",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 15,
        vicinity: "5029 Manor Rd, Austin",
        address_components: undefined,
        adr_address: undefined,
        formatted_address: undefined,
        icon_mask_uri: undefined,
        url: undefined,
      },
      name: "E Z Stop Grocery & Gas",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3000118, longitude: -97.68553519999999 },
      geometry: {
        location: { lat: 30.3000118, lng: -97.68553519999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJDz2kGh22RIYR4WFl69rZd-w",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Stop N Express (Valero)",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJDz2kGh22RIYR4WFl69rZd-w",
        plus_code: {
          compound_code: "78X7+XR Austin, Texas",
          global_code: "862478X7+XR",
        },
        rating: 2.9,
        reference: "ChIJDz2kGh22RIYR4WFl69rZd-w",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "gas_station",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 14,
        vicinity: "5301 Manor Rd, Austin",
        address_components: undefined,
        adr_address: undefined,
        formatted_address: undefined,
        icon_mask_uri: undefined,
        url: undefined,
      },
      name: "Stop N Express (Valero)",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3110088, longitude: -97.7071139 },
      geometry: {
        location: { lat: 30.3110088, lng: -97.7071139 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJj-M2PQXKRIYRiWiNsSOa3gE",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Premos Food Mart",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJj-M2PQXKRIYRiWiNsSOa3gE",
        plus_code: {
          compound_code: "876V+C5 Austin, Texas",
          global_code: "8624876V+C5",
        },
        rating: 3,
        reference: "ChIJj-M2PQXKRIYRiWiNsSOa3gE",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 17,
        vicinity: "5327 Cameron Rd, Austin",
        address_components: undefined,
        adr_address: undefined,
        formatted_address: undefined,
        icon_mask_uri: undefined,
        url: undefined,
      },
      name: "Premos Food Mart",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.2893903, longitude: -97.70764899999999 },
      geometry: {
        location: { lat: 30.2893903, lng: -97.70764899999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJE41KNeW1RIYRfUYYhG9udoM",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "7-Eleven",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJE41KNeW1RIYRfUYYhG9udoM",
        plus_code: {
          compound_code: "77QR+QW Austin, Texas",
          global_code: "862477QR+QW",
        },
        price_level: 1,
        rating: 2.4,
        reference: "ChIJE41KNeW1RIYRfUYYhG9udoM",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 53,
        vicinity: "3848 Airport Blvd, Austin",
        address_components: undefined,
        adr_address: undefined,
        formatted_address: undefined,
        icon_mask_uri: undefined,
        url: undefined,
      },
      name: "7-Eleven",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3117348, longitude: -97.68584229999999 },
      geometry: {
        location: { lat: 30.3117348, lng: -97.68584229999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJM9YnF-XJRIYRaNHSnd3hfjQ",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Gaston Food Mart",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJM9YnF-XJRIYRaNHSnd3hfjQ",
        plus_code: {
          compound_code: "8867+MM Austin, Texas",
          global_code: "86248867+MM",
        },
        rating: 3.3,
        reference: "ChIJM9YnF-XJRIYRaNHSnd3hfjQ",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 7,
        vicinity: "2157 Gaston Pl Dr, Austin",
      },
      name: "Gaston Food Mart",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.2998949, longitude: -97.6864707 },
      geometry: {
        location: { lat: 30.2998949, lng: -97.6864707 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJKw1jIx22RIYRsMJ-EYQGwq4",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Sam's Mini Mart",
        opening_hours: { open_now: true },
        place_id: "ChIJKw1jIx22RIYRsMJ-EYQGwq4",
        plus_code: {
          compound_code: "78X7+XC Austin, Texas",
          global_code: "862478X7+XC",
        },
        rating: 4,
        reference: "ChIJKw1jIx22RIYRsMJ-EYQGwq4",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "gas_station",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 2,
        vicinity: "5210 Manor Rd, Austin",
      },
      name: "Sam's Mini Mart",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3123022, longitude: -97.71502749999999 },
      geometry: {
        location: { lat: 30.3123022, lng: -97.71502749999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJ2Tg_DxLKRIYRHN1s4jdHrvI",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "1 Stop Grocery",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJ2Tg_DxLKRIYRHN1s4jdHrvI",
        plus_code: {
          compound_code: "876P+W2 Austin, Texas",
          global_code: "8624876P+W2",
        },
        rating: 3.1,
        reference: "ChIJ2Tg_DxLKRIYRHN1s4jdHrvI",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 12,
        vicinity: "5101 Airport Blvd, Austin",
      },
      name: "1 Stop Grocery",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.2845872, longitude: -97.7151813 },
      geometry: {
        location: { lat: 30.2845872, lng: -97.7151813 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJxZbFIuy1RIYRlCsEEtFTLpQ",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "RBM Food Mart",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJxZbFIuy1RIYRlCsEEtFTLpQ",
        plus_code: {
          compound_code: "77MM+RW Austin, Texas",
          global_code: "862477MM+RW",
        },
        rating: 4.8,
        reference: "ChIJxZbFIuy1RIYRlCsEEtFTLpQ",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 20,
        vicinity: "2601 Manor Rd, Austin",
      },
      name: "RBM Food Mart",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.29835559999999, longitude: -97.68626189999999 },
      geometry: {
        location: { lat: 30.29835559999999, lng: -97.68626189999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJKXKoGEy3RIYR6DaklyZ-Yk4",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "7-Eleven",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJKXKoGEy3RIYR6DaklyZ-Yk4",
        plus_code: {
          compound_code: "78X7+8F Austin, Texas",
          global_code: "862478X7+8F",
        },
        rating: 4.3,
        reference: "ChIJKXKoGEy3RIYR6DaklyZ-Yk4",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 6,
        vicinity: "5107 Manor Rd BLDG 1, Austin",
      },
      name: "7-Eleven",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3130752, longitude: -97.7045632 },
      geometry: {
        location: { lat: 30.3130752, lng: -97.7045632 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJ39-INhvKRIYRCrboVeXrXx8",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Walnut Market",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJ39-INhvKRIYRCrboVeXrXx8",
        plus_code: {
          compound_code: "877W+65 Austin, Texas",
          global_code: "8624877W+65",
        },
        rating: 5,
        reference: "ChIJ39-INhvKRIYRCrboVeXrXx8",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 3,
        vicinity: "5517 Cameron Rd, Austin",
      },
      name: "Walnut Market",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.3047737, longitude: -97.69890079999999 },
      geometry: {
        location: { lat: 30.3047737, lng: -97.69890079999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJ0TDYyQHKRIYRyyMwgxcEbUc",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Speedy Stop",
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: "ChIJ0TDYyQHKRIYRyyMwgxcEbUc",
        plus_code: {
          compound_code: "8832+WC Austin, Texas",
          global_code: "86248832+WC",
        },
        rating: 2.4,
        reference: "ChIJ0TDYyQHKRIYRyyMwgxcEbUc",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "gas_station",
          "car_wash",
          "store",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 89,
        vicinity: "1660 E 51st St, Austin",
      },
      name: "Speedy Stop",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.293261, longitude: -97.7160431 },
      geometry: {
        location: { lat: 30.293261, lng: -97.7160431 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJb9eQvwe1RIYR_XxkbTqFddc",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        icon_background_color: "#4B96F3",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
        name: "Monarch Food Mart",
        photos: [[Object]],
        place_id: "ChIJb9eQvwe1RIYR_XxkbTqFddc",
        plus_code: {
          compound_code: "77VM+8H Austin, Texas",
          global_code: "862477VM+8H",
        },
        rating: 2.9,
        reference: "ChIJb9eQvwe1RIYR_XxkbTqFddc",
        scope: "GOOGLE",
        types: [
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 10,
        vicinity: "1404 E 38th 1/2 St, Austin",
      },
      name: "Monarch Food Mart",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.2853682, longitude: -97.68333539999999 },
      geometry: {
        location: { lat: 30.2853682, lng: -97.68333539999999 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJN_oMXhG2RIYRsRPiS2_cBqw",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png",
        icon_background_color: "#909CE1",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/gas_pinlet",
        name: "MLK Express",
        opening_hours: { open_now: true },
        place_id: "ChIJN_oMXhG2RIYRsRPiS2_cBqw",
        plus_code: {
          compound_code: "78P8+4M Austin, Texas",
          global_code: "862478P8+4M",
        },
        rating: 4.6,
        reference: "ChIJN_oMXhG2RIYRsRPiS2_cBqw",
        scope: "GOOGLE",
        types: [
          "gas_station",
          "convenience_store",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 13,
        vicinity: "4509 E Martin Luther King Jr Blvd, Austin",
      },
      name: "MLK Express",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
    {
      coords: { latitude: 30.2998812, longitude: -97.6862974 },
      geometry: {
        location: { lat: 30.2998812, lng: -97.6862974 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      },
      id: "ChIJkVaLJB22RIYRwqGohLq9RYc",
      mapsObject: {
        business_status: "OPERATIONAL",
        geometry: {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png",
        icon_background_color: "#909CE1",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/gas_pinlet",
        name: "Shell",
        opening_hours: { open_now: true },
        place_id: "ChIJkVaLJB22RIYRwqGohLq9RYc",
        plus_code: {
          compound_code: "78X7+XF Austin, Texas",
          global_code: "862478X7+XF",
        },
        price_level: 2,
        rating: 3.6,
        reference: "ChIJkVaLJB22RIYRwqGohLq9RYc",
        scope: "GOOGLE",
        types: [
          "gas_station",
          "atm",
          "convenience_store",
          "finance",
          "store",
          "food",
          "point_of_interest",
          "establishment",
        ],
        user_ratings_total: 30,
        vicinity: "5210 Manor Rd, Austin",
      },
      name: "Shell",
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
    },
  ],
  tokyo: [],
};
