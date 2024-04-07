import { render, screen, fireEvent } from "@testing-library/react-native";
import RButton from "./RButton";

describe("RButton Component", () => {
  test("renders correctly", () => {
    const tree = render(<RButton />);
    expect(tree).toMatchSnapshot();
  });

  test("renders the correct text", () => {
    render(<RButton text="Test" />);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  test('renders the correct onPress', () => {
    const onPressMock = jest.fn();
    render(<RButton onPress={onPressMock} text="Click Me" />);
  
    fireEvent.press(screen.getByTestId('RButton'));
  
    expect(onPressMock).toHaveBeenCalled();
  });
});

