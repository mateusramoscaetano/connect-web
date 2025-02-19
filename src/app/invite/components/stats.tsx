import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { CardContainer, CardLabel, CardValue } from './stats-card'

export function Stats() {
  return (
    <>
      <div className="grid gap-3 md:grid-cols-3">
        <CardContainer>
          <CardValue>1.000</CardValue>
          <CardLabel>Acessos ao link</CardLabel>
          <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
        <CardContainer>
          <CardValue>1.000</CardValue>
          <CardLabel>Inscrições Feitas</CardLabel>
          <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
        <CardContainer>
          <CardValue> #3</CardValue>
          <CardLabel>Posição no ranking</CardLabel>
          <Medal className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
      </div>
    </>
  )
}
