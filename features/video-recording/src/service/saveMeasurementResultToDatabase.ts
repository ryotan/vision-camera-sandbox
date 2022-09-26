import type {MeasurementResult} from './useSaveMeasurementResult';

export const saveMeasurementResultToDatabase = async (measurementResult: MeasurementResult) => {
  await new Promise(resolve => setTimeout(resolve, 20));
};
