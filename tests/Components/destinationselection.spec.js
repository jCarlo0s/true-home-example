import DestinationSelection from "../../components/DestinationSelection";
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe("Destination component", () => {
    it('should render', () => {
        const cities = []
        render(<DestinationSelection cities={cities} handleDestinationOnChange={() => {}} />)
        expect(screen.getByText("Destino")).toBeInTheDocument();
    })
})