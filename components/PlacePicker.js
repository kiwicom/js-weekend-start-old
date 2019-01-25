import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import Downshift from "downshift"

const StyledPlacePicker = styled.div`
  width: 100%;
`

const ResultsList = styled.div`
  width: 100%;
  max-height: 270px;
  position: absolute;
  top: ${({ theme }) =>
    `calc(${theme.orbit.heightInputNormal} + ${
      theme.orbit.spaceXSmall
    })`};
  z-index: 10;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
`

const Div = styled.div`
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.orbit.paletteCloudLight
      : theme.orbit.paletteWhite};
`

Div.defaultProps = {
  theme: defaultTheme
}

const items = [
  { name: "Milan" },
  { name: "Brno" },
  { name: "Prague" },
  { name: "Oslo" },
  { name: "Helsinki" },
  { name: "Aš" },
  { name: "Prdelákovice" }
]

const PlacePicker = ({
  defaultValue,
  onChange = () => {},
  label = "Via"
}) => <StyledPlacePicker>I need TODO :(</StyledPlacePicker>

export default PlacePicker
