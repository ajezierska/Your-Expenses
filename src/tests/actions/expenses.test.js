import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, removeExpense, editExpense, addExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '154ala'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '154ala'
  });
});

test('should setup edit expense action object', () => {
  const result = editExpense('111test', {note: 'New note value'});
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '111test',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1522
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    done();
  })

})



// test('should setup add expense action object without values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     }
//   });
// });
