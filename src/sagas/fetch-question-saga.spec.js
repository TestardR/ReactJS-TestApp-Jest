import { handleFetchQuestion } from './fetch-question-saga';
import fetch from 'isomorphic-fetch';

describe('Fetch questions saga', () => {
  // use our mock API
  beforeAll(() => {
    fetch.__setValue([{ question_id: 42 }]);
  });
  it('should fetch the questions', async () => {
    // new instance of the function generator
    const gen = handleFetchQuestion({ question_id: 42 });
    // to make it run :
    const { value } = await gen.next();
    // expect the answer to be :
    expect(value).toEqual([{ question_id: 42 }]);
    // expect the content to be
    expect(fetch).toHaveBeenCalledWith(`/api/questions/42`);
  });
});
