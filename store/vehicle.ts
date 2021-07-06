import { Module, VuexModule } from "vuex-module-decorators";
import { Companies } from '~/types'


@Module({
  name: 'vehicle',
  stateFactory: true,
  namespaced: true, // 解决 unknown mutation type: XXX/XXX 报错
})
export default class Vehicle extends VuexModule {
  companies: Companies[] = [{ name: "c1" }, { name: 'c2' }]
  get company() {
    return (companyName: string) => {
      return this.companies.find(company => company.name === companyName)
    };
  }
}
