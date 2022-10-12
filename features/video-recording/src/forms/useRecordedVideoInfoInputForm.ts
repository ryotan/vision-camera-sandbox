import {useFormik} from 'formik';

import type {RecordedVideoInfoInputForm} from '../types';

export const useRecordedVideoInfoInputForm = () => {
  return useFormik<RecordedVideoInfoInputForm>({
    initialValues: {
      place: '',
    },
    onSubmit: () => {},
  });
};
