import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../config/colors';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`
const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CountdownItem = styled.div`
    color: ${colors.white};
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    margin: 10px;
    padding-top: 10px;
    position: relative;
    width: 100px;
    height: 100px;

    & > span {
      ${'' /* color: ${colors.secondary}; */}
      font-size: 10px;
      text-transform: uppercase;
    }
`;

function Countdown({ timeTillDate, onComplete }) {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  

  useEffect(() => {
    let interval = setInterval(() => {
      const now = new Date().getTime()
      let distance = new Date(timeTillDate).getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [timeTillDate])

  const daysRadius = mapNumber(days, 85, 0, 0, 360)
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    onComplete();
    return null
  }

  return (
    <Container>
      <CountdownWrapper>
        <CountdownItem>
          <SVGCircle radius={daysRadius} />
          {days || "-"}
          <span>days</span>
        </CountdownItem>
        <CountdownItem>
          <SVGCircle radius={hoursRadius} />
          {hours || "-"}
          <span>hours</span>
        </CountdownItem>
        <CountdownItem>
          <SVGCircle radius={minutesRadius} />
          {minutes || "-"}
          <span>minutes</span>
        </CountdownItem>
        <CountdownItem>
          <SVGCircle radius={secondsRadius} />
          {seconds || "-"}
          <span>seconds</span>
        </CountdownItem>
      </CountdownWrapper>
    </Container>
  )
}

export default Countdown;

const SVGWrapper = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
`
const SVGCircle = ({ radius }) => (
  <SVGWrapper>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </SVGWrapper>
)

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ")

  return d
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}