import { render, screen } from "@testing-library/react";
import Cards from "./cards";
import { Project } from "@/api/types";

const testProjects: Project[] = [{
    id: 'test-1',
    title: 'Test Project',
    height: 2,
    width: 2,
    gridData: {
        grid: [],
        colorsUsed: {},
    }
},
{
    id: 'test-2',
    title: 'Test Project 2',
    height: 2,
    width: 2,
    gridData: {
        grid: [],
        colorsUsed: {},
    }
}]

jest.mock("./card.tsx", () => jest.fn(() => <div>mocked child</div>));

describe('Cards component', () => {
    it('renders multiple cards', () => {
        render(<Cards projects={testProjects} />)
        expect(screen.queryAllByText('mocked child')).toHaveLength(2);
    });
});
