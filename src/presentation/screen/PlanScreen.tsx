import { Layout } from "@ui-kitten/components"
import { CardPlan } from "../components/CardPlan"
import { HeaderComponent } from "../components/HeaderComponent"
import { StyleSheet } from "react-native"
import { colors } from "../theme/theme"
import { ScrollView } from "react-native-gesture-handler"


export const PlanScreen = () => {
  return (
    <Layout style={style.container}>
      <HeaderComponent title="Planes disponibles" />
      <ScrollView>
        <CardPlan title="Plan Basic" price={10} plan="basic" />
        <CardPlan title="Plan Extra" price={20} plan="extra" />
        <CardPlan title="Plan Premium" price={30} plan="gold" />
      </ScrollView>
    </Layout>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})