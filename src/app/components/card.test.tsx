/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./card";
import { Project } from "@/api/types";
import { AppContext } from "../contexts/context";

const testProject: Project = {
    id: 'test-1',
    title: 'Test Project',
    height: 2,
    width: 2,
    gridData: {
        grid: [],
        colorsUsed: {},
    }
}

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => null
    };
  }
}));

describe('Card component', () => {
   it('renders correctly', () => {
    render(
      <AppContext.Provider value={{ dispatch: () => {}}}>
        <Card project={testProject} />
      </AppContext.Provider>
    );

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText('Test Project'));
   });
});
