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
import { vguOnlineData, vguDistanceData } from './vguOnline';
import { sgvuDistanceData } from './sgvuDistance';
import { glaDistanceData } from './glaDistance';
import { lpuDistanceData } from './lpuDistance';
import { isbmDistanceData } from './isbmDistance';
import { xibmsAutonomousData } from './xibmsAutonomous';

// Central key-value mapping for /divine/university/:slug routes
export const universityDetailData = {
  "amity-online": amityOnlineData,
  "nmims-cdoe": nmimsOnlineData,
  "nmims-online": nmimsOnlineData,
  "op-jindal-online": opJindalOnlineData,
  "manipal-online": manipalOnlineData,
  "gla-online": glaOnlineData,
  "dy-patil-online": dyPatilOnlineData,
  "sharda-online": shardaOnlineData,
  "chandigarh-online": chandigarhOnlineData,
  "jain-university": jainOnlineData,
  "jain-online": jainOnlineData,
  "vgu-jaipur": vguOnlineData,
  "vgu-online": vguOnlineData,
  "vivekananda-global-university": vguOnlineData,
  "vivekananda-global-university-online": vguOnlineData,
  "suresh-gyan-vihar": sgvuDistanceData,
  "suresh-gyan-vihar-university": sgvuDistanceData,
  "sgvu": sgvuDistanceData,
  "sgvu-distance": sgvuDistanceData,
  "suresh-gyan-vihar-university-distance-education": sgvuDistanceData,
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
  vguOnlineData,
  vguDistanceData,
  sgvuDistanceData,
  glaDistanceData,
  lpuDistanceData,
  isbmDistanceData,
  xibmsAutonomousData
};

export default universityDetailData;
