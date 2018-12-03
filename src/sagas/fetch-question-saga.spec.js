import { handleFetchQuestion } from './fetch-question-saga';

describe('Fetch questions saga', () => {
  it('should fetch the questions', async () => {
    // new instance of the function generator
    const gen = handleFetchQuestion({ question_id: 42 });
    // to make it run :
    const { value } = await gen.next();
  });
});
