import * as React from "react"
import styled, { css } from "styled-components"
import { defaultTheme } from "@kiwicom/orbit-components"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Coffee from "@kiwicom/orbit-components/lib/icons/Coffee"
import Shopping from "@kiwicom/orbit-components/lib/icons/Shopping"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import mediaQuery from "@kiwicom/orbit-components/lib/utils/mediaQuery"

import InterestCard from "./InterestCard"

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXXLarge};

  ${mediaQuery.tablet(css`
    flex-direction: row;
  `)};

  > * {
    margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
    margin-right: ${({ theme }) => theme.orbit.spaceSmall};
  }
`

StyledInterests.defaultProps = {
  theme: defaultTheme
}
const Interest = ({ defaultValue }) => (
  <StyledInterests>
    <InterestCard
      title="Party life"
      value="drinks"
      icon={<Cocktail />}
      checked={defaultValue === "drinks"}
    />
    <InterestCard
      title="Coffee"
      value="coffee"
      icon={<Coffee />}
      checked={defaultValue === "coffee"}
    />
    <InterestCard
      title="Shops"
      value="shops"
      icon={<Shopping />}
      checked={defaultValue === "shops"}
    />
    <InterestCard
      title="Food"
      value="food"
      icon={<Meal />}
      checked={defaultValue === "food"}
    />
  </StyledInterests>
)

export default Interest
