// =========================================================================
// UNIVERSITY DETAIL DATA REPOSITORY (CENTRAL HUB)
// Modular Architecture: Each university data is maintained in its own file.
// =========================================================================

import { amityOnlineData } from './amityOnline';
import { nmimsOnlineData } from './nmimsOnline';
import { opJindalOnlineData } from './opJindalOnline';
import { manipalOnlineData } from './manipalOnline';
import { glaOnlineData } from './glaOnline';
import { dyPatilOnlineData } from './dyPatilOnline';
import { shardaOnlineData } from './shardaOnline';
import { chandigarhOnlineData } from './chandigarhOnline';
import { jainOnlineData } from './jainOnline';
import { vguDistanceData } from './vguDistance';
import { sgvuDistanceData } from './sgvuDistance';
import { glaDistanceData } from './glaDistance';
import { lpuDistanceData } from './lpuDistance';
import { isbmDistanceData } from './isbmDistance';
import { xibmsAutonomousData } from './xibmsAutonomous';

// Central key-value mapping for /divine/university/:slug routes
export const universityDetailData = {
  "amity-online": amityOnlineData,
  "nmims-cdoe": nmimsOnlineData,
  "op-jindal-online": opJindalOnlineData,
  "manipal-online": manipalOnlineData,
  "gla-online": glaOnlineData,
  "dy-patil-online": dyPatilOnlineData,
  "sharda-online": shardaOnlineData,
  "chandigarh-online": chandigarhOnlineData,
  "jain-university": jainOnlineData,
  "vgu-jaipur": vguDistanceData,
  "suresh-gyan-vihar": sgvuDistanceData,
  "gla-distance": glaDistanceData,
  "lpu-distance": lpuDistanceData,
  "isbm-university": isbmDistanceData,
  "xibms-jaipur": xibmsAutonomousData,
};

// Also export individual datasets for direct modular imports if needed
export {
  amityOnlineData,
  nmimsOnlineData,
  opJindalOnlineData,
  manipalOnlineData,
  glaOnlineData,
  dyPatilOnlineData,
  shardaOnlineData,
  chandigarhOnlineData,
  jainOnlineData,
  vguDistanceData,
  sgvuDistanceData,
  glaDistanceData,
  lpuDistanceData,
  isbmDistanceData,
  xibmsAutonomousData
};

export default universityDetailData;
