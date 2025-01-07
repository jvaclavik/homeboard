import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {differenceInMinutes, format} from "date-fns";
import {css, Global} from "@emotion/react";
import {DepartureItem} from "./types";
import {getLocalStorageItem, setLocalStorageItem} from "./storage";
import {Arrow} from "./Arrow";

const FIRST_CALL_TIME = 6
const LAST_CALL_TIME = 3
const RELOAD_INTERVAL = 60

const globalStyle = (theme) => css`
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    height: 100%;
    border: 0;
    font-family: 'Helvatica', sans-serif;
    background-color: black;
    color: silver;

  }

`;
export const GlobalStyle = () => <Global styles={globalStyle} />;

const Row = styled.span<{$timeToGo:number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
  gap: 4px;
  align-items: center;
  margin-bottom: 30px;
  opacity: ${({$timeToGo})=>0.3+6*1/($timeToGo+1)};
  
`

const TransportName = styled.div<{$timeToGo:number}>`
  font-size: ${({$timeToGo})=>10+300*2/($timeToGo+1)}px;
  font-weight: bold;
  border: solid 4px #333;
  background: #121212;
  border-radius: ${({$timeToGo})=>10+100*1/($timeToGo+1)}px;
  position: relative;
  cursor: pointer;
  
  padding: 4px 12px;
  margin-top: 12px;
`
const TimeToGo = styled.div`
  font-size: 20px;
`
const Time = styled.div`
    color: #555;
  font-size: 14px;
`
const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  right: -50px
`

function App() {
  const [data, setData] = useState<DepartureItem[]>([])

  const [markedItem, setMarkedItem] = useState<string | null>(getLocalStorageItem('markedItem') || null)
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

    setInterval(()=>{
      fetchDepartureBoards();
    },RELOAD_INTERVAL*1000)
  }, []);

if(data.length === 0) return null
const dateNow = new Date()

  const handleMarkItem = (id) =>{
    setLocalStorageItem("markedItem",id)
    setMarkedItem(id)
  }



  return (
    <>
      <GlobalStyle/>
      {/*<div>Last reload: {format(dateNow, "H:mm")}</div>*/}
      {data.map((item,index)=> {
        const predictedDepartureDate = new Date(item.departure.timestamp_predicted)
        const timeToGo = differenceInMinutes(new Date(item.departure.timestamp_predicted), dateNow)
        const isMarked = markedItem === item.trip.id
        if(timeToGo < LAST_CALL_TIME-1) return null

        if(isMarked && timeToGo === FIRST_CALL_TIME){
          new Audio("./bell.mp3").play()
        }
        if(isMarked && timeToGo === LAST_CALL_TIME){
          new Audio("./bell.mp3").play()
          setTimeout(()=>{
            new Audio("./bell.mp3").play()
          },300)
        }

        return <Row $timeToGo={timeToGo} key={`row-${index}`} onClick={()=>handleMarkItem(item.trip.id)}>

          <TransportName $timeToGo={timeToGo}>{item.route.short_name}{isMarked && <ArrowContainer><Arrow /></ArrowContainer>}</TransportName>
          <TimeToGo><strong>{timeToGo}</strong> min</TimeToGo> <Time>{format(predictedDepartureDate, "H:mm")}</Time>
        </Row>
      })}
    </>
  );
}

export default App;
