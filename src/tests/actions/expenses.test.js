import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'Rent',
    amount: 154156,
    createdAt: 1000,
    note: 'This is last month rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object without values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    }
  });
});
