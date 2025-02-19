import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/api/nLWConnect'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { CardContainer, CardLabel, CardValue } from './stats-card'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  console.log(rankingPosition)

  return (
    <>
      <div className="grid gap-3 md:grid-cols-3">
        <CardContainer>
          <CardValue>{accessCount}</CardValue>
          <CardLabel>Acessos ao link</CardLabel>
          <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
        <CardContainer>
          <CardValue>{inviteCount}</CardValue>
          <CardLabel>Inscrições Feitas</CardLabel>
          <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
        <CardContainer>
          <CardValue> #{rankingPosition}</CardValue>
          <CardLabel>Posição no ranking</CardLabel>
          <Medal className="size-5 text-purple absolute top-3 left-3" />
        </CardContainer>
      </div>
    </>
  )
}
