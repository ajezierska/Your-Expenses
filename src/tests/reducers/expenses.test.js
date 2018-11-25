import expensesReducer from  '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';
import { addExpense } from '../../actions/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    id: '501',
    description: "new rent",
    note: "last",
    amount: 5000,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
})

test('should edit an expense', () => {
   const updates = {
     note: 'kotek',
     amount: 500,
   }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('kotek');
})

test('should not edit expense if expense not found', () => {
   const updates = {
     note: 'kotek',
     amount: 500,
   }
   const action = {
     type: 'EDIT_EXPENSE',
     id: -1,
     updates
   };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
})