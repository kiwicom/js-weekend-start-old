import { useState, useRef, useReducer } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"
import CloseCircle from "@kiwicom/orbit-components/lib/icons/CloseCircle"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import styled from "styled-components"

import PlacePicker from "./PlacePicker"
import Slider from "./Slider"
import useOnClickOutside from "./useOnClickOutside"

const StyledButtons = styled.div`
  max-width: 756px;
`

const PlaceToVisit = ({
  place,
  changePlace = value => console.log(value),
  days = [2, 8],
  changeDays,
  onRemoveClick
}) => {
  // const [tripFrom, setFrom] = useState(place)
  const [tripDays, setDaysState] = useState(days)

  const setDays = daysChanged => {
    setDaysState(daysChanged)
    if (changeDays) changeDays(daysChanged)
  }

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // State for our slider
  const [isOpenSlider, setSliderVisibility] = useState(false)
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setSliderVisibility(false))
  return (
    <Stack direction="row">
      {/* use PlacePicker here */}
      <Slider
        openRef={ref}
        isOpen={isOpenSlider}
        onFocus={() => setSliderVisibility(true)}
        defaultValues={tripDays}
        onChange={(from, to) => setDays([from, to])}
      />
      <Button
        type="secondary"
        iconLeft={<CloseCircle />}
        disabled={!onRemoveClick}
        onClick={onRemoveClick}
      />
    </Stack>
  )
}

const defaultDays = [2, 5]

const places = [
  [{ name: "Itami", id: "ITM", code: "ITM" }, defaultDays]
]

const PlacesToVisit = ({ defaultValue = places }) => (
  <>
    <Heading type="title2" spaceAfter="medium">
      Places to visit
    </Heading>
    <Stack spaceAfter="medium">
      {defaultValue.map(([place, days], i) => (
        <PlaceToVisit
          place={place}
          days={days}
          // eslint-disable-next-line
          key={i}
        />
      ))}
    </Stack>
    <StyledButtons>
      <Stack direction="row">
        <Button type="secondary" iconLeft={<Plus />} block>
          Add destination
        </Button>
        <Button iconLeft={<Search />} block>
          Search
        </Button>
      </Stack>
    </StyledButtons>
  </>
)

export default PlacesToVisit
