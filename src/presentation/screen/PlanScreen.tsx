import { Layout } from "@ui-kitten/components"
import { CardPlan } from "../components/CardPlan"
import { HeaderComponent } from "../components/HeaderComponent"

export const PlanScreen = () => {
  return (
    <Layout>
      <HeaderComponent title="Planes disponibles" />
      <CardPlan />
    </Layout>
  )
}
