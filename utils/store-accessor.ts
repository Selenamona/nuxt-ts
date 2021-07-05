import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import example from '~/store/mymodule'

let exampleStore: example

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(example, store)
}

export { initialiseStores, exampleStore }
