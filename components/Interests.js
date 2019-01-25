import * as React from "react"
import styled, { css } from "styled-components"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Coffee from "@kiwicom/orbit-components/lib/icons/Coffee"
import Shopping from "@kiwicom/orbit-components/lib/icons/Shopping"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

import InterestCard from "./InterestCard"

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXXLarge};

  > * {
    margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
    margin-right: ${({ theme }) => theme.orbit.spaceSmall};
  }

  ${mq.mediumMobile(css`
    flex-direction: row;
  `)};
`

StyledInterests.defaultProps = {
  theme: defaultTheme
}
const Interests = ({ defaultValue }) => (
  <StyledInterests>
    <InterestCard
      title="Party Life"
      value="drinks"
      checked={defaultValue === "drinks"}
      icon={<Cocktail />}
    />
    <InterestCard
      title="Food"
      value="food"
      checked={defaultValue === "food"}
      icon={<Meal />}
    />
    <InterestCard
      title="Coffee"
      value="coffee"
      checked={defaultValue === "coffee"}
      icon={<Coffee />}
    />
    <InterestCard
      title="Shops"
      value="shops"
      checked={defaultValue === "shops"}
      icon={<Shopping />}
    />
  </StyledInterests>
)

export default Interests
