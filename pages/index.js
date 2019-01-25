import * as React from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"
import PlacesToVisit from "../components/PlacesToVisit"
import TopPart, { defaultValues } from "../components/TopPart"

const NomadForm = styled.div`
  max-width: 816px;
`

const StyledOrigin = styled.div`
  max-width: 756px;
`

const FlyForm = ({
  query = defaultValues,
  places = defaultValues.places
}) => (
  <ContentContainer>
    {/* TODO Heading  What are you interested in? */}
    {/* TODO Interests */}
    <NomadForm>
      <StyledOrigin>
        <Heading type="title1" spaceAfter="medium">
          What destinations do you want to visit?
        </Heading>
        <TopPart
          {...query}
          adults={query.adults || defaultValues.adults}
          flyFrom={query.flyFrom}
          flyTo={query.flyTo}
        />
      </StyledOrigin>
      <PlacesToVisit defaultValue={places} />
    </NomadForm>
  </ContentContainer>
)

export default FlyForm
