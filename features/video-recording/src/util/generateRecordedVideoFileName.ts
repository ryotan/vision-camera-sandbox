import {randomId} from '@ryotan-vision-camera-sandbox/random';

import {formatDateForFileName} from './formatDateForFileName';

export const generateRecordedVideoFileName = (date: Date) => {
  return `record-${formatDateForFileName(date)}-${randomId()}.mp4`;
};
