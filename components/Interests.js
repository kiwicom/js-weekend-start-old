import * as React from "react"
import styled from "styled-components"
import { defaultTheme } from "@kiwicom/orbit-components"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Coffee from "@kiwicom/orbit-components/lib/icons/Coffee"
import Shopping from "@kiwicom/orbit-components/lib/icons/Shopping"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"

import InterestCard from "./InterestCard"

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXXLarge};
`

StyledInterests.defaultProps = {
  theme: defaultTheme
}
const Interest = () => (
  <StyledInterests>
    <InterestCard
      title="Party life"
      value="drinks"
      icon={<Cocktail />}
    />
    <InterestCard title="Coffee" value="coffee" icon={<Coffee />} />
    <InterestCard title="Shops" value="shops" icon={<Shopping />} />
    <InterestCard title="Food" value="food" icon={<Meal />} />
  </StyledInterests>
)

export default Interest
