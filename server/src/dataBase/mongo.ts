import { MongooseModule } from '@nestjs/mongoose';
import { userName, password, databaseName, hostName } from '../config/mongo.conf'

const userAuth = userName && password ? (userName + ':' + password + '@') : ''
const connectStr = `mongodb://${userAuth}${hostName}/${databaseName}`
console.log('connect==>', connectStr)
export const MongooseModuleRoot = MongooseModule.forRoot(connectStr);
