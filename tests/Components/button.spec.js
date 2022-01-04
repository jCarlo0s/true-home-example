import Button from "../../components/Button";
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe("Button Component Test", () => {
    it("should render", () => {
        render(<Button label="Test button" />);
        expect(screen.getByText("Test button")).toBeInTheDocument();
    });
});