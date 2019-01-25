import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Close from "@kiwicom/orbit-components/lib/icons/Close"
import Downshift from "downshift"

import ListChoice from "./ListChoice"

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
}) => (
  <StyledPlacePicker>
    <Downshift
      initialInputValue={defaultValue.name}
      onChange={onChange}
    >
      {({
        getInputProps,
        openMenu,
        clearSelection,
        isOpen,
        inputValue,
        highlightedIndex,
        getItemProps
      }) => (
        <div style={{ position: "relative" }}>
          <InputField
            {...getInputProps({ onFocus: openMenu })}
            inlineLabel
            label={label}
            suffix={
              <ButtonLink
                onClick={clearSelection}
                transparent
                iconLeft={<Close />}
              />
            }
          />
          {isOpen && (
            <ResultsList>
              {items
                .filter(
                  item =>
                    !inputValue || item.name.includes(inputValue)
                )
                .map(({ name }, index) => (
                  <ListChoice
                    title={name}
                    // eslint-disable-next-line
                    key={index}
                    selected={highlightedIndex === index}
                    {...getItemProps({ item: name, index })}
                  />
                ))}
            </ResultsList>
          )}
        </div>
      )}
    </Downshift>
  </StyledPlacePicker>
)

export default PlacePicker
