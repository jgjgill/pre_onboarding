import {
  AtlantaHawksImage,
  BostonCelticsImage,
  BrooklynNetsImage,
  CharlotteHornetsImage,
  ChicagoBullsImage,
  ClevelandCavaliersImage,
  DallasMavericksImage,
  DenverNuggetsImage,
  DetroitPistonsImage,
  GoldenStateWarriorsImage,
  HoustonRocketsImage,
  IndianaPacersImage,
  LosAngelesClippersImage,
  LosAngelesLakersImage,
  MemphisGrizzliesImage,
  MiamiHeatImage,
  MilwaukeeBucksImage,
  MinnesotaTimberwolvesImage,
  NewOrleansPelicansImage,
  NewYorkKnicksImage,
  OklahomaCityThunderImage,
  OrlandoMagicImage,
  Philidephia76ersImage,
  PhoenixSunsImage,
  PortlandTrailBlazersImage,
  SacramentoKingsImage,
  SanAntonioSpursImage,
  TorontoRaptorsImage,
  UtahJazzImage,
  WashingtonWizardsImage,
} from 'assets/svgs'
import { ReactElement } from 'react'

export const useSelectTeamLogo = (id: number) => {
  const teamLogos: { [key: number]: ReactElement<any, any> } = {
    1: <AtlantaHawksImage />,
    2: <BostonCelticsImage />,
    3: <BrooklynNetsImage />,
    4: <CharlotteHornetsImage />,
    5: <ChicagoBullsImage />,
    6: <ClevelandCavaliersImage />,
    7: <DallasMavericksImage />,
    8: <DenverNuggetsImage />,
    9: <DetroitPistonsImage />,
    10: <GoldenStateWarriorsImage />,
    11: <HoustonRocketsImage />,
    12: <IndianaPacersImage />,
    13: <LosAngelesClippersImage />,
    14: <LosAngelesLakersImage />,
    15: <MemphisGrizzliesImage />,
    16: <MiamiHeatImage />,
    17: <MilwaukeeBucksImage />,
    18: <MinnesotaTimberwolvesImage />,
    19: <NewOrleansPelicansImage />,
    20: <NewYorkKnicksImage />,
    21: <OklahomaCityThunderImage />,
    22: <OrlandoMagicImage />,
    23: <Philidephia76ersImage />,
    24: <PhoenixSunsImage />,
    25: <PortlandTrailBlazersImage />,
    26: <SacramentoKingsImage />,
    27: <SanAntonioSpursImage />,
    28: <TorontoRaptorsImage />,
    29: <UtahJazzImage />,
    30: <WashingtonWizardsImage />,
  }

  return teamLogos[id]
}
