/*
 * Copyright 2019 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as _ from 'lodash';
import { RGBLed } from './leds'

const settings = require('../models/settings')

export const ledTargetMap = settings.get('usbLedsMap') || {
  'platform-3f980000.usb-usb-0:1.3.3:1.0-scsi-0:0:0:0': new RGBLed([24, 23, 25]),
  'platform-3f980000.usb-usb-0:1.3.2:1.0-scsi-0:0:0:0': new RGBLed([14, 15, 18]),
  'platform-3f980000.usb-usb-0:1.3.1:1.0-scsi-0:0:0:0': new RGBLed([5, 26, 6]),
  'platform-3f980000.usb-usb-0:1.3.4:1.0-scsi-0:0:0:0': new RGBLed([17, 22, 27]),
};

export const getDriveLed = (devicePath: string) => {
  const sysPath: string = devicePath.replace('/dev/disk/by-path/', '')
  return ledTargetMap[sysPath]
}

console.log('ledTargetMap', JSON.stringify(ledTargetMap));
console.log('getDriveLed', getDriveLed)
