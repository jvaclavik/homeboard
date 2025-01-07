
// const departureItems = [
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:38:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:40:00+01:00",
//         "delay_seconds": 120,
//         "minutes": 3
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_23810_241223",
//         "headsign": "Zahradní Město",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-8292",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:42:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:42:52+01:00",
//         "delay_seconds": 52,
//         "minutes": 6
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "25"
//       },
//       "trip": {
//         "id": "25_13058_241125",
//         "headsign": "Výstaviště",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-8335",
//         "is_wheelchair_accessible": false,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:43:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:43:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 6
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 7,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_23899_241223",
//         "headsign": "Nádraží Hostivař",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-9305",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:48:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:48:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 11
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_23815_250106",
//         "headsign": "Zahradní Město",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-8554",
//         "is_wheelchair_accessible": false,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:52:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:52:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 15
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "25"
//       },
//       "trip": {
//         "id": "25_13324_241223",
//         "headsign": "Výstaviště",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-9156",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:53:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:53:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 16
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 7,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_21551_241223",
//         "headsign": "Nádraží Hostivař",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-9311",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T17:58:00+01:00",
//         "timestamp_predicted": "2025-01-06T17:58:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 21
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_8819_250106",
//         "headsign": "Zahradní Město",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-9388",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": true,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T18:02:00+01:00",
//         "timestamp_predicted": "2025-01-06T18:02:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 25
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 10,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "25"
//       },
//       "trip": {
//         "id": "25_13336_241223",
//         "headsign": "Výstaviště",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-9124",
//         "is_wheelchair_accessible": true,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T18:03:00+01:00",
//         "timestamp_predicted": "2025-01-06T18:03:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 26
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 7,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "22"
//       },
//       "trip": {
//         "id": "22_15571_250106",
//         "headsign": "Nádraží Hostivař",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-8556",
//         "is_wheelchair_accessible": false,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     },
//     {
//       "departure": {
//         "timestamp_scheduled": "2025-01-06T18:05:00+01:00",
//         "timestamp_predicted": "2025-01-06T18:05:00+01:00",
//         "delay_seconds": 0,
//         "minutes": 28
//       },
//       "stop": {
//         "id": "U362Z1P",
//         "sequence": 2,
//         "platform_code": "A"
//       },
//       "route": {
//         "type": "tram",
//         "short_name": "23"
//       },
//       "trip": {
//         "id": "23_3375_241223",
//         "headsign": "Zvonařka",
//         "is_canceled": false
//       },
//       "vehicle": {
//         "id": "service-0-6004",
//         "is_wheelchair_accessible": false,
//         "is_air_conditioned": false,
//         "has_charger": false
//       }
//     }
//   ]

export type DepartureItem = {
    departure: {
        timestamp_scheduled: string;
        timestamp_predicted: string;
        delay_seconds: number;
        minutes: number;
    };
    stop: {
        id: string;
        sequence: number;
        platform_code: string;
    };
    route: {
        type: string;
        short_name: string;
    };
    trip: {
        id: string;
        headsign: string;
        is_canceled: boolean;
    };
    vehicle: {
        id: string;
        is_wheelchair_accessible: boolean;
        is_air_conditioned: boolean;
        has_charger: boolean;
    };
}
