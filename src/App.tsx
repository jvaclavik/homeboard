import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import './App.css';
import {format} from "date-fns";

const mockData = [
  [
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:38:00+01:00",
        "timestamp_predicted": "2025-01-06T17:40:00+01:00",
        "delay_seconds": 120,
        "minutes": 3
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_23810_241223",
        "headsign": "Zahradní Město",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-8292",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:42:00+01:00",
        "timestamp_predicted": "2025-01-06T17:42:52+01:00",
        "delay_seconds": 52,
        "minutes": 6
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "25"
      },
      "trip": {
        "id": "25_13058_241125",
        "headsign": "Výstaviště",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-8335",
        "is_wheelchair_accessible": false,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:43:00+01:00",
        "timestamp_predicted": "2025-01-06T17:43:00+01:00",
        "delay_seconds": 0,
        "minutes": 6
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 7,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_23899_241223",
        "headsign": "Nádraží Hostivař",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-9305",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:48:00+01:00",
        "timestamp_predicted": "2025-01-06T17:48:00+01:00",
        "delay_seconds": 0,
        "minutes": 11
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_23815_250106",
        "headsign": "Zahradní Město",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-8554",
        "is_wheelchair_accessible": false,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:52:00+01:00",
        "timestamp_predicted": "2025-01-06T17:52:00+01:00",
        "delay_seconds": 0,
        "minutes": 15
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "25"
      },
      "trip": {
        "id": "25_13324_241223",
        "headsign": "Výstaviště",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-9156",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:53:00+01:00",
        "timestamp_predicted": "2025-01-06T17:53:00+01:00",
        "delay_seconds": 0,
        "minutes": 16
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 7,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_21551_241223",
        "headsign": "Nádraží Hostivař",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-9311",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T17:58:00+01:00",
        "timestamp_predicted": "2025-01-06T17:58:00+01:00",
        "delay_seconds": 0,
        "minutes": 21
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_8819_250106",
        "headsign": "Zahradní Město",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-9388",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": true,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T18:02:00+01:00",
        "timestamp_predicted": "2025-01-06T18:02:00+01:00",
        "delay_seconds": 0,
        "minutes": 25
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 10,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "25"
      },
      "trip": {
        "id": "25_13336_241223",
        "headsign": "Výstaviště",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-9124",
        "is_wheelchair_accessible": true,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T18:03:00+01:00",
        "timestamp_predicted": "2025-01-06T18:03:00+01:00",
        "delay_seconds": 0,
        "minutes": 26
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 7,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "22"
      },
      "trip": {
        "id": "22_15571_250106",
        "headsign": "Nádraží Hostivař",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-8556",
        "is_wheelchair_accessible": false,
        "is_air_conditioned": false,
        "has_charger": false
      }
    },
    {
      "departure": {
        "timestamp_scheduled": "2025-01-06T18:05:00+01:00",
        "timestamp_predicted": "2025-01-06T18:05:00+01:00",
        "delay_seconds": 0,
        "minutes": 28
      },
      "stop": {
        "id": "U362Z1P",
        "sequence": 2,
        "platform_code": "A"
      },
      "route": {
        "type": "tram",
        "short_name": "23"
      },
      "trip": {
        "id": "23_3375_241223",
        "headsign": "Zvonařka",
        "is_canceled": false
      },
      "vehicle": {
        "id": "service-0-6004",
        "is_wheelchair_accessible": false,
        "is_air_conditioned": false,
        "has_charger": false
      }
    }
  ]
]

const Row = styled.span`
    display: flex;
    flex-direction: row;
  gap: 10px;
  align-items: center;
`

const TransportName = styled.span`
  font-size: 30px;
  font-weight: bold;
`
const Time = styled.span`

`

function App() {
  const [data, setData] = useState([])
  const fetchDepartureBoards = async () => {
    const url = 'https://api.golemio.cz/v2/public/departureboards?stopIds={"0":["U362Z1P"]}&limit=10';

    const headers = {
      "X-Access-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIyNCwiaWF0IjoxNzM2MTc2NTAwLCJleHAiOjExNzM2MTc2NTAwLCJpc3MiOiJnb2xlbWlvIiwianRpIjoiZWIyNWE5OWEtNjExYS00MmMxLWE3NjMtYjAxY2ZjNTE2YjBjIn0.f5P7jgBzJcfxHy9CrwvcX10ssEIQ1duLbuBb25cw_Xw"
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData[0])
    } catch (error) {
      console.error('Error fetching departure boards:', error);
    }
  };



  useEffect(() => {
    fetchDepartureBoards();


    setTimeout(()=>{
        window.location.reload();
    },60000)
  }, []);

if(data.length === 0) return null

  return (
    <>
      <div>Last reload: {format(new Date(), "H:mm")}</div>
      {data.map((item)=> <Row> <TransportName>{item.route.short_name}</TransportName><Time>{format(new Date(item.departure.timestamp_predicted), "H:mm")
        }</Time></Row>)}
    </>
  );
}

export default App;
