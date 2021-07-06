import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import example from '~/store/mymodule'
import vehicle from '~/store/vehicle'

let exampleStore: example
let vehicleStore: vehicle

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(example, store)
  vehicleStore = getModule(vehicle, store)
}

export { initialiseStores, exampleStore, vehicleStore }
