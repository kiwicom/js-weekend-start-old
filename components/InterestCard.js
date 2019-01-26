import * as React from "react"
import styled from "styled-components"
import Text from "@kiwicom/orbit-components/lib/Text"
import Radio from "@kiwicom/orbit-components/lib/Radio"
import { defaultTheme } from "@kiwicom/orbit-components"

const StyledInterestCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.orbit.paletteCloudLight};
`

StyledInterestCard.defaultProps = {
  theme: defaultTheme
}

const StyledIcon = styled.div`
  flex-shrink: 0;
`

const InterestCard = ({ title, value, icon }) => (
  <StyledInterestCard>
    <StyledIcon>{icon}</StyledIcon>
    <Text weight="bold">{title}</Text>
    <Radio value={value} checked />
  </StyledInterestCard>
)

export default InterestCard
