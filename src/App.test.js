import { render, screen ,fireEvent, getByText, getByLabelText, getByTestId} from "@testing-library/react";
import BookingPage from "./Pages/BookingPage";
import App ,{initializeTimes,updateTimes } from "./TestValidation";
test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve a table now!");
    expect(headingElement).toBeInTheDocument();
})

describe('initializedTimes test', () => {
  it('does something', () => {
    // test code
    expect(initializeTimes()).not.toEqual([]);
  });
});

test(' Validate the HTML5 validation is applied', () => {
  render(<BookingPage />);
    //Getting inputs

  const dateInput=screen.getByLabelText('Choose a date');
  const timeInput=screen.getByLabelText('Choose time');
  const guestsInput=screen.getByLabelText('Number of guests');
  const occasionInput=screen.getByLabelText('Ocassion');

 expect(dateInput).toHaveAttribute('name','date')
 expect(timeInput).toHaveAttribute('name','time')

 expect(guestsInput).toHaveAttribute('name','guest')
 expect(occasionInput).toHaveAttribute('name','occasion')
})


test('Add unit tests for JavaScript validation functions', () => {
  render(<BookingPage />);
    //Getting inputs

  const dateInput=screen.getByLabelText('Choose a date');
  const dateInputError=screen.getByTestId('date-test-error');

  const timeInput=screen.getByLabelText('Choose time');
  const timeInputError=screen.getByTestId('time-test-error');

  const guestsInput=screen.getByLabelText('Number of guests');
  const guestInputTestError=screen.getByTestId('guest-test-error');



  const occasionInput=screen.getByLabelText('Ocassion');
  const occasionInputTestError=screen.getByTestId('occasion-test-error');

  fireEvent.change(dateInput, { target: { value: '2022-03-03' } });
  fireEvent.change(timeInput, { target: { value: '18:00' } });
  fireEvent.change(guestsInput, { target: { value: 5 } });
  fireEvent.change(occasionInput, { target: { value: 'Birthday' } });


  expect(dateInputError).not.toEqual('Required date')
 expect(timeInputError).not.toEqual('Required time')
 expect(guestInputTestError).not.toEqual('Required guest')
 expect(occasionInputTestError).not.toEqual('Required occasion')
})


  