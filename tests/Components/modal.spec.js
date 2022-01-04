import Modal from "../../components/Modal";
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe("Modal Component", () => {
    it("Should render", () => {
        render(<Modal title="Demo"/>)
        expect(screen.getByText('Demo')).toBeInTheDocument()
    })
})