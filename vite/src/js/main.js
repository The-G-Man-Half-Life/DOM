import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/database/database.js"
import { codersListV1,codersListV2,codersListV3 } from './operations.js'


codersListV1(coders)
codersListV2(coders)
codersListV3(coders)