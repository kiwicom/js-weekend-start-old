import * as React from "react"
import styled from "styled-components"
import Text from "@kiwicom/orbit-components/lib/Text"
import Radio from "@kiwicom/orbit-components/lib/Radio"
import { defaultTheme } from "@kiwicom/orbit-components"

const StyledInterestCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.orbit.paletteCloudLight};
  max-width: 180px;
  height: 60px;
`

StyledInterestCard.defaultProps = {
  theme: defaultTheme
}

const StyledIcon = styled.div`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.orbit.spaceMedium};
`

StyledIcon.defaultProps = {
  theme: defaultTheme
}

const StyledRadio = styled.div`
  > label {
    width: auto;
  }
`
const InterestCard = ({ title, value, icon, checked }) => (
  <StyledInterestCard>
    <StyledIcon>{icon}</StyledIcon>
    <Text weight="bold">{title}</Text>
    <StyledRadio>
      <Radio value={value} checked={checked} />
    </StyledRadio>
  </StyledInterestCard>
)

export default InterestCard
