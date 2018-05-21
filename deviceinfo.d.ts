// should be imported this way:
// import DeviceInfo from 'react-native-device-info';

export type DeviceType = 'Handset' | 'Tablet' | 'Tv' | 'Unknown';

declare const _default: {
  getUniqueID: () => string;
  getManufacturer: () => string;
  getBrand: () => string;
  getModel: () => string;
  getDeviceId: () => string;
  getSystemName: () => string;
  getSystemVersion: () => string;
  getBundleId: () => string;
  getApplicationName: () => string;
  getBuildNumber: () => string;
  getVersion: () => string;
  getReadableVersion: () => string;
  getDeviceName: () => string;
  getUserAgent: () => string;
  getDeviceLocale: () => string;
  getDeviceCountry: () => string;
  getTimezone: () => string;
  getInstanceID: () => string;
  getInstallReferrer: () => string | null;
  isEmulator: () => boolean;
  isTablet: () => boolean;
  getFontScale: () => number;
  is24Hour: () => boolean;
  isPinOrFingerprintSet: (cb: (isPinOrFingerprintSet: boolean) => void) => void;
  hasNotch: () => boolean;
  getFirstInstallTime: () => number;
  getLastUpdateTime: () => number;
  getSerialNumber: () => string;
  getIPAddress: () => Promise<string>;
  getMACAddress: () => Promise<string>;
  getPhoneNumber: () => string;
  getAPILevel: () => number;
  getCarrier: () => string;
  getTotalMemory: () => number;
  getMaxMemory: () => number;
  getTotalRootDiskCapacity: () => number;
  getTotalDataDiskCapacity: () => number;
  getTotalExternalDiskCapacity: () => number;
  getAvailableRootDiskCapacity: () => number;
  getAvailableDataDiskCapacity: () => number;
  getAvailableExternalDiskCapacity: () => number;
  getBatteryLevel: () => Promise<number>;
  isLandscape: () => boolean;
  isAirPlaneMode: () => Promise<boolean>;
  getDeviceType: () => DeviceType;
};

export default _default;
